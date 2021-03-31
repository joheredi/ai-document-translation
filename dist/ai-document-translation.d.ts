import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { KeyCredential } from '@azure/core-auth';
import { PathUncheckedClient } from '@azure-rest/core-client';
import { RawHttpHeaders } from '@azure/core-rest-pipeline';
import { RequestParameters } from '@azure-rest/core-client';
import { TokenCredential } from '@azure/core-auth';

export declare interface BatchRequest {
    /** Source of the input documents */
    source: SourceInput;
    /** Location of the destination for the output */
    targets: TargetInput[];
    /** Storage type of the input documents source string */
    storageType?: StorageInputType;
}

export declare interface BatchStatusDetail {
    /** Id of the operation. */
    id: string;
    /** Operation created date time */
    createdDateTimeUtc: Date;
    /** Date time in which the operation's status has been updated */
    lastActionDateTimeUtc: Date;
    /** List of possible statuses for job or document */
    status: Status;
    /** This contains an outer error with error code, message, details, target and an inner error with more descriptive details. */
    error?: ErrorV2;
    /** */
    summary: StatusSummary;
}

export declare interface BatchStatusResponse {
    /** The summary status of individual operation */
    value: BatchStatusDetail[];
    /** Url for the next page.  Null if no more pages available */
    nextLink?: string;
}

export declare interface BatchSubmissionRequest {
    /** The input list of documents or folders containing documents */
    inputs: BatchRequest[];
}

export declare interface CancelOperation {
    /**
     * Returns the status for a document translation request.
     * The status includes the overall request status, as well as the status for documents that are being translated as part of that request.
     */
    get(options?: GetOperationStatusParameters): Promise<GetOperationStatus200Response | GetOperationStatus401Response | GetOperationStatus404Response | GetOperationStatus429Response | GetOperationStatus500Response | GetOperationStatus503Response>;
    /**
     * Cancel a currently processing or queued operation.
     * Cancel a currently processing or queued operation.
     * An operation will not be cancelled if it is already completed or failed or cancelling. A bad request will be returned.
     * All documents that have completed translation will not be cancelled and will be charged.
     * All pending documents will be cancelled if possible.
     */
    delete(options?: CancelOperationParameters): Promise<CancelOperation200Response | CancelOperation401Response | CancelOperation404Response | CancelOperation429Response | CancelOperation500Response | CancelOperation503Response>;
}

export declare interface CancelOperation200Properties {
    status: 200;
    parsedBody: BatchStatusDetail;
}

export declare type CancelOperation200Response = CancelOperation200Properties & HttpResponse;

export declare interface CancelOperation401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}

export declare type CancelOperation401Response = CancelOperation401Properties & HttpResponse;

export declare interface CancelOperation404Properties {
    status: 404;
    parsedBody: ErrorResponseV2;
}

export declare type CancelOperation404Response = CancelOperation404Properties & HttpResponse;

export declare interface CancelOperation429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}

export declare type CancelOperation429Response = CancelOperation429Properties & HttpResponse;

export declare interface CancelOperation500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}

export declare type CancelOperation500Response = CancelOperation500Properties & HttpResponse;

export declare interface CancelOperation503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}

export declare type CancelOperation503Response = CancelOperation503Properties & HttpResponse;

export declare type CancelOperationParameters = RequestParameters;

export declare interface DocumentFilter {
    /**
     * A case-sensitive prefix string to filter documents in the source path for translation.
     * For example, when using a Azure storage blob Uri, use the prefix to restrict sub folders for translation.
     */
    prefix?: string;
    /**
     * A case-sensitive suffix string to filter documents in the source path for translation.
     * This is most often use for file extensions
     */
    suffix?: string;
}

export declare interface DocumentStatusDetail {
    /** Location of the document or folder */
    path?: string;
    /** Location of the source document */
    sourcePath: string;
    /** Operation created date time */
    createdDateTimeUtc: Date;
    /** Date time in which the operation's status has been updated */
    lastActionDateTimeUtc: Date;
    /** List of possible statuses for job or document */
    status: Status;
    /** To language */
    to: string;
    /** This contains an outer error with error code, message, details, target and an inner error with more descriptive details. */
    error?: ErrorV2;
    /** Progress of the translation if available */
    progress: number;
    /** Document Id */
    id: string;
    /** Character charged by the API */
    characterCharged?: number;
}

export declare interface DocumentStatusResponse {
    /** The detail status of individual documents */
    value: DocumentStatusDetail[];
    /** Url for the next page.  Null if no more pages available */
    nextLink?: string;
}

declare function DocumentTranslation(endpoint: string, credentials: TokenCredential | KeyCredential, options?: ClientOptions): DocumentTranslationClient;
export default DocumentTranslation;

export declare interface DocumentTranslationClient {
    path: Routes;
    pathUnchecked: PathUncheckedClient;
}

export declare interface DocumentTranslationFactory {
    (endpoint: string, credentials: TokenCredential | KeyCredential, options?: ClientOptions): void;
}

export declare type ErrorCodeV2 = "InvalidRequest" | "InvalidArgument" | "InternalServerError" | "ServiceUnavailable" | "ResourceNotFound" | "Unauthorized" | "RequestRateTooHigh";

export declare interface ErrorResponseV2 {
    /** This contains an outer error with error code, message, details, target and an inner error with more descriptive details. */
    error?: ErrorV2;
}

export declare interface ErrorV2 {
    /** Enums containing high level error codes. */
    code: ErrorCodeV2;
    /** Gets high level error message. */
    message: string;
    /**
     * Gets the source of the error.
     * For example it would be "documents" or "document id" in case of invalid document.
     */
    target?: string;
    /**
     * New Inner Error format which conforms to Cognitive Services API Guidelines which is available at https://microsoft.sharepoint.com/%3Aw%3A/t/CognitiveServicesPMO/EUoytcrjuJdKpeOKIK_QRC8BPtUYQpKBi8JsWyeDMRsWlQ?e=CPq8ow.
     * This contains required properties ErrorCode, message and optional properties target, details(key value pair), inner error(this can be nested).
     */
    innerError?: InnerErrorV2;
}

export declare interface FileFormat {
    /** Name of the format */
    format: string;
    /** Supported file extension for this format */
    fileExtensions: string[];
    /** Supported Content-Types for this format */
    contentTypes: string[];
    /** Default version if none is specified */
    defaultVersion?: string;
    /** Supported Version */
    versions?: string[];
}

export declare interface FileFormatListResult {
    /** list of objects */
    value: FileFormat[];
}

export declare interface GetDocumentFormats {
    /**
     * The list of supported document formats supported by the Document Translation service.
     * The list includes the common file extension, as well as the content-type if using the upload API.
     */
    get(options?: GetDocumentFormatsParameters): Promise<GetDocumentFormats200Response | GetDocumentFormats429Response | GetDocumentFormats500Response | GetDocumentFormats503Response>;
}

export declare interface GetDocumentFormats200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
}

export declare interface GetDocumentFormats200Properties {
    status: 200;
    parsedBody: FileFormatListResult;
    headers: GetDocumentFormats200Headers & RawHttpHeaders;
}

export declare type GetDocumentFormats200Response = GetDocumentFormats200Properties & HttpResponse;

export declare interface GetDocumentFormats429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}

export declare type GetDocumentFormats429Response = GetDocumentFormats429Properties & HttpResponse;

export declare interface GetDocumentFormats500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}

export declare type GetDocumentFormats500Response = GetDocumentFormats500Properties & HttpResponse;

export declare interface GetDocumentFormats503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}

export declare type GetDocumentFormats503Response = GetDocumentFormats503Properties & HttpResponse;

export declare type GetDocumentFormatsParameters = RequestParameters;

export declare interface GetDocumentStatus {
    /** Returns the translation status for a specific document based on the request Id and document Id. */
    get(options?: GetDocumentStatusParameters): Promise<GetDocumentStatus200Response | GetDocumentStatus401Response | GetDocumentStatus404Response | GetDocumentStatus429Response | GetDocumentStatus500Response | GetDocumentStatus503Response>;
}

export declare interface GetDocumentStatus200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}

export declare interface GetDocumentStatus200Properties {
    status: 200;
    parsedBody: DocumentStatusDetail;
    headers: GetDocumentStatus200Headers & RawHttpHeaders;
}

export declare type GetDocumentStatus200Response = GetDocumentStatus200Properties & HttpResponse;

export declare interface GetDocumentStatus401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}

export declare type GetDocumentStatus401Response = GetDocumentStatus401Properties & HttpResponse;

export declare interface GetDocumentStatus404Properties {
    status: 404;
    parsedBody: ErrorResponseV2;
}

export declare type GetDocumentStatus404Response = GetDocumentStatus404Properties & HttpResponse;

export declare interface GetDocumentStatus429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}

export declare type GetDocumentStatus429Response = GetDocumentStatus429Properties & HttpResponse;

export declare interface GetDocumentStatus500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}

export declare type GetDocumentStatus500Response = GetDocumentStatus500Properties & HttpResponse;

export declare interface GetDocumentStatus503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}

export declare type GetDocumentStatus503Response = GetDocumentStatus503Properties & HttpResponse;

export declare type GetDocumentStatusParameters = RequestParameters;

export declare interface GetDocumentStorageSource {
    /** Returns a list of storage sources/options supported by the Document Translation service. */
    get(options?: GetDocumentStorageSourceParameters): Promise<GetDocumentStorageSource200Response | GetDocumentStorageSource429Response | GetDocumentStorageSource500Response | GetDocumentStorageSource503Response>;
}

export declare interface GetDocumentStorageSource200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
}

export declare interface GetDocumentStorageSource200Properties {
    status: 200;
    parsedBody: StorageSourceListResult;
    headers: GetDocumentStorageSource200Headers & RawHttpHeaders;
}

export declare type GetDocumentStorageSource200Response = GetDocumentStorageSource200Properties & HttpResponse;

export declare interface GetDocumentStorageSource429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}

export declare type GetDocumentStorageSource429Response = GetDocumentStorageSource429Properties & HttpResponse;

export declare interface GetDocumentStorageSource500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}

export declare type GetDocumentStorageSource500Response = GetDocumentStorageSource500Properties & HttpResponse;

export declare interface GetDocumentStorageSource503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}

export declare type GetDocumentStorageSource503Response = GetDocumentStorageSource503Properties & HttpResponse;

export declare type GetDocumentStorageSourceParameters = RequestParameters;

export declare interface GetGlossaryFormats {
    /**
     * The list of supported glossary formats supported by the Document Translation service.
     * The list includes the common file extension used.
     */
    get(options?: GetGlossaryFormatsParameters): Promise<GetGlossaryFormats200Response | GetGlossaryFormats429Response | GetGlossaryFormats500Response | GetGlossaryFormats503Response>;
}

export declare interface GetGlossaryFormats200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
}

export declare interface GetGlossaryFormats200Properties {
    status: 200;
    parsedBody: FileFormatListResult;
    headers: GetGlossaryFormats200Headers & RawHttpHeaders;
}

export declare type GetGlossaryFormats200Response = GetGlossaryFormats200Properties & HttpResponse;

export declare interface GetGlossaryFormats429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}

export declare type GetGlossaryFormats429Response = GetGlossaryFormats429Properties & HttpResponse;

export declare interface GetGlossaryFormats500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}

export declare type GetGlossaryFormats500Response = GetGlossaryFormats500Properties & HttpResponse;

export declare interface GetGlossaryFormats503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}

export declare type GetGlossaryFormats503Response = GetGlossaryFormats503Properties & HttpResponse;

export declare type GetGlossaryFormatsParameters = RequestParameters;

export declare interface GetOperationDocumentsStatus {
    /**
     * Returns the status for all documents in a batch document translation request.
     *
     * If the number of documents in the response exceeds our paging limit, server-side paging is used.
     * Paginated responses indicate a partial result and include a continuation token in the response. The absence of a continuation token means that no additional pages are available.
     *
     * $top, $skip and $maxpagesize query parameters can be used to specify a number of results to return and an offset for the collection.
     *
     * $top indicates the total number of records the user wants to be returned across all pages.
     * $skip indicates the number of records to skip from the list of document status held by the server based on the sorting method specified.  By default, we sort by descending start time.
     * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), @nextLink will contain the link to the next page.
     *
     * $orderBy query parameter can be used to sort the returned list (ex "$orderBy=createdDateTimeUtc asc" or "$orderBy=createdDateTimeUtc desc").
     * The default sorting is descending by createdDateTimeUtc.
     * Some query parameters can be used to filter the returned list (ex: "status=Succeeded,Cancelled") will only return succeeded and cancelled documents.
     * createdDateTimeUtcStart and createdDateTimeUtcEnd can be used combined or separately to specify a range of datetime to filter the returned list by.
     * The supported filtering query parameters are (status, ids, createdDateTimeUtcStart, createdDateTimeUtcEnd).
     *
     * When both $top and $skip are included, the server should first apply $skip and then $top on the collection.
     * Note: If the server can't honor $top and/or $skip, the server must return an error to the client informing about it instead of just ignoring the query options.
     * This reduces the risk of the client making assumptions about the data returned.
     */
    get(options?: GetOperationDocumentsStatusParameters): Promise<GetOperationDocumentsStatus200Response | GetOperationDocumentsStatus400Response | GetOperationDocumentsStatus401Response | GetOperationDocumentsStatus404Response | GetOperationDocumentsStatus429Response | GetOperationDocumentsStatus500Response | GetOperationDocumentsStatus503Response>;
}

export declare interface GetOperationDocumentsStatus200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}

export declare interface GetOperationDocumentsStatus200Properties {
    status: 200;
    parsedBody: DocumentStatusResponse;
    headers: GetOperationDocumentsStatus200Headers & RawHttpHeaders;
}

export declare type GetOperationDocumentsStatus200Response = GetOperationDocumentsStatus200Properties & HttpResponse;

export declare interface GetOperationDocumentsStatus400Properties {
    status: 400;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus400Response = GetOperationDocumentsStatus400Properties & HttpResponse;

export declare interface GetOperationDocumentsStatus401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus401Response = GetOperationDocumentsStatus401Properties & HttpResponse;

export declare interface GetOperationDocumentsStatus404Properties {
    status: 404;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus404Response = GetOperationDocumentsStatus404Properties & HttpResponse;

export declare interface GetOperationDocumentsStatus429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus429Response = GetOperationDocumentsStatus429Properties & HttpResponse;

export declare interface GetOperationDocumentsStatus500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus500Response = GetOperationDocumentsStatus500Properties & HttpResponse;

export declare interface GetOperationDocumentsStatus503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperationDocumentsStatus503Response = GetOperationDocumentsStatus503Properties & HttpResponse;

export declare type GetOperationDocumentsStatusParameters = RequestParameters & GetOperationDocumentsStatusQueryParam;

export declare interface GetOperationDocumentsStatusQueryParam {
    queryParameters?: GetOperationDocumentsStatusQueryParamProperties;
}

export declare interface GetOperationDocumentsStatusQueryParamProperties {
    /**
     * $top indicates the total number of records the user wants to be returned across all pages.
     *
     * Clients MAY use $top and $skip query parameters to specify a number of results to return and an offset into the collection.
     * When both $top and $skip are given by a client, the server SHOULD first apply $skip and then $top on the collection.
     *
     * Note: If the server can't honor $top and/or $skip, the server MUST return an error to the client informing about it instead of just ignoring the query options.
     */
    $top?: number;
    /**
     * $skip indicates the number of records to skip from the list of records held by the server based on the sorting method specified.  By default, we sort by descending start time.
     *
     * Clients MAY use $top and $skip query parameters to specify a number of results to return and an offset into the collection.
     * When both $top and $skip are given by a client, the server SHOULD first apply $skip and then $top on the collection.
     *
     * Note: If the server can't honor $top and/or $skip, the server MUST return an error to the client informing about it instead of just ignoring the query options.
     */
    $skip?: number;
    /**
     * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), @nextLink will contain the link to the next page.
     *
     * Clients MAY request server-driven paging with a specific page size by specifying a $maxpagesize preference. The server SHOULD honor this preference if the specified page size is smaller than the server's default page size.
     */
    $maxpagesize?: number;
    /** Ids to use in filtering */
    ids?: string[];
    /** Statuses to use in filtering */
    statuses?: string[];
    /** the start datetime to get items after */
    createdDateTimeUtcStart?: Date;
    /** the end datetime to get items before */
    createdDateTimeUtcEnd?: Date;
    /** the sorting query for the collection (ex: 'CreatedDateTimeUtc asc', 'CreatedDateTimeUtc desc') */
    $orderBy?: string[];
}

export declare interface GetOperations {
    /**
     * Use this API to submit a bulk (batch) translation request to the Document Translation service.
     * Each request can contain multiple documents and must contain a source and destination container for each document.
     *
     * The prefix and suffix filter (if supplied) are used to filter folders. The prefix is applied to the subpath after the container name.
     *
     * Glossaries / Translation memory can be included in the request and are applied by the service when the document is translated.
     *
     * If the glossary is invalid or unreachable during translation, an error is indicated in the document status.
     * If a file with the same name already exists at the destination, it will be overwritten. The targetUrl for each target language must be unique.
     */
    post(options?: SubmitBatchRequestParameters): Promise<SubmitBatchRequest202Response | SubmitBatchRequest400Response | SubmitBatchRequest401Response | SubmitBatchRequest429Response | SubmitBatchRequest500Response | SubmitBatchRequest503Response>;
    /**
     * Returns a list of batch requests submitted and the status for each request.
     * This list only contains batch requests submitted by the user (based on the resource).
     *
     * If the number of requests exceeds our paging limit, server-side paging is used. Paginated responses indicate a partial result and include a continuation token in the response.
     * The absence of a continuation token means that no additional pages are available.
     *
     * $top, $skip and $maxpagesize query parameters can be used to specify a number of results to return and an offset for the collection.
     *
     * $top indicates the total number of records the user wants to be returned across all pages.
     * $skip indicates the number of records to skip from the list of batches based on the sorting method specified.  By default, we sort by descending start time.
     * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), @nextLink will contain the link to the next page.
     *
     * $orderBy query parameter can be used to sort the returned list (ex "$orderBy=createdDateTimeUtc asc" or "$orderBy=createdDateTimeUtc desc").
     * The default sorting is descending by createdDateTimeUtc.
     * Some query parameters can be used to filter the returned list (ex: "status=Succeeded,Cancelled") will only return succeeded and cancelled operations.
     * createdDateTimeUtcStart and createdDateTimeUtcEnd can be used combined or separately to specify a range of datetime to filter the returned list by.
     * The supported filtering query parameters are (status, ids, createdDateTimeUtcStart, createdDateTimeUtcEnd).
     *
     * The server honors the values specified by the client. However, clients must be prepared to handle responses that contain a different page size or contain a continuation token.
     *
     * When both $top and $skip are included, the server should first apply $skip and then $top on the collection.
     * Note: If the server can't honor $top and/or $skip, the server must return an error to the client informing about it instead of just ignoring the query options.
     * This reduces the risk of the client making assumptions about the data returned.
     */
    get(options?: GetOperationsParameters): Promise<GetOperations200Response | GetOperations400Response | GetOperations401Response | GetOperations429Response | GetOperations500Response | GetOperations503Response>;
}

export declare interface GetOperations200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}

export declare interface GetOperations200Properties {
    status: 200;
    parsedBody: BatchStatusResponse;
    headers: GetOperations200Headers & RawHttpHeaders;
}

export declare type GetOperations200Response = GetOperations200Properties & HttpResponse;

export declare interface GetOperations400Properties {
    status: 400;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperations400Response = GetOperations400Properties & HttpResponse;

export declare interface GetOperations401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperations401Response = GetOperations401Properties & HttpResponse;

export declare interface GetOperations429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperations429Response = GetOperations429Properties & HttpResponse;

export declare interface GetOperations500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperations500Response = GetOperations500Properties & HttpResponse;

export declare interface GetOperations503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperations503Response = GetOperations503Properties & HttpResponse;

export declare type GetOperationsParameters = RequestParameters & GetOperationsQueryParam;

export declare interface GetOperationsQueryParam {
    queryParameters?: GetOperationsQueryParamProperties;
}

export declare interface GetOperationsQueryParamProperties {
    /**
     * $top indicates the total number of records the user wants to be returned across all pages.
     *
     * Clients MAY use $top and $skip query parameters to specify a number of results to return and an offset into the collection.
     * When both $top and $skip are given by a client, the server SHOULD first apply $skip and then $top on the collection.
     *
     * Note: If the server can't honor $top and/or $skip, the server MUST return an error to the client informing about it instead of just ignoring the query options.
     */
    $top?: number;
    /**
     * $skip indicates the number of records to skip from the list of records held by the server based on the sorting method specified.  By default, we sort by descending start time.
     *
     * Clients MAY use $top and $skip query parameters to specify a number of results to return and an offset into the collection.
     * When both $top and $skip are given by a client, the server SHOULD first apply $skip and then $top on the collection.
     *
     * Note: If the server can't honor $top and/or $skip, the server MUST return an error to the client informing about it instead of just ignoring the query options.
     */
    $skip?: number;
    /**
     * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), @nextLink will contain the link to the next page.
     *
     * Clients MAY request server-driven paging with a specific page size by specifying a $maxpagesize preference. The server SHOULD honor this preference if the specified page size is smaller than the server's default page size.
     */
    $maxpagesize?: number;
    /** Ids to use in filtering */
    ids?: string[];
    /** Statuses to use in filtering */
    statuses?: string[];
    /** the start datetime to get items after */
    createdDateTimeUtcStart?: Date;
    /** the end datetime to get items before */
    createdDateTimeUtcEnd?: Date;
    /** the sorting query for the collection (ex: 'CreatedDateTimeUtc asc', 'CreatedDateTimeUtc desc') */
    $orderBy?: string[];
}

export declare interface GetOperationStatus200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}

export declare interface GetOperationStatus200Properties {
    status: 200;
    parsedBody: BatchStatusDetail;
    headers: GetOperationStatus200Headers & RawHttpHeaders;
}

export declare type GetOperationStatus200Response = GetOperationStatus200Properties & HttpResponse;

export declare interface GetOperationStatus401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperationStatus401Response = GetOperationStatus401Properties & HttpResponse;

export declare interface GetOperationStatus404Properties {
    status: 404;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperationStatus404Response = GetOperationStatus404Properties & HttpResponse;

export declare interface GetOperationStatus429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperationStatus429Response = GetOperationStatus429Properties & HttpResponse;

export declare interface GetOperationStatus500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperationStatus500Response = GetOperationStatus500Properties & HttpResponse;

export declare interface GetOperationStatus503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}

export declare type GetOperationStatus503Response = GetOperationStatus503Properties & HttpResponse;

export declare type GetOperationStatusParameters = RequestParameters;

export declare interface Glossary {
    /**
     * Location of the glossary.
     * We will use the file extension to extract the formatting if the format parameter is not supplied.
     *
     * If the translation language pair is not present in the glossary, it will not be applied
     */
    glossaryUrl: string;
    /** Format */
    format: string;
    /** Optional Version.  If not specified, default is used. */
    version?: string;
    /** Storage Source */
    storageSource?: StorageSource;
}

export declare interface InnerErrorV2 {
    /** Gets code error string. */
    code: string;
    /** Gets high level error message. */
    message: string;
    /**
     * Gets the source of the error.
     * For example it would be "documents" or "document id" in case of invalid document.
     */
    target?: string;
    /**
     * New Inner Error format which conforms to Cognitive Services API Guidelines which is available at https://microsoft.sharepoint.com/%3Aw%3A/t/CognitiveServicesPMO/EUoytcrjuJdKpeOKIK_QRC8BPtUYQpKBi8JsWyeDMRsWlQ?e=CPq8ow.
     * This contains required properties ErrorCode, message and optional properties target, details(key value pair), inner error(this can be nested).
     */
    innerError?: InnerErrorV2;
}

export declare interface Routes {
    (path: "/batches"): GetOperations;
    (path: "/batches/{id}/documents/{documentId}", id: string, documentId: string): GetDocumentStatus;
    (path: "/batches/{id}", id: string): CancelOperation;
    (path: "/batches/{id}/documents", id: string): GetOperationDocumentsStatus;
    (path: "/documents/formats"): GetDocumentFormats;
    (path: "/glossaries/formats"): GetGlossaryFormats;
    (path: "/storagesources"): GetDocumentStorageSource;
}

export declare interface SourceInput {
    /** Location of the folder / container or single file with your documents */
    sourceUrl: string;
    /** */
    filter?: DocumentFilter;
    /**
     * Language code
     * If none is specified, we will perform auto detect on the document
     */
    language?: string;
    /** Storage Source */
    storageSource?: StorageSource;
}

export declare type Status = "NotStarted" | "Running" | "Succeeded" | "Failed" | "Cancelled" | "Cancelling" | "ValidationFailed";

export declare interface StatusSummary {
    /** Total count */
    total: number;
    /** Failed count */
    failed: number;
    /** Number of Success */
    success: number;
    /** Number of in progress */
    inProgress: number;
    /** Count of not yet started */
    notYetStarted: number;
    /** Number of cancelled */
    cancelled: number;
    /** Total characters charged by the API */
    totalCharacterCharged: number;
}

export declare type StorageInputType = "Folder" | "File";

export declare type StorageSource = "AzureBlob";

export declare interface StorageSourceListResult {
    /** list of objects */
    value: "AzureBlob"[];
}

export declare interface SubmitBatchRequest202Headers {
    /** Location of batch the operation */
    "operation-location"?: string;
}

export declare interface SubmitBatchRequest202Properties {
    status: 202;
    headers: SubmitBatchRequest202Headers & RawHttpHeaders;
}

export declare type SubmitBatchRequest202Response = SubmitBatchRequest202Properties & HttpResponse;

export declare interface SubmitBatchRequest400Properties {
    status: 400;
    parsedBody: ErrorResponseV2;
}

export declare type SubmitBatchRequest400Response = SubmitBatchRequest400Properties & HttpResponse;

export declare interface SubmitBatchRequest401Properties {
    status: 401;
    parsedBody: ErrorResponseV2;
}

export declare type SubmitBatchRequest401Response = SubmitBatchRequest401Properties & HttpResponse;

export declare interface SubmitBatchRequest429Properties {
    status: 429;
    parsedBody: ErrorResponseV2;
}

export declare type SubmitBatchRequest429Response = SubmitBatchRequest429Properties & HttpResponse;

export declare interface SubmitBatchRequest500Properties {
    status: 500;
    parsedBody: ErrorResponseV2;
}

export declare type SubmitBatchRequest500Response = SubmitBatchRequest500Properties & HttpResponse;

export declare interface SubmitBatchRequest503Properties {
    status: 503;
    parsedBody: ErrorResponseV2;
}

export declare type SubmitBatchRequest503Response = SubmitBatchRequest503Properties & HttpResponse;

export declare interface SubmitBatchRequestBodyParam {
    body?: BatchSubmissionRequest;
}

export declare type SubmitBatchRequestParameters = RequestParameters & SubmitBatchRequestBodyParam;

export declare interface TargetInput {
    /** Location of the folder / container with your documents */
    targetUrl: string;
    /** Category / custom system for translation request */
    category?: string;
    /** Target Language */
    language: string;
    /** List of Glossary */
    glossaries?: Glossary[];
    /** Storage Source */
    storageSource?: StorageSource;
}

export { }
