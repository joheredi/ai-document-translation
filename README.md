## Document Translation Low Level Client

Prototype for Document Translation that's a general REST client combined with service-specific TypeScript types to help navigate and use the [REST API][rest_api] directly.

### Install

```bash
npm install https://github.com/joheredi/ai-document-translation
```

### Prerequisites

- An [Azure subscription][azure_sub].
- An existing Azure Translator resource. If you need to create the resource, you can use the [Azure Portal][create_translator] or [Azure CLI][azure_cli].

### Create and authenticate a `DocumentTranslation` client

To create a client object to access the Document Translation API, you will need the `endpoint` of your Document Translation resource and a `credential`. The Document Translation client can use either Azure Active Directory credentials or an API key credential to authenticate.

You can find the endpoint for your Translator resource in the [Azure Portal][azure_portal]

`https://<NAME-OF-YOUR-RESOURCE>.cognitiveservices.azure.com`

#### Using an API Key

Use the [Azure Portal][azure_portal] to browse to your Document Translation resource and retrieve an API key, or use the [Azure CLI][azure_cli] snippet below:

**Note:** Sometimes the API key is referred to as a "subscription key" or "subscription API key."

```PowerShell
az cognitiveservices account keys list --resource-group <your-resource-group-name> --name <your-resource-name>
```

Once you have an API key and endpoint, you can use a `KeyCredential` object to authenticate the client as follows:

```js
import { createBatchDocumentTranslationVerbFirst } from "@azure/ai-document-translation";

const client = createBatchDocumentTranslationVerbFirst("<endpoint>", { key: "<API key>" });
```

#### Using an Azure Active Directory Credential

Client API key authentication is used in most of the examples, but you can also authenticate with Azure Active Directory using the [Azure Identity library][azure_identity]. To use the [DefaultAzureCredential][defaultazurecredential] provider shown below,
or other credential providers provided with the Azure SDK. Install `@azure/identity`

```bash
npm install @azure/identity
```

You will also need to [register a new AAD application][register_aad_app] and grant access to Translator by assigning the `"Cognitive Services User"` role to your service principal (note: other roles such as `"Owner"` will not grant the necessary permissions, only `"Cognitive Services User"` will suffice to run the examples and the sample code).

Set the values of the client ID, tenant ID, and client secret of the AAD application as environment variables: `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_CLIENT_SECRET`.

```js
// import {createBatchDocumentTranslationVerbFirst as DocumentTranslation} from @azure/ai-document-translation;
import { createBatchDocumentTranslationPathFirst } from "@azure/ai-document-translation";
import { DefaultAzureCredential } from "@azure/identity";

const client = createBatchDocumentTranslationPathFirst("<endpoint>", new DefaultAzureCredential());
```

### Samples with Path First

#### Call an endpoint

```typescript
import { createBatchDocumentTranslationPathFirst } from "@azure/ai-document-translation";

const endpoint = process.env["ENDPOINT"] || "";
const key = process.env["API_KEY"] || "<API KEY>";

const client = createBatchDocumentTranslationPathFirst(endpoint, { key });
const formatsResult = await client.path("/documents/formats").get();

if (formatsResult.status === 200) {
  for (const item of formatsResult.body.value) {
    console.log(item.format);
  }
}
```

### Call an arbitrary endpoint with pathUnchecked

```typescript
import { createBatchDocumentTranslationPathFirst } from "@azure/ai-document-translation";

const endpoint = process.env["ENDPOINT"] || "";
const key = process.env["API_KEY"] || "<API KEY>";

const client = createBatchDocumentTranslationPathFirst(endpoint, { key });
const formatsResult = await client.pathUnckecked("/documents/formats").get();

if (formatsResult.status === 200) {
  for (const item of formatsResult.body.value) {
    console.log(item.format);
  }
}
```

### Samples with Verb First

#### Call an endpoint

```typescript
import { createBatchDocumentTranslationVerbFirst } from "@azure/ai-document-translation";

const endpoint = process.env["ENDPOINT"] || "";
const key = process.env["API_KEY"] || "<API KEY>";

const client = createBatchDocumentTranslationVerbFirst(endpoint, { key });
const formatsResult = await client.request("GET /documents/formats");

if (formatsResult.status === 200) {
  for (const format of formatsResult.body.value) {
    console.log(format.format);
  }
}
```

### Call an arbitrary endpoint with requestUnchecked

```typescript
import { createBatchDocumentTranslationVerbFirst } from "@azure/ai-document-translation";

const endpoint = process.env["ENDPOINT"] || "";
const key = process.env["API_KEY"] || "<API KEY>";

const client = createBatchDocumentTranslationVerbFirst(endpoint, { key });
const formatsResult = await client.requestUnchecked("GET /documents/formats");

if (formatsResult.status === 200) {
  for (const format of formatsResult.body.value) {
    console.log(format.format);
  }
}
```

[azure_cli]: https://docs.microsoft.com/cli/azure
[azure_sub]: https://azure.microsoft.com/free/
[create_translator]: https://ms.portal.azure.com/#create/Microsoft.CognitiveServicesTextTranslation
[azure_portal]: https://portal.azure.com
[azure_identity]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/identity/identity
[register_aad_app]: https://docs.microsoft.com/azure/cognitive-services/authentication#assign-a-role-to-a-service-principal
[defaultazurecredential]: https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/identity/identity#defaultazurecredential
[rest_api]: https://docs.microsoft.com/en-us/rest/api/cognitiveservices/translator/documenttranslation
