"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
Object.defineProperty(exports, "__esModule", { value: true });
const core_client_1 = require("@azure-rest/core-client");
function DocumentTranslator(endpoint, credentials, options = {}) {
    var _a;
    const baseUrl = (_a = options.baseUrl) !== null && _a !== void 0 ? _a : `${endpoint}/translator/text/batch/v1.0-preview.1`;
    options = Object.assign(Object.assign({}, options), { credentials: {
            scopes: ["https://cognitiveservices.azure.com/.default"],
            apiKeyHeaderName: "Ocp-Apim-Subscription-Key",
        } });
    return core_client_1.getClient(baseUrl, credentials, options);
}
exports.default = DocumentTranslator;
