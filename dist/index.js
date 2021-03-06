"use strict";
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A rest library for working with the Azure Document Translator service.
 * @packageDocumentation
 */
const documentTranslator_1 = require("./documentTranslator");
__exportStar(require("./documentTranslator"), exports);
__exportStar(require("./models"), exports);
__exportStar(require("./parameters"), exports);
__exportStar(require("./responses"), exports);
exports.default = documentTranslator_1.default;
