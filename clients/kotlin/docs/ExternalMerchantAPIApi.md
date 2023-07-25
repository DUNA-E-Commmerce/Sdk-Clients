# ExternalMerchantAPIApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete**](ExternalMerchantAPIApi.md#merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete) | **DELETE** /merchants/external-orders/{order_token}/coupons/{coupon_code} | Remove Coupon
[**merchantsExternalOrdersOrderTokenCouponsPost**](ExternalMerchantAPIApi.md#merchantsExternalOrdersOrderTokenCouponsPost) | **POST** /merchants/external-orders/{order_token}/coupons | Apply Coupon
[**merchantsExternalOrdersOrderTokenGiftCardsPost**](ExternalMerchantAPIApi.md#merchantsExternalOrdersOrderTokenGiftCardsPost) | **POST** /merchants/external-orders/{order_token}/gift-cards | Apply Gift Card
[**merchantsExternalOrdersOrderTokenShippingMethodsCodePatch**](ExternalMerchantAPIApi.md#merchantsExternalOrdersOrderTokenShippingMethodsCodePatch) | **PATCH** /merchants/external-orders/{order_token}/shipping-methods/{code} | Update the selected shipping method
[**merchantsExternalOrdersOrderTokenShippingMethodsPost**](ExternalMerchantAPIApi.md#merchantsExternalOrdersOrderTokenShippingMethodsPost) | **POST** /merchants/external-orders/{order_token}/shipping-methods | Get shipping methods
[**merchantsExternalOrdersOrderTokenShippingRatePost**](ExternalMerchantAPIApi.md#merchantsExternalOrdersOrderTokenShippingRatePost) | **POST** /merchants/external-orders/{order_token}/shipping-rate | Shipping Rate
[**merchantsOrdersOrderTokenGet**](ExternalMerchantAPIApi.md#merchantsOrdersOrderTokenGet) | **GET** /merchants/orders/{order_token} | Get order
[**merchantsOrdersOrderTokenPaymentsMethodsGet**](ExternalMerchantAPIApi.md#merchantsOrdersOrderTokenPaymentsMethodsGet) | **GET** /merchants/orders/{order_token}/payments-methods | Payment Methods
[**merchantsOrdersOrderTokenTransactionsVerifyPost**](ExternalMerchantAPIApi.md#merchantsOrdersOrderTokenTransactionsVerifyPost) | **POST** /merchants/orders/{order_token}/transactions/verify | Verify OTP Dinners
[**merchantsOrdersPost**](ExternalMerchantAPIApi.md#merchantsOrdersPost) | **POST** /merchants/orders | Create Order
[**merchantsTransactionsPurchasePost**](ExternalMerchantAPIApi.md#merchantsTransactionsPurchasePost) | **POST** /merchants/transactions/purchase | Purchase


<a id="merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete"></a>
# **merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete**
> MerchantsExternalOrdersOrderTokenCouponsPost200Response merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken, couponCode, xApiKey, authorization)

Remove Coupon

Remove coupon

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExternalMerchantAPIApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val couponCode : kotlin.String = couponCode_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : MerchantsExternalOrdersOrderTokenCouponsPost200Response = apiInstance.merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken, couponCode, xApiKey, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **couponCode** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**MerchantsExternalOrdersOrderTokenCouponsPost200Response**](MerchantsExternalOrdersOrderTokenCouponsPost200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="merchantsExternalOrdersOrderTokenCouponsPost"></a>
# **merchantsExternalOrdersOrderTokenCouponsPost**
> MerchantsExternalOrdersOrderTokenCouponsPost200Response merchantsExternalOrdersOrderTokenCouponsPost(orderToken, xApiKey, authorization, merchantsExternalOrdersOrderTokenCouponsPostRequest)

Apply Coupon

Apply coupon

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExternalMerchantAPIApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val merchantsExternalOrdersOrderTokenCouponsPostRequest : MerchantsExternalOrdersOrderTokenCouponsPostRequest =  // MerchantsExternalOrdersOrderTokenCouponsPostRequest | 
try {
    val result : MerchantsExternalOrdersOrderTokenCouponsPost200Response = apiInstance.merchantsExternalOrdersOrderTokenCouponsPost(orderToken, xApiKey, authorization, merchantsExternalOrdersOrderTokenCouponsPostRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenCouponsPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenCouponsPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]
 **merchantsExternalOrdersOrderTokenCouponsPostRequest** | [**MerchantsExternalOrdersOrderTokenCouponsPostRequest**](MerchantsExternalOrdersOrderTokenCouponsPostRequest.md)|  | [optional]

### Return type

[**MerchantsExternalOrdersOrderTokenCouponsPost200Response**](MerchantsExternalOrdersOrderTokenCouponsPost200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="merchantsExternalOrdersOrderTokenGiftCardsPost"></a>
# **merchantsExternalOrdersOrderTokenGiftCardsPost**
> MerchantsExternalOrdersOrderTokenGiftCardsPost200Response merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken, xApiKey, authorization, merchantsExternalOrdersOrderTokenGiftCardsPostRequest)

Apply Gift Card

Apply Gift Card

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExternalMerchantAPIApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val merchantsExternalOrdersOrderTokenGiftCardsPostRequest : MerchantsExternalOrdersOrderTokenGiftCardsPostRequest =  // MerchantsExternalOrdersOrderTokenGiftCardsPostRequest | 
try {
    val result : MerchantsExternalOrdersOrderTokenGiftCardsPost200Response = apiInstance.merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken, xApiKey, authorization, merchantsExternalOrdersOrderTokenGiftCardsPostRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenGiftCardsPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenGiftCardsPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]
 **merchantsExternalOrdersOrderTokenGiftCardsPostRequest** | [**MerchantsExternalOrdersOrderTokenGiftCardsPostRequest**](MerchantsExternalOrdersOrderTokenGiftCardsPostRequest.md)|  | [optional]

### Return type

[**MerchantsExternalOrdersOrderTokenGiftCardsPost200Response**](MerchantsExternalOrdersOrderTokenGiftCardsPost200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="merchantsExternalOrdersOrderTokenShippingMethodsCodePatch"></a>
# **merchantsExternalOrdersOrderTokenShippingMethodsCodePatch**
> MerchantsExternalOrdersOrderTokenShippingMethodsCodePatch200Response merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken, code, xApiKey, authorization)

Update the selected shipping method

Update the selected shipping method

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExternalMerchantAPIApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val code : kotlin.String = code_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : MerchantsExternalOrdersOrderTokenShippingMethodsCodePatch200Response = apiInstance.merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken, code, xApiKey, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenShippingMethodsCodePatch")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenShippingMethodsCodePatch")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **code** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**MerchantsExternalOrdersOrderTokenShippingMethodsCodePatch200Response**](MerchantsExternalOrdersOrderTokenShippingMethodsCodePatch200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="merchantsExternalOrdersOrderTokenShippingMethodsPost"></a>
# **merchantsExternalOrdersOrderTokenShippingMethodsPost**
> MerchantsExternalOrdersOrderTokenShippingMethodsPost200Response merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken, xApiKey, authorization, merchantsExternalOrdersOrderTokenShippingMethodsPostRequest)

Get shipping methods

Get shipping methods

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExternalMerchantAPIApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val merchantsExternalOrdersOrderTokenShippingMethodsPostRequest : MerchantsExternalOrdersOrderTokenShippingMethodsPostRequest =  // MerchantsExternalOrdersOrderTokenShippingMethodsPostRequest | 
try {
    val result : MerchantsExternalOrdersOrderTokenShippingMethodsPost200Response = apiInstance.merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken, xApiKey, authorization, merchantsExternalOrdersOrderTokenShippingMethodsPostRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenShippingMethodsPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenShippingMethodsPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]
 **merchantsExternalOrdersOrderTokenShippingMethodsPostRequest** | [**MerchantsExternalOrdersOrderTokenShippingMethodsPostRequest**](MerchantsExternalOrdersOrderTokenShippingMethodsPostRequest.md)|  | [optional]

### Return type

[**MerchantsExternalOrdersOrderTokenShippingMethodsPost200Response**](MerchantsExternalOrdersOrderTokenShippingMethodsPost200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="merchantsExternalOrdersOrderTokenShippingRatePost"></a>
# **merchantsExternalOrdersOrderTokenShippingRatePost**
> MerchantsExternalOrdersOrderTokenShippingRatePost200Response merchantsExternalOrdersOrderTokenShippingRatePost(orderToken, xApiKey, authorization, lat, lon, city, countryIso, merchantsExternalOrdersOrderTokenShippingRatePostRequest)

Shipping Rate

Get shipping rate

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExternalMerchantAPIApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val lat : kotlin.String = lat_example // kotlin.String | 
val lon : kotlin.String = lon_example // kotlin.String | 
val city : kotlin.String = city_example // kotlin.String | 
val countryIso : kotlin.String = countryIso_example // kotlin.String | 
val merchantsExternalOrdersOrderTokenShippingRatePostRequest : MerchantsExternalOrdersOrderTokenShippingRatePostRequest =  // MerchantsExternalOrdersOrderTokenShippingRatePostRequest | 
try {
    val result : MerchantsExternalOrdersOrderTokenShippingRatePost200Response = apiInstance.merchantsExternalOrdersOrderTokenShippingRatePost(orderToken, xApiKey, authorization, lat, lon, city, countryIso, merchantsExternalOrdersOrderTokenShippingRatePostRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenShippingRatePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalMerchantAPIApi#merchantsExternalOrdersOrderTokenShippingRatePost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]
 **lat** | **kotlin.String**|  | [optional]
 **lon** | **kotlin.String**|  | [optional]
 **city** | **kotlin.String**|  | [optional]
 **countryIso** | **kotlin.String**|  | [optional]
 **merchantsExternalOrdersOrderTokenShippingRatePostRequest** | [**MerchantsExternalOrdersOrderTokenShippingRatePostRequest**](MerchantsExternalOrdersOrderTokenShippingRatePostRequest.md)|  | [optional]

### Return type

[**MerchantsExternalOrdersOrderTokenShippingRatePost200Response**](MerchantsExternalOrdersOrderTokenShippingRatePost200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="merchantsOrdersOrderTokenGet"></a>
# **merchantsOrdersOrderTokenGet**
> MerchantsExternalOrdersOrderTokenCouponsPost200Response merchantsOrdersOrderTokenGet(orderToken, xApiKey)

Get order

Get order by token

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExternalMerchantAPIApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    val result : MerchantsExternalOrdersOrderTokenCouponsPost200Response = apiInstance.merchantsOrdersOrderTokenGet(orderToken, xApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalMerchantAPIApi#merchantsOrdersOrderTokenGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalMerchantAPIApi#merchantsOrdersOrderTokenGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

[**MerchantsExternalOrdersOrderTokenCouponsPost200Response**](MerchantsExternalOrdersOrderTokenCouponsPost200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="merchantsOrdersOrderTokenPaymentsMethodsGet"></a>
# **merchantsOrdersOrderTokenPaymentsMethodsGet**
> MerchantsOrdersOrderTokenPaymentsMethodsGet200Response merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken, authorization, xApiKey, xStoreCode)

Payment Methods

Get payment methods

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExternalMerchantAPIApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val xStoreCode : kotlin.String = xStoreCode_example // kotlin.String | 
try {
    val result : MerchantsOrdersOrderTokenPaymentsMethodsGet200Response = apiInstance.merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken, authorization, xApiKey, xStoreCode)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalMerchantAPIApi#merchantsOrdersOrderTokenPaymentsMethodsGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalMerchantAPIApi#merchantsOrdersOrderTokenPaymentsMethodsGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]
 **xApiKey** | **kotlin.String**|  | [optional]
 **xStoreCode** | **kotlin.String**|  | [optional]

### Return type

[**MerchantsOrdersOrderTokenPaymentsMethodsGet200Response**](MerchantsOrdersOrderTokenPaymentsMethodsGet200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="merchantsOrdersOrderTokenTransactionsVerifyPost"></a>
# **merchantsOrdersOrderTokenTransactionsVerifyPost**
> MerchantsOrdersOrderTokenTransactionsVerifyPost200Response merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken, authorization, xApiKey, xMerchantID, xStoreCode, merchantsOrdersOrderTokenTransactionsVerifyPostRequest)

Verify OTP Dinners

Verify OTP Dinners

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExternalMerchantAPIApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val xMerchantID : kotlin.String = xMerchantID_example // kotlin.String | 
val xStoreCode : kotlin.String = xStoreCode_example // kotlin.String | 
val merchantsOrdersOrderTokenTransactionsVerifyPostRequest : MerchantsOrdersOrderTokenTransactionsVerifyPostRequest =  // MerchantsOrdersOrderTokenTransactionsVerifyPostRequest | 
try {
    val result : MerchantsOrdersOrderTokenTransactionsVerifyPost200Response = apiInstance.merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken, authorization, xApiKey, xMerchantID, xStoreCode, merchantsOrdersOrderTokenTransactionsVerifyPostRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalMerchantAPIApi#merchantsOrdersOrderTokenTransactionsVerifyPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalMerchantAPIApi#merchantsOrdersOrderTokenTransactionsVerifyPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]
 **xApiKey** | **kotlin.String**|  | [optional]
 **xMerchantID** | **kotlin.String**|  | [optional]
 **xStoreCode** | **kotlin.String**|  | [optional]
 **merchantsOrdersOrderTokenTransactionsVerifyPostRequest** | [**MerchantsOrdersOrderTokenTransactionsVerifyPostRequest**](MerchantsOrdersOrderTokenTransactionsVerifyPostRequest.md)|  | [optional]

### Return type

[**MerchantsOrdersOrderTokenTransactionsVerifyPost200Response**](MerchantsOrdersOrderTokenTransactionsVerifyPost200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="merchantsOrdersPost"></a>
# **merchantsOrdersPost**
> MerchantsExternalOrdersOrderTokenCouponsPost200Response merchantsOrdersPost(xApiKey, merchantsOrdersPostRequest)

Create Order

Create order

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExternalMerchantAPIApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val merchantsOrdersPostRequest : MerchantsOrdersPostRequest =  // MerchantsOrdersPostRequest | 
try {
    val result : MerchantsExternalOrdersOrderTokenCouponsPost200Response = apiInstance.merchantsOrdersPost(xApiKey, merchantsOrdersPostRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling ExternalMerchantAPIApi#merchantsOrdersPost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalMerchantAPIApi#merchantsOrdersPost")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **merchantsOrdersPostRequest** | [**MerchantsOrdersPostRequest**](MerchantsOrdersPostRequest.md)|  | [optional]

### Return type

[**MerchantsExternalOrdersOrderTokenCouponsPost200Response**](MerchantsExternalOrdersOrderTokenCouponsPost200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="merchantsTransactionsPurchasePost"></a>
# **merchantsTransactionsPurchasePost**
> MerchantsTransactionsPurchasePost200Response merchantsTransactionsPurchasePost(authorization, xApiKey, xMerchantID, xStoreCode, xDeviceId, xSessionId, userAgent, merchantsTransactionsPurchasePostRequest)

Purchase

Purchase

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = ExternalMerchantAPIApi()
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
    println("4xx response calling ExternalMerchantAPIApi#merchantsTransactionsPurchasePost")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling ExternalMerchantAPIApi#merchantsTransactionsPurchasePost")
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

