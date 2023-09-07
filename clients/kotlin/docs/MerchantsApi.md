# MerchantsApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createMerchant**](MerchantsApi.md#createMerchant) | **POST** /merchants | Create merchant
[**createMerchantStore**](MerchantsApi.md#createMerchantStore) | **POST** /merchants/{merchant_id}/stores | Create Merchant Store
[**createPublicKey**](MerchantsApi.md#createPublicKey) | **POST** /merchants/{merchant_id}/public-keys | Create Public Key
[**getAllMerchants**](MerchantsApi.md#getAllMerchants) | **GET** /merchants-all | Get All Merchants
[**getMerchant**](MerchantsApi.md#getMerchant) | **GET** /merchants/{merchant_id} | Get merchant
[**getMerchantStores**](MerchantsApi.md#getMerchantStores) | **GET** /merchants/{merchant_id}/stores | Get Merchant Stores
[**identityToken**](MerchantsApi.md#identityToken) | **POST** /merchants/identity-token | Identity Token
[**login**](MerchantsApi.md#login) | **POST** /merchants/login | Login
[**me**](MerchantsApi.md#me) | **GET** /merchants-tokens/me | Get Information
[**registerMerchantToken**](MerchantsApi.md#registerMerchantToken) | **POST** /merchants/{merchant_id}/tokens | Register Merchant Token
[**registerMerchantUser**](MerchantsApi.md#registerMerchantUser) | **POST** /merchants/users | Register Merchant User
[**registerMerchantUsers**](MerchantsApi.md#registerMerchantUsers) | **GET** /merchant-users | Register Merchant User
[**updateMerchant**](MerchantsApi.md#updateMerchant) | **PUT** /merchants/{merchant_id} | Update merchant


<a id="createMerchant"></a>
# **createMerchant**
> CreateMerchant200Response createMerchant(xApiKey, createMerchantRequest)

Create merchant

Create merchant

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val createMerchantRequest : CreateMerchantRequest =  // CreateMerchantRequest | 
try {
    val result : CreateMerchant200Response = apiInstance.createMerchant(xApiKey, createMerchantRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#createMerchant")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#createMerchant")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **createMerchantRequest** | [**CreateMerchantRequest**](CreateMerchantRequest.md)|  | [optional]

### Return type

[**CreateMerchant200Response**](CreateMerchant200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="createMerchantStore"></a>
# **createMerchantStore**
> CreateMerchantStore200Response createMerchantStore(merchantId, authorization, xApiKey, createMerchantStoreRequest)

Create Merchant Store

Create Merchant Store

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val merchantId : kotlin.String = merchantId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val createMerchantStoreRequest : CreateMerchantStoreRequest =  // CreateMerchantStoreRequest | 
try {
    val result : CreateMerchantStore200Response = apiInstance.createMerchantStore(merchantId, authorization, xApiKey, createMerchantStoreRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#createMerchantStore")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#createMerchantStore")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]
 **xApiKey** | **kotlin.String**|  | [optional]
 **createMerchantStoreRequest** | [**CreateMerchantStoreRequest**](CreateMerchantStoreRequest.md)|  | [optional]

### Return type

[**CreateMerchantStore200Response**](CreateMerchantStore200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="createPublicKey"></a>
# **createPublicKey**
> CreatePublicKey201Response createPublicKey(merchantId, xApiKey)

Create Public Key

Create Public Key

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val merchantId : kotlin.String = merchantId_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    val result : CreatePublicKey201Response = apiInstance.createPublicKey(merchantId, xApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#createPublicKey")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#createPublicKey")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

[**CreatePublicKey201Response**](CreatePublicKey201Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getAllMerchants"></a>
# **getAllMerchants**
> GetAllMerchants200Response getAllMerchants(authorization)

Get All Merchants

Get All Merchants

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : GetAllMerchants200Response = apiInstance.getAllMerchants(authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#getAllMerchants")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#getAllMerchants")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**GetAllMerchants200Response**](GetAllMerchants200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getMerchant"></a>
# **getMerchant**
> GetMerchant200Response getMerchant(merchantId, xApiKey)

Get merchant

Get merchant

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val merchantId : kotlin.String = merchantId_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    val result : GetMerchant200Response = apiInstance.getMerchant(merchantId, xApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#getMerchant")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#getMerchant")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

[**GetMerchant200Response**](GetMerchant200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getMerchantStores"></a>
# **getMerchantStores**
> GetMerchantStores200Response getMerchantStores(merchantId, authorization, xApiKey)

Get Merchant Stores

Get Merchant Store

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val merchantId : kotlin.String = merchantId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    val result : GetMerchantStores200Response = apiInstance.getMerchantStores(merchantId, authorization, xApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#getMerchantStores")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#getMerchantStores")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

[**GetMerchantStores200Response**](GetMerchantStores200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="identityToken"></a>
# **identityToken**
> IdentityToken200Response identityToken(authorization)

Identity Token

Identity Token

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : IdentityToken200Response = apiInstance.identityToken(authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#identityToken")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#identityToken")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**IdentityToken200Response**](IdentityToken200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="login"></a>
# **login**
> Login200Response login(xApiKey, loginRequest)

Login

Make a Merchant Login

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val loginRequest : LoginRequest =  // LoginRequest | 
try {
    val result : Login200Response = apiInstance.login(xApiKey, loginRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#login")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#login")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **loginRequest** | [**LoginRequest**](LoginRequest.md)|  | [optional]

### Return type

[**Login200Response**](Login200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="me"></a>
# **me**
> Me200Response me(authorization)

Get Information

Getting Merchant Information

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : Me200Response = apiInstance.me(authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#me")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#me")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**Me200Response**](Me200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="registerMerchantToken"></a>
# **registerMerchantToken**
> RegisterMerchantToken200Response registerMerchantToken(merchantId, authorization)

Register Merchant Token

Register Merchant Token

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val merchantId : kotlin.String = merchantId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : RegisterMerchantToken200Response = apiInstance.registerMerchantToken(merchantId, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#registerMerchantToken")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#registerMerchantToken")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**RegisterMerchantToken200Response**](RegisterMerchantToken200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="registerMerchantUser"></a>
# **registerMerchantUser**
> RegisterMerchantUsers200Response registerMerchantUser(xApiKey, registerMerchantUsersRequest)

Register Merchant User

Register Merchant User

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val registerMerchantUsersRequest : RegisterMerchantUsersRequest =  // RegisterMerchantUsersRequest | 
try {
    val result : RegisterMerchantUsers200Response = apiInstance.registerMerchantUser(xApiKey, registerMerchantUsersRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#registerMerchantUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#registerMerchantUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **registerMerchantUsersRequest** | [**RegisterMerchantUsersRequest**](RegisterMerchantUsersRequest.md)|  | [optional]

### Return type

[**RegisterMerchantUsers200Response**](RegisterMerchantUsers200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="registerMerchantUsers"></a>
# **registerMerchantUsers**
> RegisterMerchantUsers200Response registerMerchantUsers(authorization, registerMerchantUsersRequest)

Register Merchant User

Register Merchant User

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val registerMerchantUsersRequest : RegisterMerchantUsersRequest =  // RegisterMerchantUsersRequest | 
try {
    val result : RegisterMerchantUsers200Response = apiInstance.registerMerchantUsers(authorization, registerMerchantUsersRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#registerMerchantUsers")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#registerMerchantUsers")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [optional]
 **registerMerchantUsersRequest** | [**RegisterMerchantUsersRequest**](RegisterMerchantUsersRequest.md)|  | [optional]

### Return type

[**RegisterMerchantUsers200Response**](RegisterMerchantUsers200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="updateMerchant"></a>
# **updateMerchant**
> GetMerchant200Response updateMerchant(merchantId, xApiKey, updateMerchantRequest)

Update merchant

Update merchant

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantsApi()
val merchantId : kotlin.String = merchantId_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val updateMerchantRequest : UpdateMerchantRequest =  // UpdateMerchantRequest | 
try {
    val result : GetMerchant200Response = apiInstance.updateMerchant(merchantId, xApiKey, updateMerchantRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#updateMerchant")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#updateMerchant")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **updateMerchantRequest** | [**UpdateMerchantRequest**](UpdateMerchantRequest.md)|  | [optional]

### Return type

[**GetMerchant200Response**](GetMerchant200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

