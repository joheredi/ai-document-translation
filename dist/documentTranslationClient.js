"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_client_1 = require("@azure-rest/core-client");
function DocumentTranslation(endpoint, credentials, options = {}) {
    const baseUrl = options.baseUrl ||
        "{endpoint}/translator/text/batch/v1.0-preview.1".replace(/{endpoint}/g, endpoint);
    options = Object.assign(Object.assign({}, options), { credentials: {
            scopes: ["https://cognitiveservices.azure.com/.default"],
            apiKeyHeaderName: "Ocp-Apim-Subscription-Key",
        } });
    return core_client_1.getClient(baseUrl, credentials, options);
}
exports.default = DocumentTranslation;
