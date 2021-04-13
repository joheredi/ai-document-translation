import BatchDocumentTranslation from "../";
import { config } from "dotenv";

config();

const endpoint = process.env["ENDPOINT"] || "";
const key = process.env["API_KEY"] || "<API KEY>";

async function main() {
  console.log("==== Path First");
  const client = BatchDocumentTranslation(endpoint, { key });
  const formatsResult = await client.path("/documents/formats").get();

  if (formatsResult.status === "200") {
    for (const item of formatsResult.body.value) {
      console.log(item.format);
    }
  }
}

main().catch(console.error);
