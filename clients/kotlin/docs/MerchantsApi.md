# MerchantsApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**purchase**](MerchantsApi.md#purchase) | **POST** /merchants/transactions/purchase | Make the payment of the order.


<a id="purchase"></a>
# **purchase**
> Purchase200Response purchase(authorization, xApiKey, xMerchantID, xStoreCode, xDeviceId, xSessionId, userAgent, purchaseRequest)

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
val purchaseRequest : PurchaseRequest =  // PurchaseRequest | 
try {
    val result : Purchase200Response = apiInstance.purchase(authorization, xApiKey, xMerchantID, xStoreCode, xDeviceId, xSessionId, userAgent, purchaseRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling MerchantsApi#purchase")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling MerchantsApi#purchase")
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
 **purchaseRequest** | [**PurchaseRequest**](PurchaseRequest.md)|  | [optional]

### Return type

[**Purchase200Response**](Purchase200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

