import {
  createBatchDocumentTranslationPathFirst,
  createBatchDocumentTranslationVerbFirst,
} from "..";
import { config } from "dotenv";

config();

const endpoint = process.env["ENDPOINT"] || "";
const key = process.env["API_KEY"] || "<API KEY>";

async function samplePathFirst() {
  console.log("==== Path First");
  const client = createBatchDocumentTranslationPathFirst({ key }, endpoint);
  const formatsResult = await client.path("/documents/formats").get();

  if (formatsResult.status === 200) {
    for (const format of formatsResult.body.value) {
      console.log(format.format);
    }
  }
}

async function sampleVerbFirst() {
  console.log("==== Verb First");
  const client = createBatchDocumentTranslationVerbFirst({ key }, endpoint);
  const formatsResult = await client.request("GET /documents/formats");

  if (formatsResult.status === 200) {
    for (const format of formatsResult.body.value) {
      console.log(format.format);
    }
  }
}

samplePathFirst()
  .then(() => sampleVerbFirst())
  .catch(console.error);
