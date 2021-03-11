"use strict";
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
exports.createBatchDocumentTranslationPathFirst = exports.createBatchDocumentTranslationVerbFirst = void 0;
var batchDocumentTranslationVerbFirst_1 = require("./batchDocumentTranslationVerbFirst");
Object.defineProperty(exports, "createBatchDocumentTranslationVerbFirst", { enumerable: true, get: function () { return batchDocumentTranslationVerbFirst_1.createBatchDocumentTranslationVerbFirst; } });
var batchDocumentTranslationPathFirst_1 = require("./batchDocumentTranslationPathFirst");
Object.defineProperty(exports, "createBatchDocumentTranslationPathFirst", { enumerable: true, get: function () { return batchDocumentTranslationPathFirst_1.createBatchDocumentTranslationPathFirst; } });
__exportStar(require("./storageHelper"), exports);
__exportStar(require("./models"), exports);
__exportStar(require("./parameters"), exports);
__exportStar(require("./responses"), exports);
