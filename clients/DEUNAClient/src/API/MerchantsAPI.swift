//
// MerchantsAPI.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

open class MerchantsAPI {

    /**
     Create merchant
     
     - parameter xApiKey: (header)  (optional)
     - parameter createMerchantRequest: (body)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func createMerchant(xApiKey: String? = nil, createMerchantRequest: CreateMerchantRequest? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: CreateMerchant200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return createMerchantWithRequestBuilder(xApiKey: xApiKey, createMerchantRequest: createMerchantRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create merchant
     - POST /merchants
     - Create merchant
     - API Key:
       - type: apiKey X-Api-Key (HEADER)
       - name: X-Api-Key
     - parameter xApiKey: (header)  (optional)
     - parameter createMerchantRequest: (body)  (optional)
     - returns: RequestBuilder<CreateMerchant200Response> 
     */
    open class func createMerchantWithRequestBuilder(xApiKey: String? = nil, createMerchantRequest: CreateMerchantRequest? = nil) -> RequestBuilder<CreateMerchant200Response> {
        let localVariablePath = "/merchants"
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: createMerchantRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "X-Api-Key": xApiKey?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<CreateMerchant200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Create Merchant Store
     
     - parameter merchantId: (path)  
     - parameter authorization: (header)  (optional)
     - parameter xApiKey: (header)  (optional)
     - parameter createMerchantStoreRequest: (body)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func createMerchantStore(merchantId: String, authorization: String? = nil, xApiKey: String? = nil, createMerchantStoreRequest: CreateMerchantStoreRequest? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: CreateMerchantStore200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return createMerchantStoreWithRequestBuilder(merchantId: merchantId, authorization: authorization, xApiKey: xApiKey, createMerchantStoreRequest: createMerchantStoreRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create Merchant Store
     - POST /merchants/{merchant_id}/stores
     - Create Merchant Store
     - Bearer Token:
       - type: http
       - name: Authorization
     - API Key:
       - type: apiKey X-Api-Key (HEADER)
       - name: X-Api-Key
     - parameter merchantId: (path)  
     - parameter authorization: (header)  (optional)
     - parameter xApiKey: (header)  (optional)
     - parameter createMerchantStoreRequest: (body)  (optional)
     - returns: RequestBuilder<CreateMerchantStore200Response> 
     */
    open class func createMerchantStoreWithRequestBuilder(merchantId: String, authorization: String? = nil, xApiKey: String? = nil, createMerchantStoreRequest: CreateMerchantStoreRequest? = nil) -> RequestBuilder<CreateMerchantStore200Response> {
        var localVariablePath = "/merchants/{merchant_id}/stores"
        let merchantIdPreEscape = "\(APIHelper.mapValueToPathItem(merchantId))"
        let merchantIdPostEscape = merchantIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{merchant_id}", with: merchantIdPostEscape, options: .literal, range: nil)
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: createMerchantStoreRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Authorization": authorization?.encodeToJSON(),
            "X-Api-Key": xApiKey?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<CreateMerchantStore200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Create Public Key
     
     - parameter merchantId: (path)  
     - parameter xApiKey: (header)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func createPublicKey(merchantId: String, xApiKey: String? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: CreatePublicKey201Response?, _ error: Error?) -> Void)) -> RequestTask {
        return createPublicKeyWithRequestBuilder(merchantId: merchantId, xApiKey: xApiKey).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Create Public Key
     - POST /merchants/{merchant_id}/public-keys
     - Create Public Key
     - API Key:
       - type: apiKey X-Api-Key (HEADER)
       - name: X-Api-Key
     - parameter merchantId: (path)  
     - parameter xApiKey: (header)  (optional)
     - returns: RequestBuilder<CreatePublicKey201Response> 
     */
    open class func createPublicKeyWithRequestBuilder(merchantId: String, xApiKey: String? = nil) -> RequestBuilder<CreatePublicKey201Response> {
        var localVariablePath = "/merchants/{merchant_id}/public-keys"
        let merchantIdPreEscape = "\(APIHelper.mapValueToPathItem(merchantId))"
        let merchantIdPostEscape = merchantIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{merchant_id}", with: merchantIdPostEscape, options: .literal, range: nil)
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "X-Api-Key": xApiKey?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<CreatePublicKey201Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Get All Merchants
     
     - parameter authorization: (header)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getAllMerchants(authorization: String? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: GetAllMerchants200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return getAllMerchantsWithRequestBuilder(authorization: authorization).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get All Merchants
     - GET /merchants-all
     - Get All Merchants
     - Bearer Token:
       - type: http
       - name: Authorization
     - parameter authorization: (header)  (optional)
     - returns: RequestBuilder<GetAllMerchants200Response> 
     */
    open class func getAllMerchantsWithRequestBuilder(authorization: String? = nil) -> RequestBuilder<GetAllMerchants200Response> {
        let localVariablePath = "/merchants-all"
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Authorization": authorization?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<GetAllMerchants200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Get merchant
     
     - parameter merchantId: (path)  
     - parameter xApiKey: (header)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getMerchant(merchantId: String, xApiKey: String? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: GetMerchant200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return getMerchantWithRequestBuilder(merchantId: merchantId, xApiKey: xApiKey).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get merchant
     - GET /merchants/{merchant_id}
     - Get merchant
     - API Key:
       - type: apiKey X-Api-Key (HEADER)
       - name: X-Api-Key
     - parameter merchantId: (path)  
     - parameter xApiKey: (header)  (optional)
     - returns: RequestBuilder<GetMerchant200Response> 
     */
    open class func getMerchantWithRequestBuilder(merchantId: String, xApiKey: String? = nil) -> RequestBuilder<GetMerchant200Response> {
        var localVariablePath = "/merchants/{merchant_id}"
        let merchantIdPreEscape = "\(APIHelper.mapValueToPathItem(merchantId))"
        let merchantIdPostEscape = merchantIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{merchant_id}", with: merchantIdPostEscape, options: .literal, range: nil)
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "X-Api-Key": xApiKey?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<GetMerchant200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Get Merchant Stores
     
     - parameter merchantId: (path)  
     - parameter authorization: (header)  (optional)
     - parameter xApiKey: (header)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func getMerchantStores(merchantId: String, authorization: String? = nil, xApiKey: String? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: GetMerchantStores200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return getMerchantStoresWithRequestBuilder(merchantId: merchantId, authorization: authorization, xApiKey: xApiKey).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get Merchant Stores
     - GET /merchants/{merchant_id}/stores
     - Get Merchant Store
     - Bearer Token:
       - type: http
       - name: Authorization
     - API Key:
       - type: apiKey X-Api-Key (HEADER)
       - name: X-Api-Key
     - parameter merchantId: (path)  
     - parameter authorization: (header)  (optional)
     - parameter xApiKey: (header)  (optional)
     - returns: RequestBuilder<GetMerchantStores200Response> 
     */
    open class func getMerchantStoresWithRequestBuilder(merchantId: String, authorization: String? = nil, xApiKey: String? = nil) -> RequestBuilder<GetMerchantStores200Response> {
        var localVariablePath = "/merchants/{merchant_id}/stores"
        let merchantIdPreEscape = "\(APIHelper.mapValueToPathItem(merchantId))"
        let merchantIdPostEscape = merchantIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{merchant_id}", with: merchantIdPostEscape, options: .literal, range: nil)
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Authorization": authorization?.encodeToJSON(),
            "X-Api-Key": xApiKey?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<GetMerchantStores200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Identity Token
     
     - parameter authorization: (header)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func identityToken(authorization: String? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: IdentityToken200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return identityTokenWithRequestBuilder(authorization: authorization).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Identity Token
     - POST /merchants/identity-token
     - Identity Token
     - Bearer Token:
       - type: http
       - name: Authorization
     - parameter authorization: (header)  (optional)
     - returns: RequestBuilder<IdentityToken200Response> 
     */
    open class func identityTokenWithRequestBuilder(authorization: String? = nil) -> RequestBuilder<IdentityToken200Response> {
        let localVariablePath = "/merchants/identity-token"
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Authorization": authorization?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<IdentityToken200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Login
     
     - parameter xApiKey: (header)  (optional)
     - parameter loginRequest: (body)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func login(xApiKey: String? = nil, loginRequest: LoginRequest? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: Login200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return loginWithRequestBuilder(xApiKey: xApiKey, loginRequest: loginRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Login
     - POST /merchants/login
     - Make a Merchant Login
     - API Key:
       - type: apiKey X-Api-Key (HEADER)
       - name: X-Api-Key
     - parameter xApiKey: (header)  (optional)
     - parameter loginRequest: (body)  (optional)
     - returns: RequestBuilder<Login200Response> 
     */
    open class func loginWithRequestBuilder(xApiKey: String? = nil, loginRequest: LoginRequest? = nil) -> RequestBuilder<Login200Response> {
        let localVariablePath = "/merchants/login"
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: loginRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "X-Api-Key": xApiKey?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<Login200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Get Information
     
     - parameter authorization: (header)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func me(authorization: String? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: Me200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return meWithRequestBuilder(authorization: authorization).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Get Information
     - GET /merchants-tokens/me
     - Getting Merchant Information
     - Bearer Token:
       - type: http
       - name: Authorization
     - parameter authorization: (header)  (optional)
     - returns: RequestBuilder<Me200Response> 
     */
    open class func meWithRequestBuilder(authorization: String? = nil) -> RequestBuilder<Me200Response> {
        let localVariablePath = "/merchants-tokens/me"
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Authorization": authorization?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<Me200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Register Merchant Token
     
     - parameter merchantId: (path)  
     - parameter authorization: (header)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func registerMerchantToken(merchantId: String, authorization: String? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: RegisterMerchantToken200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return registerMerchantTokenWithRequestBuilder(merchantId: merchantId, authorization: authorization).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Register Merchant Token
     - POST /merchants/{merchant_id}/tokens
     - Register Merchant Token
     - Bearer Token:
       - type: http
       - name: Authorization
     - parameter merchantId: (path)  
     - parameter authorization: (header)  (optional)
     - returns: RequestBuilder<RegisterMerchantToken200Response> 
     */
    open class func registerMerchantTokenWithRequestBuilder(merchantId: String, authorization: String? = nil) -> RequestBuilder<RegisterMerchantToken200Response> {
        var localVariablePath = "/merchants/{merchant_id}/tokens"
        let merchantIdPreEscape = "\(APIHelper.mapValueToPathItem(merchantId))"
        let merchantIdPostEscape = merchantIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{merchant_id}", with: merchantIdPostEscape, options: .literal, range: nil)
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters: [String: Any]? = nil

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Authorization": authorization?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<RegisterMerchantToken200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Register Merchant User
     
     - parameter xApiKey: (header)  (optional)
     - parameter registerMerchantUsersRequest: (body)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func registerMerchantUser(xApiKey: String? = nil, registerMerchantUsersRequest: RegisterMerchantUsersRequest? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: RegisterMerchantUsers200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return registerMerchantUserWithRequestBuilder(xApiKey: xApiKey, registerMerchantUsersRequest: registerMerchantUsersRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Register Merchant User
     - POST /merchants/users
     - Register Merchant User
     - API Key:
       - type: apiKey X-Api-Key (HEADER)
       - name: X-Api-Key
     - parameter xApiKey: (header)  (optional)
     - parameter registerMerchantUsersRequest: (body)  (optional)
     - returns: RequestBuilder<RegisterMerchantUsers200Response> 
     */
    open class func registerMerchantUserWithRequestBuilder(xApiKey: String? = nil, registerMerchantUsersRequest: RegisterMerchantUsersRequest? = nil) -> RequestBuilder<RegisterMerchantUsers200Response> {
        let localVariablePath = "/merchants/users"
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: registerMerchantUsersRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "X-Api-Key": xApiKey?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<RegisterMerchantUsers200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "POST", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Register Merchant User
     
     - parameter authorization: (header)  (optional)
     - parameter registerMerchantUsersRequest: (body)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func registerMerchantUsers(authorization: String? = nil, registerMerchantUsersRequest: RegisterMerchantUsersRequest? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: RegisterMerchantUsers200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return registerMerchantUsersWithRequestBuilder(authorization: authorization, registerMerchantUsersRequest: registerMerchantUsersRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Register Merchant User
     - GET /merchant-users
     - Register Merchant User
     - Bearer Token:
       - type: http
       - name: Authorization
     - parameter authorization: (header)  (optional)
     - parameter registerMerchantUsersRequest: (body)  (optional)
     - returns: RequestBuilder<RegisterMerchantUsers200Response> 
     */
    open class func registerMerchantUsersWithRequestBuilder(authorization: String? = nil, registerMerchantUsersRequest: RegisterMerchantUsersRequest? = nil) -> RequestBuilder<RegisterMerchantUsers200Response> {
        let localVariablePath = "/merchant-users"
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: registerMerchantUsersRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "Authorization": authorization?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<RegisterMerchantUsers200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "GET", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }

    /**
     Update merchant
     
     - parameter merchantId: (path)  
     - parameter xApiKey: (header)  (optional)
     - parameter updateMerchantRequest: (body)  (optional)
     - parameter apiResponseQueue: The queue on which api response is dispatched.
     - parameter completion: completion handler to receive the data and the error objects
     */
    @discardableResult
    open class func updateMerchant(merchantId: String, xApiKey: String? = nil, updateMerchantRequest: UpdateMerchantRequest? = nil, apiResponseQueue: DispatchQueue = DeUnaSdkAPI.apiResponseQueue, completion: @escaping ((_ data: GetMerchant200Response?, _ error: Error?) -> Void)) -> RequestTask {
        return updateMerchantWithRequestBuilder(merchantId: merchantId, xApiKey: xApiKey, updateMerchantRequest: updateMerchantRequest).execute(apiResponseQueue) { result in
            switch result {
            case let .success(response):
                completion(response.body, nil)
            case let .failure(error):
                completion(nil, error)
            }
        }
    }

    /**
     Update merchant
     - PUT /merchants/{merchant_id}
     - Update merchant
     - API Key:
       - type: apiKey X-Api-Key (HEADER)
       - name: X-Api-Key
     - parameter merchantId: (path)  
     - parameter xApiKey: (header)  (optional)
     - parameter updateMerchantRequest: (body)  (optional)
     - returns: RequestBuilder<GetMerchant200Response> 
     */
    open class func updateMerchantWithRequestBuilder(merchantId: String, xApiKey: String? = nil, updateMerchantRequest: UpdateMerchantRequest? = nil) -> RequestBuilder<GetMerchant200Response> {
        var localVariablePath = "/merchants/{merchant_id}"
        let merchantIdPreEscape = "\(APIHelper.mapValueToPathItem(merchantId))"
        let merchantIdPostEscape = merchantIdPreEscape.addingPercentEncoding(withAllowedCharacters: .urlPathAllowed) ?? ""
        localVariablePath = localVariablePath.replacingOccurrences(of: "{merchant_id}", with: merchantIdPostEscape, options: .literal, range: nil)
        let localVariableURLString = DeUnaSdkAPI.basePath + localVariablePath
        let localVariableParameters = JSONEncodingHelper.encodingParameters(forEncodableObject: updateMerchantRequest)

        let localVariableUrlComponents = URLComponents(string: localVariableURLString)

        let localVariableNillableHeaders: [String: Any?] = [
            "X-Api-Key": xApiKey?.encodeToJSON(),
        ]

        let localVariableHeaderParameters = APIHelper.rejectNilHeaders(localVariableNillableHeaders)

        let localVariableRequestBuilder: RequestBuilder<GetMerchant200Response>.Type = DeUnaSdkAPI.requestBuilderFactory.getBuilder()

        return localVariableRequestBuilder.init(method: "PUT", URLString: (localVariableUrlComponents?.string ?? localVariableURLString), parameters: localVariableParameters, headers: localVariableHeaderParameters, requiresAuthentication: true)
    }
}
