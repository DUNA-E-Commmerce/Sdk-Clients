# MerchantApplicationApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApplicationById**](MerchantApplicationApi.md#getApplicationById) | **GET** /merchants/{merchant_id}/applications/{application_id} | Get Application
[**merchantsApplicationsValidateGet**](MerchantApplicationApi.md#merchantsApplicationsValidateGet) | **GET** /merchants/applications/validate | Validate Application
[**merchantsMerchantIdApplicationsGet**](MerchantApplicationApi.md#merchantsMerchantIdApplicationsGet) | **GET** /merchants/{merchant_id}/applications | Get Applications
[**merchantsMerchantIdApplicationsPost**](MerchantApplicationApi.md#merchantsMerchantIdApplicationsPost) | **POST** /merchants/{merchant_id}/applications | Create Application


<a id="getApplicationById"></a>
# **getApplicationById**
> MerchantsMerchantIdApplicationsPost200Response getApplicationById(merchantId, applicationId, authorization)

Get Application

Get application by ID

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantApplicationApi()
val merchantId : kotlin.String = merchantId_example // kotlin.String | 
val applicationId : kotlin.String = applicationId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : MerchantsMerchantIdApplicationsPost200Response = apiInstance.getApplicationById(merchantId, applicationId, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantApplicationApi#getApplicationById")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantApplicationApi#getApplicationById")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **kotlin.String**|  |
 **applicationId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**MerchantsMerchantIdApplicationsPost200Response**](MerchantsMerchantIdApplicationsPost200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="merchantsApplicationsValidateGet"></a>
# **merchantsApplicationsValidateGet**
> MerchantsApplicationsValidateGet200Response merchantsApplicationsValidateGet(xApiKey)

Validate Application

Validate application

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantApplicationApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    val result : MerchantsApplicationsValidateGet200Response = apiInstance.merchantsApplicationsValidateGet(xApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantApplicationApi#merchantsApplicationsValidateGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantApplicationApi#merchantsApplicationsValidateGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

[**MerchantsApplicationsValidateGet200Response**](MerchantsApplicationsValidateGet200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="merchantsMerchantIdApplicationsGet"></a>
# **merchantsMerchantIdApplicationsGet**
> MerchantsMerchantIdApplicationsGet200Response merchantsMerchantIdApplicationsGet(merchantId, authorization)

Get Applications

Get applications of merchant

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantApplicationApi()
val merchantId : kotlin.String = merchantId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : MerchantsMerchantIdApplicationsGet200Response = apiInstance.merchantsMerchantIdApplicationsGet(merchantId, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantApplicationApi#merchantsMerchantIdApplicationsGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantApplicationApi#merchantsMerchantIdApplicationsGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**MerchantsMerchantIdApplicationsGet200Response**](MerchantsMerchantIdApplicationsGet200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="merchantsMerchantIdApplicationsPost"></a>
# **merchantsMerchantIdApplicationsPost**
> MerchantsMerchantIdApplicationsPost200Response merchantsMerchantIdApplicationsPost(merchantId, authorization, merchantsMerchantIdApplicationsPostRequest)

Create Application

Create application

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = MerchantApplicationApi()
val merchantId : kotlin.String = merchantId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val merchantsMerchantIdApplicationsPostRequest : MerchantsMerchantIdApplicationsPostRequest =  // MerchantsMerchantIdApplicationsPostRequest | 
try {
    val result : MerchantsMerchantIdApplicationsPost200Response = apiInstance.merchantsMerchantIdApplicationsPost(merchantId, authorization, merchantsMerchantIdApplicationsPostRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantApplicationApi#merchantsMerchantIdApplicationsPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantApplicationApi#merchantsMerchantIdApplicationsPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **merchantId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]
 **merchantsMerchantIdApplicationsPostRequest** | [**MerchantsMerchantIdApplicationsPostRequest**](MerchantsMerchantIdApplicationsPostRequest.md)|  | [optional]

### Return type

[**MerchantsMerchantIdApplicationsPost200Response**](MerchantsMerchantIdApplicationsPost200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

