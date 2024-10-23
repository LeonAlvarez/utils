/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.3
 *
 * The request has been received but not yet acted upon. It is non-committal, meaning that there is no way in HTTP to later send an asynchronous response indicating the outcome of processing the request. It is intended for cases where another process or server handles the request, or for batch processing.
 */
declare const ACCEPTED = 202;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.3
 *
 * This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.
 */
declare const BAD_GATEWAY = 502;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.1
 *
 * This response means that server could not understand the request due to invalid syntax.
 */
declare const BAD_REQUEST = 400;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.8
 *
 * This response is sent when a request conflicts with the current state of the server.
 */
declare const CONFLICT = 409;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.1
 *
 * This interim response indicates that everything so far is OK and that the client should continue with the request or ignore it if it is already finished.
 */
declare const CONTINUE = 100;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.2
 *
 * The request has succeeded and a new resource has been created as a result of it. This is typically the response sent after a PUT request.
 */
declare const CREATED = 201;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.14
 *
 * This response code means the expectation indicated by the Expect request header field can't be met by the server.
 */
declare const EXPECTATION_FAILED = 417;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.5
 *
 * The request failed due to failure of a previous request.
 */
declare const FAILED_DEPENDENCY = 424;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.3
 *
 * The client does not have access rights to the content, i.e. they are unauthorized, so server is rejecting to give proper response. Unlike 401, the client's identity is known to the server.
 */
declare const FORBIDDEN = 403;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.5
 *
 * This error response is given when the server is acting as a gateway and cannot get a response in time.
 */
declare const GATEWAY_TIMEOUT = 504;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.9
 *
 * This response would be sent when the requested content has been permenantly deleted from server, with no forwarding address. Clients are expected to remove their caches and links to the resource. The HTTP specification intends this status code to be used for "limited-time, promotional services". APIs should not feel compelled to indicate resources that have been deleted with this status code.
 */
declare const GONE = 410;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.6
 *
 * The HTTP version used in the request is not supported by the server.
 */
declare const HTTP_VERSION_NOT_SUPPORTED = 505;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2324#section-2.3.2
 *
 * Any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
 */
declare const IM_A_TEAPOT = 418;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
 *
 * The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request. This condition is considered to be temporary. If the request which received this status code was the result of a user action, the request MUST NOT be repeated until it is requested by a separate user action.
 */
declare const INSUFFICIENT_SPACE_ON_RESOURCE = 419;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.6
 *
 * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 */
declare const INSUFFICIENT_STORAGE = 507;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.1
 *
 * The server encountered an unexpected condition that prevented it from fulfilling the request.
 */
declare const INTERNAL_SERVER_ERROR = 500;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.10
 *
 * The server rejected the request because the Content-Length header field is not defined and the server requires it.
 */
declare const LENGTH_REQUIRED = 411;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.4
 *
 * The resource that is being accessed is locked.
 */
declare const LOCKED = 423;
/**
 * @deprecated
 * Official Documentation @ https://tools.ietf.org/rfcdiff?difftype=--hwdiff&url2=draft-ietf-webdav-protocol-06.txt
 *
 * A deprecated response used by the Spring Framework when a method has failed.
 */
declare const METHOD_FAILURE = 420;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.5
 *
 * The request method is known by the server but has been disabled and cannot be used. For example, an API may forbid DELETE-ing a resource. The two mandatory methods, GET and HEAD, must never be disabled and should not return this error code.
 */
declare const METHOD_NOT_ALLOWED = 405;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.2
 *
 * This response code means that URI of requested resource has been changed. Probably, new URI would be given in the response.
 */
declare const MOVED_PERMANENTLY = 301;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.3
 *
 * This response code means that URI of requested resource has been changed temporarily. New changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.
 */
declare const MOVED_TEMPORARILY = 302;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.2
 *
 * A Multi-Status response conveys information about multiple resources in situations where multiple status codes might be appropriate.
 */
declare const MULTI_STATUS = 207;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.1
 *
 * The request has more than one possible responses. User-agent or user should choose one of them. There is no standardized way to choose one of the responses.
 */
declare const MULTIPLE_CHOICES = 300;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-6
 *
 * The 511 status code indicates that the client needs to authenticate to gain network access.
 */
declare const NETWORK_AUTHENTICATION_REQUIRED = 511;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.5
 *
 * There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.
 */
declare const NO_CONTENT = 204;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.4
 *
 * This response code means returned meta-information set is not exact set as available from the origin server, but collected from a local or a third party copy. Except this condition, 200 OK response should be preferred instead of this response.
 */
declare const NON_AUTHORITATIVE_INFORMATION = 203;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.6
 *
 * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
 */
declare const NOT_ACCEPTABLE = 406;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.4
 *
 * The server can not find requested resource. In the browser, this means the URL is not recognized. In an API, this can also mean that the endpoint is valid but the resource itself does not exist. Servers may also send this response instead of 403 to hide the existence of a resource from an unauthorized client. This response code is probably the most famous one due to its frequent occurence on the web.
 */
declare const NOT_FOUND = 404;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.2
 *
 * The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.
 */
declare const NOT_IMPLEMENTED = 501;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.1
 *
 * This is used for caching purposes. It is telling to client that response has not been modified. So, client can continue to use same cached version of response.
 */
declare const NOT_MODIFIED = 304;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.1
 *
 * The request has succeeded. The meaning of a success varies depending on the HTTP method:
 * GET: The resource has been fetched and is transmitted in the message body.
 * HEAD: The entity headers are in the message body.
 * POST: The resource describing the result of the action is transmitted in the message body.
 * TRACE: The message body contains the request message as received by the server
 */
declare const OK = 200;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.1
 *
 * This response code is used because of range header sent by the client to separate download into multiple streams.
 */
declare const PARTIAL_CONTENT = 206;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.2
 *
 * This response code is reserved for future use. Initial aim for creating this code was using it for digital payment systems however this is not used currently.
 */
declare const PAYMENT_REQUIRED = 402;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7538#section-3
 *
 * This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header. This has the same semantics as the 301 Moved Permanently HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 */
declare const PERMANENT_REDIRECT = 308;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7232#section-4.2
 *
 * The client has indicated preconditions in its headers which the server does not meet.
 */
declare const PRECONDITION_FAILED = 412;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-3
 *
 * The origin server requires the request to be conditional. Intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.
 */
declare const PRECONDITION_REQUIRED = 428;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.1
 *
 * This code indicates that the server has received and is processing the request, but no response is available yet.
 */
declare const PROCESSING = 102;
/**
 * Official Documentation @ https://www.rfc-editor.org/rfc/rfc8297#page-3
 *
 * This code indicates to the client that the server is likely to send a final response with the header fields included in the informational response.
 */
declare const EARLY_HINTS = 103;
/**
 * Official Documentation @ https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15
 *
 * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
 */
declare const UPGRADE_REQUIRED = 426;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.2
 *
 * This is similar to 401 but authentication is needed to be done by a proxy.
 */
declare const PROXY_AUTHENTICATION_REQUIRED = 407;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-5
 *
 * The server is unwilling to process the request because its header fields are too large. The request MAY be resubmitted after reducing the size of the request header fields.
 */
declare const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.7
 *
 * This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection. This response is used much more since some browsers, like Chrome, Firefox 27+, or IE9, use HTTP pre-connection mechanisms to speed up surfing. Also note that some servers merely shut down the connection without sending this message.
 */
declare const REQUEST_TIMEOUT = 408;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.11
 *
 * Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.
 */
declare const REQUEST_TOO_LONG = 413;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.12
 *
 * The URI requested by the client is longer than the server is willing to interpret.
 */
declare const REQUEST_URI_TOO_LONG = 414;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7233#section-4.4
 *
 * The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.
 */
declare const REQUESTED_RANGE_NOT_SATISFIABLE = 416;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.3.6
 *
 * This response code is sent after accomplishing request to tell user agent reset document view which sent this request.
 */
declare const RESET_CONTENT = 205;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.4
 *
 * Server sent this response to directing client to get requested resource to another URI with an GET request.
 */
declare const SEE_OTHER = 303;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.6.4
 *
 * The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent. This responses should be used for temporary conditions and the Retry-After: HTTP header should, if possible, contain the estimated time before the recovery of the service. The webmaster must also take care about the caching-related headers that are sent along with this response, as these temporary condition responses should usually not be cached.
 */
declare const SERVICE_UNAVAILABLE = 503;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.2.2
 *
 * This code is sent in response to an Upgrade request header by the client, and indicates the protocol the server is switching too.
 */
declare const SWITCHING_PROTOCOLS = 101;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.7
 *
 * Server sent this response to directing client to get requested resource to another URI with same method that used prior request. This has the same semantic than the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: if a POST was used in the first request, a POST must be used in the second request.
 */
declare const TEMPORARY_REDIRECT = 307;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc6585#section-4
 *
 * The user has sent too many requests in a given amount of time ("rate limiting").
 */
declare const TOO_MANY_REQUESTS = 429;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7235#section-3.1
 *
 * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated". That is, the client must authenticate itself to get the requested response.
 */
declare const UNAUTHORIZED = 401;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7725
 *
 * The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
 */
declare const UNAVAILABLE_FOR_LEGAL_REASONS = 451;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc2518#section-10.3
 *
 * The request was well-formed but was unable to be followed due to semantic errors.
 */
declare const UNPROCESSABLE_ENTITY = 422;
/**
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.5.13
 *
 * The media format of the requested data is not supported by the server, so the server is rejecting the request.
 */
declare const UNSUPPORTED_MEDIA_TYPE = 415;
/**
 * @deprecated
 * Official Documentation @ https://tools.ietf.org/html/rfc7231#section-6.4.6
 *
 * Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
 */
declare const USE_PROXY = 305;
/**
 * Official Documentation @ https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2
 *
 * Defined in the specification of HTTP/2 to indicate that a server is not able to produce a response for the combination of scheme and authority that are included in the request URI.
 */
declare const MISDIRECTED_REQUEST = 421;
type HttpStatusCode = typeof ACCEPTED | typeof BAD_GATEWAY | typeof BAD_REQUEST | typeof CONFLICT | typeof CONTINUE | typeof CREATED | typeof EXPECTATION_FAILED | typeof FAILED_DEPENDENCY | typeof FORBIDDEN | typeof GATEWAY_TIMEOUT | typeof GONE | typeof HTTP_VERSION_NOT_SUPPORTED | typeof IM_A_TEAPOT | typeof INSUFFICIENT_SPACE_ON_RESOURCE | typeof INSUFFICIENT_STORAGE | typeof INTERNAL_SERVER_ERROR | typeof LENGTH_REQUIRED | typeof LOCKED | typeof METHOD_FAILURE | typeof METHOD_NOT_ALLOWED | typeof MOVED_PERMANENTLY | typeof MOVED_TEMPORARILY | typeof MULTI_STATUS | typeof MULTIPLE_CHOICES | typeof NETWORK_AUTHENTICATION_REQUIRED | typeof NO_CONTENT | typeof NON_AUTHORITATIVE_INFORMATION | typeof NOT_ACCEPTABLE | typeof NOT_FOUND | typeof NOT_IMPLEMENTED | typeof NOT_MODIFIED | typeof OK | typeof PARTIAL_CONTENT | typeof PAYMENT_REQUIRED | typeof PERMANENT_REDIRECT | typeof PRECONDITION_FAILED | typeof PRECONDITION_REQUIRED | typeof PROCESSING | typeof EARLY_HINTS | typeof UPGRADE_REQUIRED | typeof PROXY_AUTHENTICATION_REQUIRED | typeof REQUEST_HEADER_FIELDS_TOO_LARGE | typeof REQUEST_TIMEOUT | typeof REQUEST_TOO_LONG | typeof REQUEST_URI_TOO_LONG | typeof REQUESTED_RANGE_NOT_SATISFIABLE | typeof RESET_CONTENT | typeof SEE_OTHER | typeof SERVICE_UNAVAILABLE | typeof SWITCHING_PROTOCOLS | typeof TEMPORARY_REDIRECT | typeof TOO_MANY_REQUESTS | typeof UNAUTHORIZED | typeof UNAVAILABLE_FOR_LEGAL_REASONS | typeof UNPROCESSABLE_ENTITY | typeof UNSUPPORTED_MEDIA_TYPE | typeof USE_PROXY | typeof MISDIRECTED_REQUEST;

declare const codes_ACCEPTED: typeof ACCEPTED;
declare const codes_BAD_GATEWAY: typeof BAD_GATEWAY;
declare const codes_BAD_REQUEST: typeof BAD_REQUEST;
declare const codes_CONFLICT: typeof CONFLICT;
declare const codes_CONTINUE: typeof CONTINUE;
declare const codes_CREATED: typeof CREATED;
declare const codes_EARLY_HINTS: typeof EARLY_HINTS;
declare const codes_EXPECTATION_FAILED: typeof EXPECTATION_FAILED;
declare const codes_FAILED_DEPENDENCY: typeof FAILED_DEPENDENCY;
declare const codes_FORBIDDEN: typeof FORBIDDEN;
declare const codes_GATEWAY_TIMEOUT: typeof GATEWAY_TIMEOUT;
declare const codes_GONE: typeof GONE;
declare const codes_HTTP_VERSION_NOT_SUPPORTED: typeof HTTP_VERSION_NOT_SUPPORTED;
type codes_HttpStatusCode = HttpStatusCode;
declare const codes_IM_A_TEAPOT: typeof IM_A_TEAPOT;
declare const codes_INSUFFICIENT_SPACE_ON_RESOURCE: typeof INSUFFICIENT_SPACE_ON_RESOURCE;
declare const codes_INSUFFICIENT_STORAGE: typeof INSUFFICIENT_STORAGE;
declare const codes_INTERNAL_SERVER_ERROR: typeof INTERNAL_SERVER_ERROR;
declare const codes_LENGTH_REQUIRED: typeof LENGTH_REQUIRED;
declare const codes_LOCKED: typeof LOCKED;
declare const codes_METHOD_FAILURE: typeof METHOD_FAILURE;
declare const codes_METHOD_NOT_ALLOWED: typeof METHOD_NOT_ALLOWED;
declare const codes_MISDIRECTED_REQUEST: typeof MISDIRECTED_REQUEST;
declare const codes_MOVED_PERMANENTLY: typeof MOVED_PERMANENTLY;
declare const codes_MOVED_TEMPORARILY: typeof MOVED_TEMPORARILY;
declare const codes_MULTIPLE_CHOICES: typeof MULTIPLE_CHOICES;
declare const codes_MULTI_STATUS: typeof MULTI_STATUS;
declare const codes_NETWORK_AUTHENTICATION_REQUIRED: typeof NETWORK_AUTHENTICATION_REQUIRED;
declare const codes_NON_AUTHORITATIVE_INFORMATION: typeof NON_AUTHORITATIVE_INFORMATION;
declare const codes_NOT_ACCEPTABLE: typeof NOT_ACCEPTABLE;
declare const codes_NOT_FOUND: typeof NOT_FOUND;
declare const codes_NOT_IMPLEMENTED: typeof NOT_IMPLEMENTED;
declare const codes_NOT_MODIFIED: typeof NOT_MODIFIED;
declare const codes_NO_CONTENT: typeof NO_CONTENT;
declare const codes_OK: typeof OK;
declare const codes_PARTIAL_CONTENT: typeof PARTIAL_CONTENT;
declare const codes_PAYMENT_REQUIRED: typeof PAYMENT_REQUIRED;
declare const codes_PERMANENT_REDIRECT: typeof PERMANENT_REDIRECT;
declare const codes_PRECONDITION_FAILED: typeof PRECONDITION_FAILED;
declare const codes_PRECONDITION_REQUIRED: typeof PRECONDITION_REQUIRED;
declare const codes_PROCESSING: typeof PROCESSING;
declare const codes_PROXY_AUTHENTICATION_REQUIRED: typeof PROXY_AUTHENTICATION_REQUIRED;
declare const codes_REQUESTED_RANGE_NOT_SATISFIABLE: typeof REQUESTED_RANGE_NOT_SATISFIABLE;
declare const codes_REQUEST_HEADER_FIELDS_TOO_LARGE: typeof REQUEST_HEADER_FIELDS_TOO_LARGE;
declare const codes_REQUEST_TIMEOUT: typeof REQUEST_TIMEOUT;
declare const codes_REQUEST_TOO_LONG: typeof REQUEST_TOO_LONG;
declare const codes_REQUEST_URI_TOO_LONG: typeof REQUEST_URI_TOO_LONG;
declare const codes_RESET_CONTENT: typeof RESET_CONTENT;
declare const codes_SEE_OTHER: typeof SEE_OTHER;
declare const codes_SERVICE_UNAVAILABLE: typeof SERVICE_UNAVAILABLE;
declare const codes_SWITCHING_PROTOCOLS: typeof SWITCHING_PROTOCOLS;
declare const codes_TEMPORARY_REDIRECT: typeof TEMPORARY_REDIRECT;
declare const codes_TOO_MANY_REQUESTS: typeof TOO_MANY_REQUESTS;
declare const codes_UNAUTHORIZED: typeof UNAUTHORIZED;
declare const codes_UNAVAILABLE_FOR_LEGAL_REASONS: typeof UNAVAILABLE_FOR_LEGAL_REASONS;
declare const codes_UNPROCESSABLE_ENTITY: typeof UNPROCESSABLE_ENTITY;
declare const codes_UNSUPPORTED_MEDIA_TYPE: typeof UNSUPPORTED_MEDIA_TYPE;
declare const codes_UPGRADE_REQUIRED: typeof UPGRADE_REQUIRED;
declare const codes_USE_PROXY: typeof USE_PROXY;
declare namespace codes {
  export { codes_ACCEPTED as ACCEPTED, codes_BAD_GATEWAY as BAD_GATEWAY, codes_BAD_REQUEST as BAD_REQUEST, codes_CONFLICT as CONFLICT, codes_CONTINUE as CONTINUE, codes_CREATED as CREATED, codes_EARLY_HINTS as EARLY_HINTS, codes_EXPECTATION_FAILED as EXPECTATION_FAILED, codes_FAILED_DEPENDENCY as FAILED_DEPENDENCY, codes_FORBIDDEN as FORBIDDEN, codes_GATEWAY_TIMEOUT as GATEWAY_TIMEOUT, codes_GONE as GONE, codes_HTTP_VERSION_NOT_SUPPORTED as HTTP_VERSION_NOT_SUPPORTED, type codes_HttpStatusCode as HttpStatusCode, codes_IM_A_TEAPOT as IM_A_TEAPOT, codes_INSUFFICIENT_SPACE_ON_RESOURCE as INSUFFICIENT_SPACE_ON_RESOURCE, codes_INSUFFICIENT_STORAGE as INSUFFICIENT_STORAGE, codes_INTERNAL_SERVER_ERROR as INTERNAL_SERVER_ERROR, codes_LENGTH_REQUIRED as LENGTH_REQUIRED, codes_LOCKED as LOCKED, codes_METHOD_FAILURE as METHOD_FAILURE, codes_METHOD_NOT_ALLOWED as METHOD_NOT_ALLOWED, codes_MISDIRECTED_REQUEST as MISDIRECTED_REQUEST, codes_MOVED_PERMANENTLY as MOVED_PERMANENTLY, codes_MOVED_TEMPORARILY as MOVED_TEMPORARILY, codes_MULTIPLE_CHOICES as MULTIPLE_CHOICES, codes_MULTI_STATUS as MULTI_STATUS, codes_NETWORK_AUTHENTICATION_REQUIRED as NETWORK_AUTHENTICATION_REQUIRED, codes_NON_AUTHORITATIVE_INFORMATION as NON_AUTHORITATIVE_INFORMATION, codes_NOT_ACCEPTABLE as NOT_ACCEPTABLE, codes_NOT_FOUND as NOT_FOUND, codes_NOT_IMPLEMENTED as NOT_IMPLEMENTED, codes_NOT_MODIFIED as NOT_MODIFIED, codes_NO_CONTENT as NO_CONTENT, codes_OK as OK, codes_PARTIAL_CONTENT as PARTIAL_CONTENT, codes_PAYMENT_REQUIRED as PAYMENT_REQUIRED, codes_PERMANENT_REDIRECT as PERMANENT_REDIRECT, codes_PRECONDITION_FAILED as PRECONDITION_FAILED, codes_PRECONDITION_REQUIRED as PRECONDITION_REQUIRED, codes_PROCESSING as PROCESSING, codes_PROXY_AUTHENTICATION_REQUIRED as PROXY_AUTHENTICATION_REQUIRED, codes_REQUESTED_RANGE_NOT_SATISFIABLE as REQUESTED_RANGE_NOT_SATISFIABLE, codes_REQUEST_HEADER_FIELDS_TOO_LARGE as REQUEST_HEADER_FIELDS_TOO_LARGE, codes_REQUEST_TIMEOUT as REQUEST_TIMEOUT, codes_REQUEST_TOO_LONG as REQUEST_TOO_LONG, codes_REQUEST_URI_TOO_LONG as REQUEST_URI_TOO_LONG, codes_RESET_CONTENT as RESET_CONTENT, codes_SEE_OTHER as SEE_OTHER, codes_SERVICE_UNAVAILABLE as SERVICE_UNAVAILABLE, codes_SWITCHING_PROTOCOLS as SWITCHING_PROTOCOLS, codes_TEMPORARY_REDIRECT as TEMPORARY_REDIRECT, codes_TOO_MANY_REQUESTS as TOO_MANY_REQUESTS, codes_UNAUTHORIZED as UNAUTHORIZED, codes_UNAVAILABLE_FOR_LEGAL_REASONS as UNAVAILABLE_FOR_LEGAL_REASONS, codes_UNPROCESSABLE_ENTITY as UNPROCESSABLE_ENTITY, codes_UNSUPPORTED_MEDIA_TYPE as UNSUPPORTED_MEDIA_TYPE, codes_UPGRADE_REQUIRED as UPGRADE_REQUIRED, codes_USE_PROXY as USE_PROXY };
}

export { UNAUTHORIZED as $, ACCEPTED as A, BAD_GATEWAY as B, CONFLICT as C, EARLY_HINTS as D, EXPECTATION_FAILED as E, FAILED_DEPENDENCY as F, GATEWAY_TIMEOUT as G, HTTP_VERSION_NOT_SUPPORTED as H, IM_A_TEAPOT as I, PROXY_AUTHENTICATION_REQUIRED as J, REQUEST_TIMEOUT as K, LENGTH_REQUIRED as L, METHOD_FAILURE as M, NETWORK_AUTHENTICATION_REQUIRED as N, OK as O, PARTIAL_CONTENT as P, REQUEST_TOO_LONG as Q, REQUEST_HEADER_FIELDS_TOO_LARGE as R, REQUEST_URI_TOO_LONG as S, REQUESTED_RANGE_NOT_SATISFIABLE as T, UPGRADE_REQUIRED as U, RESET_CONTENT as V, SEE_OTHER as W, SERVICE_UNAVAILABLE as X, SWITCHING_PROTOCOLS as Y, TEMPORARY_REDIRECT as Z, TOO_MANY_REQUESTS as _, BAD_REQUEST as a, UNAVAILABLE_FOR_LEGAL_REASONS as a0, UNPROCESSABLE_ENTITY as a1, UNSUPPORTED_MEDIA_TYPE as a2, USE_PROXY as a3, MISDIRECTED_REQUEST as a4, type HttpStatusCode as a5, CONTINUE as b, codes as c, CREATED as d, FORBIDDEN as e, GONE as f, INSUFFICIENT_SPACE_ON_RESOURCE as g, INSUFFICIENT_STORAGE as h, INTERNAL_SERVER_ERROR as i, LOCKED as j, METHOD_NOT_ALLOWED as k, MOVED_PERMANENTLY as l, MOVED_TEMPORARILY as m, MULTI_STATUS as n, MULTIPLE_CHOICES as o, NO_CONTENT as p, NON_AUTHORITATIVE_INFORMATION as q, NOT_ACCEPTABLE as r, NOT_FOUND as s, NOT_IMPLEMENTED as t, NOT_MODIFIED as u, PAYMENT_REQUIRED as v, PERMANENT_REDIRECT as w, PRECONDITION_FAILED as x, PRECONDITION_REQUIRED as y, PROCESSING as z };
