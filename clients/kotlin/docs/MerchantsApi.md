# MerchantsApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**merchantsTransactionsPurchasePost**](MerchantsApi.md#merchantsTransactionsPurchasePost) | **POST** /merchants/transactions/purchase | Make the payment of the order.


<a id="merchantsTransactionsPurchasePost"></a>
# **merchantsTransactionsPurchasePost**
> MerchantsTransactionsPurchasePost200Response merchantsTransactionsPurchasePost(authorization, xApiKey, xMerchantID, xStoreCode, xDeviceId, xSessionId, userAgent, merchantsTransactionsPurchasePostRequest)

Make the payment of the order.

Make the payment of the order.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = MerchantsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val xMerchantID : kotlin.String = xMerchantID_example // kotlin.String | 
val xStoreCode : kotlin.String = xStoreCode_example // kotlin.String | 
val xDeviceId : kotlin.String = xDeviceId_example // kotlin.String | 
val xSessionId : kotlin.String = xSessionId_example // kotlin.String | 
val userAgent : kotlin.String = userAgent_example // kotlin.String | 
val merchantsTransactionsPurchasePostRequest : MerchantsTransactionsPurchasePostRequest =  // MerchantsTransactionsPurchasePostRequest | 
try {
    val result : MerchantsTransactionsPurchasePost200Response = apiInstance.merchantsTransactionsPurchasePost(authorization, xApiKey, xMerchantID, xStoreCode, xDeviceId, xSessionId, userAgent, merchantsTransactionsPurchasePostRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#merchantsTransactionsPurchasePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#merchantsTransactionsPurchasePost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [optional]
 **xApiKey** | **kotlin.String**|  | [optional]
 **xMerchantID** | **kotlin.String**|  | [optional]
 **xStoreCode** | **kotlin.String**|  | [optional]
 **xDeviceId** | **kotlin.String**|  | [optional]
 **xSessionId** | **kotlin.String**|  | [optional]
 **userAgent** | **kotlin.String**|  | [optional]
 **merchantsTransactionsPurchasePostRequest** | [**MerchantsTransactionsPurchasePostRequest**](MerchantsTransactionsPurchasePostRequest.md)|  | [optional]

### Return type

[**MerchantsTransactionsPurchasePost200Response**](MerchantsTransactionsPurchasePost200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

