/**
 * A rest library for working with the Azure Document Translator service.
 * @packageDocumentation
 */

import { Client } from '@azure-rest/core-client';
import { ClientOptions } from '@azure-rest/core-client';
import { HttpResponse } from '@azure-rest/core-client';
import { KeyCredential } from '@azure/core-auth';
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
    error?: TranslationError;
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

export declare interface CancelTranslation {
    /**
     * Returns the status for a document translation request.
     * The status includes the overall request status, as well as the status for documents that are being translated as part of that request.
     */
    get(options?: GetTranslationStatusParameters): Promise<GetTranslationStatus200Response | GetTranslationStatus401Response | GetTranslationStatus404Response | GetTranslationStatus429Response | GetTranslationStatus500Response | GetTranslationStatus503Response>;
    /**
     * Cancel a currently processing or queued translation.
     * Cancel a currently processing or queued translation.
     * A translation will not be cancelled if it is already completed or failed or cancelling. A bad request will be returned.
     * All documents that have completed translation will not be cancelled and will be charged.
     * All pending documents will be cancelled if possible.
     */
    delete(options?: CancelTranslationParameters): Promise<CancelTranslation200Response | CancelTranslation401Response | CancelTranslation404Response | CancelTranslation429Response | CancelTranslation500Response | CancelTranslation503Response>;
}

/**
 * Cancel a currently processing or queued translation.
 * Cancel a currently processing or queued translation.
 * A translation will not be cancelled if it is already completed or failed or cancelling. A bad request will be returned.
 * All documents that have completed translation will not be cancelled and will be charged.
 * All pending documents will be cancelled if possible.
 */
export declare interface CancelTranslation200Response extends HttpResponse {
    status: "200";
    body: BatchStatusDetail;
}

/**
 * Cancel a currently processing or queued translation.
 * Cancel a currently processing or queued translation.
 * A translation will not be cancelled if it is already completed or failed or cancelling. A bad request will be returned.
 * All documents that have completed translation will not be cancelled and will be charged.
 * All pending documents will be cancelled if possible.
 */
export declare interface CancelTranslation401Response extends HttpResponse {
    status: "401";
    body: TranslationErrorResponse;
}

/**
 * Cancel a currently processing or queued translation.
 * Cancel a currently processing or queued translation.
 * A translation will not be cancelled if it is already completed or failed or cancelling. A bad request will be returned.
 * All documents that have completed translation will not be cancelled and will be charged.
 * All pending documents will be cancelled if possible.
 */
export declare interface CancelTranslation404Response extends HttpResponse {
    status: "404";
    body: TranslationErrorResponse;
}

/**
 * Cancel a currently processing or queued translation.
 * Cancel a currently processing or queued translation.
 * A translation will not be cancelled if it is already completed or failed or cancelling. A bad request will be returned.
 * All documents that have completed translation will not be cancelled and will be charged.
 * All pending documents will be cancelled if possible.
 */
export declare interface CancelTranslation429Response extends HttpResponse {
    status: "429";
    body: TranslationErrorResponse;
}

/**
 * Cancel a currently processing or queued translation.
 * Cancel a currently processing or queued translation.
 * A translation will not be cancelled if it is already completed or failed or cancelling. A bad request will be returned.
 * All documents that have completed translation will not be cancelled and will be charged.
 * All pending documents will be cancelled if possible.
 */
export declare interface CancelTranslation500Response extends HttpResponse {
    status: "500";
    body: TranslationErrorResponse;
}

/**
 * Cancel a currently processing or queued translation.
 * Cancel a currently processing or queued translation.
 * A translation will not be cancelled if it is already completed or failed or cancelling. A bad request will be returned.
 * All documents that have completed translation will not be cancelled and will be charged.
 * All pending documents will be cancelled if possible.
 */
export declare interface CancelTranslation503Response extends HttpResponse {
    status: "503";
    body: TranslationErrorResponse;
}

export declare type CancelTranslationParameters = RequestParameters;

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
    error?: TranslationError;
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

declare function DocumentTranslator(endpoint: string, credentials: TokenCredential | KeyCredential, options?: ClientOptions): DocumentTranslatorClient;
export default DocumentTranslator;

export declare type DocumentTranslatorClient = Client & {
    path: Routes;
};

export declare interface DocumentTranslatorFactory {
    (endpoint: string, credentials: TokenCredential | KeyCredential, options?: ClientOptions): void;
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

export declare interface GetDocument {
    /** Returns the translation status for a specific document based on the request Id and document Id. */
    get(options?: GetDocumentParameters): Promise<GetDocument200Response | GetDocument401Response | GetDocument404Response | GetDocument429Response | GetDocument500Response | GetDocument503Response>;
}

export declare interface GetDocument200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}

/** Returns the translation status for a specific document based on the request Id and document Id. */
export declare interface GetDocument200Response extends HttpResponse {
    status: "200";
    body: DocumentStatusDetail;
    headers: RawHttpHeaders & GetDocument200Headers;
}

/** Returns the translation status for a specific document based on the request Id and document Id. */
export declare interface GetDocument401Response extends HttpResponse {
    status: "401";
    body: TranslationErrorResponse;
}

/** Returns the translation status for a specific document based on the request Id and document Id. */
export declare interface GetDocument404Response extends HttpResponse {
    status: "404";
    body: TranslationErrorResponse;
}

/** Returns the translation status for a specific document based on the request Id and document Id. */
export declare interface GetDocument429Response extends HttpResponse {
    status: "429";
    body: TranslationErrorResponse;
}

/** Returns the translation status for a specific document based on the request Id and document Id. */
export declare interface GetDocument500Response extends HttpResponse {
    status: "500";
    body: TranslationErrorResponse;
}

/** Returns the translation status for a specific document based on the request Id and document Id. */
export declare interface GetDocument503Response extends HttpResponse {
    status: "503";
    body: TranslationErrorResponse;
}

export declare type GetDocumentParameters = RequestParameters;

export declare interface GetDocuments {
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
     * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
    get(options?: GetDocumentsParameters): Promise<GetDocuments200Response | GetDocuments400Response | GetDocuments401Response | GetDocuments404Response | GetDocuments429Response | GetDocuments500Response | GetDocuments503Response>;
}

export declare interface GetDocuments200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetDocuments200Response extends HttpResponse {
    status: "200";
    body: DocumentStatusResponse;
    headers: RawHttpHeaders & GetDocuments200Headers;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetDocuments400Response extends HttpResponse {
    status: "400";
    body: TranslationErrorResponse;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetDocuments401Response extends HttpResponse {
    status: "401";
    body: TranslationErrorResponse;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetDocuments404Response extends HttpResponse {
    status: "404";
    body: TranslationErrorResponse;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetDocuments429Response extends HttpResponse {
    status: "429";
    body: TranslationErrorResponse;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetDocuments500Response extends HttpResponse {
    status: "500";
    body: TranslationErrorResponse;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetDocuments503Response extends HttpResponse {
    status: "503";
    body: TranslationErrorResponse;
}

export declare type GetDocumentsParameters = RequestParameters & GetDocumentsQueryParam;

export declare interface GetDocumentsQueryParam {
    queryParameters?: GetDocumentsQueryParamProperties;
}

export declare interface GetDocumentsQueryParamProperties {
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
     * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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

export declare interface GetSupportedDocumentFormats {
    /**
     * The list of supported document formats supported by the Document Translation service.
     * The list includes the common file extension, as well as the content-type if using the upload API.
     */
    get(options?: GetSupportedDocumentFormatsParameters): Promise<GetSupportedDocumentFormats200Response | GetSupportedDocumentFormats429Response | GetSupportedDocumentFormats500Response | GetSupportedDocumentFormats503Response>;
}

export declare interface GetSupportedDocumentFormats200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
}

/**
 * The list of supported document formats supported by the Document Translation service.
 * The list includes the common file extension, as well as the content-type if using the upload API.
 */
export declare interface GetSupportedDocumentFormats200Response extends HttpResponse {
    status: "200";
    body: FileFormatListResult;
    headers: RawHttpHeaders & GetSupportedDocumentFormats200Headers;
}

/**
 * The list of supported document formats supported by the Document Translation service.
 * The list includes the common file extension, as well as the content-type if using the upload API.
 */
export declare interface GetSupportedDocumentFormats429Response extends HttpResponse {
    status: "429";
    body: TranslationErrorResponse;
}

/**
 * The list of supported document formats supported by the Document Translation service.
 * The list includes the common file extension, as well as the content-type if using the upload API.
 */
export declare interface GetSupportedDocumentFormats500Response extends HttpResponse {
    status: "500";
    body: TranslationErrorResponse;
}

/**
 * The list of supported document formats supported by the Document Translation service.
 * The list includes the common file extension, as well as the content-type if using the upload API.
 */
export declare interface GetSupportedDocumentFormats503Response extends HttpResponse {
    status: "503";
    body: TranslationErrorResponse;
}

export declare type GetSupportedDocumentFormatsParameters = RequestParameters;

export declare interface GetSupportedGlossaryFormats {
    /**
     * The list of supported glossary formats supported by the Document Translation service.
     * The list includes the common file extension used.
     */
    get(options?: GetSupportedGlossaryFormatsParameters): Promise<GetSupportedGlossaryFormats200Response | GetSupportedGlossaryFormats429Response | GetSupportedGlossaryFormats500Response | GetSupportedGlossaryFormats503Response>;
}

export declare interface GetSupportedGlossaryFormats200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
}

/**
 * The list of supported glossary formats supported by the Document Translation service.
 * The list includes the common file extension used.
 */
export declare interface GetSupportedGlossaryFormats200Response extends HttpResponse {
    status: "200";
    body: FileFormatListResult;
    headers: RawHttpHeaders & GetSupportedGlossaryFormats200Headers;
}

/**
 * The list of supported glossary formats supported by the Document Translation service.
 * The list includes the common file extension used.
 */
export declare interface GetSupportedGlossaryFormats429Response extends HttpResponse {
    status: "429";
    body: TranslationErrorResponse;
}

/**
 * The list of supported glossary formats supported by the Document Translation service.
 * The list includes the common file extension used.
 */
export declare interface GetSupportedGlossaryFormats500Response extends HttpResponse {
    status: "500";
    body: TranslationErrorResponse;
}

/**
 * The list of supported glossary formats supported by the Document Translation service.
 * The list includes the common file extension used.
 */
export declare interface GetSupportedGlossaryFormats503Response extends HttpResponse {
    status: "503";
    body: TranslationErrorResponse;
}

export declare type GetSupportedGlossaryFormatsParameters = RequestParameters;

export declare interface GetSupportedStorageSources {
    /** Returns a list of storage sources/options supported by the Document Translation service. */
    get(options?: GetSupportedStorageSourcesParameters): Promise<GetSupportedStorageSources200Response | GetSupportedStorageSources429Response | GetSupportedStorageSources500Response | GetSupportedStorageSources503Response>;
}

export declare interface GetSupportedStorageSources200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
}

/** Returns a list of storage sources/options supported by the Document Translation service. */
export declare interface GetSupportedStorageSources200Response extends HttpResponse {
    status: "200";
    body: StorageSourceListResult;
    headers: RawHttpHeaders & GetSupportedStorageSources200Headers;
}

/** Returns a list of storage sources/options supported by the Document Translation service. */
export declare interface GetSupportedStorageSources429Response extends HttpResponse {
    status: "429";
    body: TranslationErrorResponse;
}

/** Returns a list of storage sources/options supported by the Document Translation service. */
export declare interface GetSupportedStorageSources500Response extends HttpResponse {
    status: "500";
    body: TranslationErrorResponse;
}

/** Returns a list of storage sources/options supported by the Document Translation service. */
export declare interface GetSupportedStorageSources503Response extends HttpResponse {
    status: "503";
    body: TranslationErrorResponse;
}

export declare type GetSupportedStorageSourcesParameters = RequestParameters;

export declare interface GetTranslations {
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
    post(options: StartTranslationParameters): Promise<StartTranslation202Response | StartTranslation400Response | StartTranslation401Response | StartTranslation429Response | StartTranslation500Response | StartTranslation503Response>;
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
     * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
    get(options?: GetTranslationsParameters): Promise<GetTranslations200Response | GetTranslations400Response | GetTranslations401Response | GetTranslations429Response | GetTranslations500Response | GetTranslations503Response>;
}

export declare interface GetTranslations200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetTranslations200Response extends HttpResponse {
    status: "200";
    body: BatchStatusResponse;
    headers: RawHttpHeaders & GetTranslations200Headers;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetTranslations400Response extends HttpResponse {
    status: "400";
    body: TranslationErrorResponse;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetTranslations401Response extends HttpResponse {
    status: "401";
    body: TranslationErrorResponse;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetTranslations429Response extends HttpResponse {
    status: "429";
    body: TranslationErrorResponse;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetTranslations500Response extends HttpResponse {
    status: "500";
    body: TranslationErrorResponse;
}

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
 * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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
export declare interface GetTranslations503Response extends HttpResponse {
    status: "503";
    body: TranslationErrorResponse;
}

export declare type GetTranslationsParameters = RequestParameters & GetTranslationsQueryParam;

export declare interface GetTranslationsQueryParam {
    queryParameters?: GetTranslationsQueryParamProperties;
}

export declare interface GetTranslationsQueryParamProperties {
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
     * $maxpagesize is the maximum items returned in a page.  If more items are requested via $top (or $top is not specified and there are more items to be returned), \@nextLink will contain the link to the next page.
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

export declare interface GetTranslationStatus200Headers {
    /** Indicates how long to wait before making a new request. */
    "retry-after"?: string;
    /** The ETag response-header field provides the current value of the entity tag for the requested variant. Used with If-Match, If-None-Match and If-Range to implement optimistic concurrency control. */
    etag?: string;
}

/**
 * Returns the status for a document translation request.
 * The status includes the overall request status, as well as the status for documents that are being translated as part of that request.
 */
export declare interface GetTranslationStatus200Response extends HttpResponse {
    status: "200";
    body: BatchStatusDetail;
    headers: RawHttpHeaders & GetTranslationStatus200Headers;
}

/**
 * Returns the status for a document translation request.
 * The status includes the overall request status, as well as the status for documents that are being translated as part of that request.
 */
export declare interface GetTranslationStatus401Response extends HttpResponse {
    status: "401";
    body: TranslationErrorResponse;
}

/**
 * Returns the status for a document translation request.
 * The status includes the overall request status, as well as the status for documents that are being translated as part of that request.
 */
export declare interface GetTranslationStatus404Response extends HttpResponse {
    status: "404";
    body: TranslationErrorResponse;
}

/**
 * Returns the status for a document translation request.
 * The status includes the overall request status, as well as the status for documents that are being translated as part of that request.
 */
export declare interface GetTranslationStatus429Response extends HttpResponse {
    status: "429";
    body: TranslationErrorResponse;
}

/**
 * Returns the status for a document translation request.
 * The status includes the overall request status, as well as the status for documents that are being translated as part of that request.
 */
export declare interface GetTranslationStatus500Response extends HttpResponse {
    status: "500";
    body: TranslationErrorResponse;
}

/**
 * Returns the status for a document translation request.
 * The status includes the overall request status, as well as the status for documents that are being translated as part of that request.
 */
export declare interface GetTranslationStatus503Response extends HttpResponse {
    status: "503";
    body: TranslationErrorResponse;
}

export declare type GetTranslationStatusParameters = RequestParameters;

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

export declare interface InnerTranslationError {
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
    innerError?: InnerTranslationError;
}

export declare interface Routes {
    /** Resource for '/batches' has methods for the following verbs: post, get */
    (path: "/batches"): GetTranslations;
    /** Resource for '/batches/\{id\}/documents/\{documentId\}' has methods for the following verbs: get */
    (path: "/batches/{id}/documents/{documentId}", id: string, documentId: string): GetDocument;
    /** Resource for '/batches/\{id\}' has methods for the following verbs: get, delete */
    (path: "/batches/{id}", id: string): CancelTranslation;
    /** Resource for '/batches/\{id\}/documents' has methods for the following verbs: get */
    (path: "/batches/{id}/documents", id: string): GetDocuments;
    /** Resource for '/documents/formats' has methods for the following verbs: get */
    (path: "/documents/formats"): GetSupportedDocumentFormats;
    /** Resource for '/glossaries/formats' has methods for the following verbs: get */
    (path: "/glossaries/formats"): GetSupportedGlossaryFormats;
    /** Resource for '/storagesources' has methods for the following verbs: get */
    (path: "/storagesources"): GetSupportedStorageSources;
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

export declare interface StartTranslation202Headers {
    /** Location of batch the operation */
    "operation-location"?: string;
}

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
export declare interface StartTranslation202Response extends HttpResponse {
    status: "202";
    headers: RawHttpHeaders & StartTranslation202Headers;
}

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
export declare interface StartTranslation400Response extends HttpResponse {
    status: "400";
    body: TranslationErrorResponse;
}

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
export declare interface StartTranslation401Response extends HttpResponse {
    status: "401";
    body: TranslationErrorResponse;
}

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
export declare interface StartTranslation429Response extends HttpResponse {
    status: "429";
    body: TranslationErrorResponse;
}

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
export declare interface StartTranslation500Response extends HttpResponse {
    status: "500";
    body: TranslationErrorResponse;
}

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
export declare interface StartTranslation503Response extends HttpResponse {
    status: "503";
    body: TranslationErrorResponse;
}

export declare interface StartTranslationBodyParam {
    body: BatchSubmissionRequest;
}

export declare type StartTranslationParameters = RequestParameters & StartTranslationBodyParam;

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

export declare interface TranslationError {
    /** Enums containing high level error codes. */
    code: TranslationErrorCode;
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
    innerError?: InnerTranslationError;
}

export declare type TranslationErrorCode = "InvalidRequest" | "InvalidArgument" | "InternalServerError" | "ServiceUnavailable" | "ResourceNotFound" | "Unauthorized" | "RequestRateTooHigh";

export declare interface TranslationErrorResponse {
    /** This contains an outer error with error code, message, details, target and an inner error with more descriptive details. */
    error?: TranslationError;
}

export { }
