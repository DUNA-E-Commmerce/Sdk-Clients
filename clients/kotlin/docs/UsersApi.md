# UsersApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersLoginDeviceFingerprintPost**](UsersApi.md#usersLoginDeviceFingerprintPost) | **POST** /users/login/device-fingerprint | Login User
[**usersMeGet**](UsersApi.md#usersMeGet) | **GET** /users/me | Get User Information


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

