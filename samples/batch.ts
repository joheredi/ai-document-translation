import BatchDocumentTranslation from "../src";
import { BatchSubmissionRequest } from "../src";
import { config } from "dotenv";

config();

const endpoint = process.env["ENDPOINT"] || "";
const key = process.env["API_KEY"] || "<API KEY>";
const sourceUrl = process.env["SOURCE_CONTAINER"] || "";
const targetUrl = process.env["TARGET_CONTAINER"] || "";

const terminalStates = ["Succeeded", "Failed", "Cancelled", "ValidationFailed"];

const batchRequest: BatchSubmissionRequest = {
  inputs: [
    {
      source: {
        sourceUrl,
      },
      targets: [{ targetUrl, language: "es", storageSource: "AzureBlob" }],
    },
  ],
};

const wait = (ms: number = 5000) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};

async function main() {
  console.log("==== Path First");
  // Make sure that the target url is clean
  const client = BatchDocumentTranslation(endpoint, { key });
  const batch = client.path("/batches");

  // Submit a batch for translation
  const batchResult = await batch.post({
    body: batchRequest,
  });

  if (batchResult.status !== 202) {
    throw batchResult.body.error;
  }

  const batchStatusUrl = batchResult.headers["operation-location"];
  const jobId = extractJobId(batchStatusUrl);
  const batchJob = client.pathUnchecked(batchStatusUrl);

  let job = await batchJob.get();

  if (job.status !== 200) {
    throw job.body.error;
  }

  while (!terminalStates.includes(job.body.status)) {
    job = await batchJob.get();
    if (job.status !== 200) {
      throw job.body.error;
    }
    console.log(job.body.status);
    if (job.body.status === "Succeeded") {
      break;
    }

    await wait();
  }

  if (job.body.status !== "Succeeded") {
    throw job.body.error;
  }

  const documents = client.path("/batches/{id}/documents", jobId);
  const translatedDocuments = await documents.get();

  if (translatedDocuments.status !== 200) {
    throw translatedDocuments.body.error;
  }

  for (const document of translatedDocuments.body.value) {
    const docDetails = await client
      .path("/batches/{id}/documents", document.id)
      .get();

    if (docDetails.status !== 200) {
      throw docDetails.body.error;
    }

    console.log(
      `Document: ${docDetails.body.path} translated to ${docDetails.body.to} - Status: ${docDetails.body.status}`
    );
  }
}

/**
 * The API returns the job URL which contains the the JobId int he last part ot the path
 */
function extractJobId(jobUrl: string) {
  const parts = jobUrl.split("/");

  return parts[parts.length - 1];
}

main().catch(console.error);
