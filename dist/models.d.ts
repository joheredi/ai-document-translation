export interface BatchSubmissionRequest {
    inputs: BatchRequest[];
}
export interface BatchRequest {
    source: SourceInput;
    targets: TargetInput[];
    storageType?: StorageInputType;
}
export interface SourceInput {
    sourceUrl: string;
    filter?: DocumentFilter;
    language?: string;
    storageSource?: StorageSource;
}
export interface DocumentFilter {
    prefix?: string;
    suffix?: string;
}
export interface TargetInput {
    targetUrl: string;
    category?: string;
    language: string;
    glossaries?: Glossary[];
    storageSource?: StorageSource;
}
export interface Glossary {
    glossaryUrl: string;
    format?: string;
    version?: string;
    storageSource?: StorageSource;
}
export interface ErrorResponseV2 {
    error?: ErrorV2;
}
export interface ErrorV2 {
    code?: ErrorCodeV2;
    message: string;
    target?: string;
    innerError?: InnerErrorV2;
}
export interface InnerErrorV2 {
    code: string;
    message: string;
    target?: string;
    innerError?: InnerErrorV2;
}
export interface BatchStatusResponse {
    value: BatchStatusDetail[];
    nextLink?: string;
}
export interface BatchStatusDetail {
    id: string;
    createdDateTimeUtc: Date;
    lastActionDateTimeUtc: Date;
    status: Status;
    error?: ErrorV2;
    summary: StatusSummary;
}
export interface StatusSummary {
    total: number;
    failed: number;
    success: number;
    inProgress: number;
    notYetStarted: number;
    cancelled: number;
    totalCharacterCharged: number;
}
export interface DocumentStatusDetail {
    path: string;
    createdDateTimeUtc: Date;
    lastActionDateTimeUtc: Date;
    status: Status;
    to: string;
    error?: ErrorV2;
    progress: number;
    id: string;
    characterCharged?: number;
}
export interface DocumentStatusResponse {
    value: DocumentStatusDetail[];
    nextLink?: string;
}
export interface FileFormatListResult {
    value: FileFormat[];
}
export interface FileFormat {
    format?: string;
    fileExtensions?: string[];
    contentTypes?: string[];
    versions?: string[];
}
export interface StorageSourceListResult {
    value: "" | "one";
}
export declare type StorageSource = string;
export declare type StorageInputType = string;
export declare type ErrorCodeV2 = string;
export declare type Status = string;
//# sourceMappingURL=models.d.ts.map