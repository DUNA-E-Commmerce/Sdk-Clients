# UsersApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersLoginDeviceFingerprintPost**](UsersApi.md#usersLoginDeviceFingerprintPost) | **POST** /users/login/device-fingerprint | Login User
[**usersLoginPost**](UsersApi.md#usersLoginPost) | **POST** /users/login | Allows logging in with the OTP code sent to the user&#39;s email or phone. This must be specified in the query param.
[**usersMeGet**](UsersApi.md#usersMeGet) | **GET** /users/me | Get User Information
[**usersUserIdCardsCardIdDelete**](UsersApi.md#usersUserIdCardsCardIdDelete) | **DELETE** /users/{user_id}/cards/{card_id} | Remove card by identifier
[**usersUserIdCardsCardIdGet**](UsersApi.md#usersUserIdCardsCardIdGet) | **GET** /users/{user_id}/cards/{card_id} | Obtain a card by its identifier.
[**usersUserIdCardsGet**](UsersApi.md#usersUserIdCardsGet) | **GET** /users/{user_id}/cards | Get all user cards


<a id="usersLoginDeviceFingerprintPost"></a>
# **usersLoginDeviceFingerprintPost**
> UsersLoginDeviceFingerprintPost200Response usersLoginDeviceFingerprintPost(xApiKey, xMerchantId, xDeviceId, xSessionID, authorization, type, loadProfileData)

Login User

Login User

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val xMerchantId : kotlin.String = xMerchantId_example // kotlin.String | 
val xDeviceId : kotlin.String = xDeviceId_example // kotlin.String | 
val xSessionID : kotlin.String = xSessionID_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val type : kotlin.String = type_example // kotlin.String | 
val loadProfileData : kotlin.String = loadProfileData_example // kotlin.String | 
try {
    val result : UsersLoginDeviceFingerprintPost200Response = apiInstance.usersLoginDeviceFingerprintPost(xApiKey, xMerchantId, xDeviceId, xSessionID, authorization, type, loadProfileData)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#usersLoginDeviceFingerprintPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#usersLoginDeviceFingerprintPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **xMerchantId** | **kotlin.String**|  | [optional]
 **xDeviceId** | **kotlin.String**|  | [optional]
 **xSessionID** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]
 **type** | **kotlin.String**|  | [optional]
 **loadProfileData** | **kotlin.String**|  | [optional]

### Return type

[**UsersLoginDeviceFingerprintPost200Response**](UsersLoginDeviceFingerprintPost200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="usersLoginPost"></a>
# **usersLoginPost**
> UsersLoginPost200Response usersLoginPost(xApiKey, xMerchantId, xDeviceId, xSessionID, authorization, xRecaptchaToken, type, loadProfileData, usersLoginPostRequest)

Allows logging in with the OTP code sent to the user&#39;s email or phone. This must be specified in the query param.

Allows logging in with the OTP code sent to the user&#39;s email or phone. This must be specified in the query param.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val xMerchantId : kotlin.String = xMerchantId_example // kotlin.String | 
val xDeviceId : kotlin.String = xDeviceId_example // kotlin.String | 
val xSessionID : kotlin.String = xSessionID_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val xRecaptchaToken : kotlin.String = xRecaptchaToken_example // kotlin.String | 
val type : kotlin.String = type_example // kotlin.String | 
val loadProfileData : kotlin.String = loadProfileData_example // kotlin.String | 
val usersLoginPostRequest : UsersLoginPostRequest =  // UsersLoginPostRequest | 
try {
    val result : UsersLoginPost200Response = apiInstance.usersLoginPost(xApiKey, xMerchantId, xDeviceId, xSessionID, authorization, xRecaptchaToken, type, loadProfileData, usersLoginPostRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#usersLoginPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#usersLoginPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **xMerchantId** | **kotlin.String**|  | [optional]
 **xDeviceId** | **kotlin.String**|  | [optional]
 **xSessionID** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]
 **xRecaptchaToken** | **kotlin.String**|  | [optional]
 **type** | **kotlin.String**|  | [optional]
 **loadProfileData** | **kotlin.String**|  | [optional]
 **usersLoginPostRequest** | [**UsersLoginPostRequest**](UsersLoginPostRequest.md)|  | [optional]

### Return type

[**UsersLoginPost200Response**](UsersLoginPost200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="usersMeGet"></a>
# **usersMeGet**
> UsersMeGet200Response usersMeGet(xApiKey, xMerchantId, xDeviceId, authorization)

Get User Information

Get User Information

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val xMerchantId : kotlin.String = xMerchantId_example // kotlin.String | 
val xDeviceId : kotlin.String = xDeviceId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : UsersMeGet200Response = apiInstance.usersMeGet(xApiKey, xMerchantId, xDeviceId, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#usersMeGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#usersMeGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **xMerchantId** | **kotlin.String**|  | [optional]
 **xDeviceId** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**UsersMeGet200Response**](UsersMeGet200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="usersUserIdCardsCardIdDelete"></a>
# **usersUserIdCardsCardIdDelete**
> usersUserIdCardsCardIdDelete(userId, cardId, authorization)

Remove card by identifier

Remove card by identifier

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val cardId : kotlin.String = cardId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    apiInstance.usersUserIdCardsCardIdDelete(userId, cardId, authorization)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#usersUserIdCardsCardIdDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#usersUserIdCardsCardIdDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **cardId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]

### Return type

null (empty response body)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="usersUserIdCardsCardIdGet"></a>
# **usersUserIdCardsCardIdGet**
> UsersUserIdCardsCardIdGet200Response usersUserIdCardsCardIdGet(userId, cardId, authorization)

Obtain a card by its identifier.

Obtain a card by its identifier.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val cardId : kotlin.String = cardId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : UsersUserIdCardsCardIdGet200Response = apiInstance.usersUserIdCardsCardIdGet(userId, cardId, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#usersUserIdCardsCardIdGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#usersUserIdCardsCardIdGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **cardId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**UsersUserIdCardsCardIdGet200Response**](UsersUserIdCardsCardIdGet200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="usersUserIdCardsGet"></a>
# **usersUserIdCardsGet**
> UsersUserIdCardsGet200Response usersUserIdCardsGet(userId, authorization, xMerchantID)

Get all user cards

Get all user cards

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val xMerchantID : kotlin.String = xMerchantID_example // kotlin.String | 
try {
    val result : UsersUserIdCardsGet200Response = apiInstance.usersUserIdCardsGet(userId, authorization, xMerchantID)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#usersUserIdCardsGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#usersUserIdCardsGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]
 **xMerchantID** | **kotlin.String**|  | [optional]

### Return type

[**UsersUserIdCardsGet200Response**](UsersUserIdCardsGet200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

