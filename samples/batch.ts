import {
  BatchSubmissionRequest,
  createBatchDocumentTranslationPathFirst as DocumentTranslationPathFirst,
  createBatchDocumentTranslationVerbFirst as DocumentTranslationVerbFirst,
} from "../src";
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
      targets: [
        { targetUrl, language: "es", storageSource: "AzureBlob" },
        { targetUrl, language: "fr", storageSource: "AzureBlob" },
      ],
    },
  ],
};

async function samplePathFirst() {
  console.log("==== Path First");
  const client = DocumentTranslationPathFirst({ key }, endpoint);
  const batch = client.path("/batches");

  // Submit a batch for translation
  const batchResult = await batch.post({
    body: batchRequest,
  });

  if (batchResult.status !== 202) {
    throw batchResult.body.error;
  }

  const jobUrl = batchResult.headers["operation-location"];
  const jobId = extractJobId(jobUrl);

  const batchJob = batch.subClient("/:id", jobId);

  let job = await batchJob.get();

  if (job.status !== 200) {
    throw job.body.error;
  }

  while (!terminalStates.includes(job.body.status)) {
    job = await batchJob.get();
    if (job.status !== 200) {
      throw job.body.error;
    }
  }

  if (job.body.status !== "Succeeded") {
    throw job.body.error;
  }

  const documents = batchJob.subClient("/documents");
  const translatedDocuments = await documents.get();

  if (translatedDocuments.status !== 200) {
    throw translatedDocuments.body.error;
  }

  for (const document of translatedDocuments.body.value) {
    const docDetails = await documents
      .subClient("/:documentId", document.id)
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

async function sampleVerbFirst() {
  console.log("==== Verb First");
  const client = DocumentTranslationVerbFirst({ key }, endpoint);

  // Submit a batch
  const batchResult = await client.request("POST /batches", {
    body: batchRequest,
  });

  if (batchResult.status !== 202) {
    throw batchResult.body.error;
  }

  const jobUrl = batchResult.headers["operation-location"];
  const batchId = extractJobId(jobUrl);

  let batchJob = await client.request("GET /batches/:id", batchId);

  if (batchJob.status !== 200) {
    throw batchJob.body.error;
  }

  while (!terminalStates.includes(batchJob.body.status)) {
    batchJob = await client.request("GET /batches/:id", batchId);
    if (batchJob.status !== 200) {
      throw batchJob.body.error;
    }
  }

  if (batchJob.body.status !== "Succeeded") {
    throw batchJob.body.error;
  }

  const translatedDocuments = await client.request(
    "GET /batches/:id/documents",
    batchId
  );

  if (translatedDocuments.status !== 200) {
    throw translatedDocuments.body.error;
  }

  for (const document of translatedDocuments.body.value) {
    const docDetails = await client.request(
      "GET /batches/:id/documents/:documentId",
      batchId,
      document.id
    );

    if (docDetails.status !== 200) {
      throw docDetails.body.error;
    }

    console.log(
      `Document: ${docDetails.body.path} translated to ${docDetails.body.to} - Status: ${docDetails.body.status}`
    );
  }
}

async function main() {
  await samplePathFirst();
  // await sampleVerbFirst();
}

main().catch(console.error);