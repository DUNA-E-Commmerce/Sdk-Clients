# PaymentsApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**capture**](PaymentsApi.md#capture) | **POST** /merchants/orders/{order_token}/capture | Capturar un pago autorizado
[**getMerchantsPaymentsMethods**](PaymentsApi.md#getMerchantsPaymentsMethods) | **GET** /merchants/orders/{order_token}/payments-methods | Métodos de pago
[**getPaymentMethods**](PaymentsApi.md#getPaymentMethods) | **GET** /transactions/payments-methods | Payment methods campos específicos
[**purchase**](PaymentsApi.md#purchase) | **POST** /merchants/transactions/purchase | Realizar pago de orden
[**verifyPaymentOtp**](PaymentsApi.md#verifyPaymentOtp) | **POST** /merchants/orders/{order_token}/transactions/verify | Verificar pago con OTP


<a id="capture"></a>
# **capture**
> capture(orderToken, xApiKey, captureRequest)

Capturar un pago autorizado

La opción de **capturar un pago autorizado** te permite completar una transacción con estado **authorized**. Una transaccion esta en estado  **authorized** cuando se reservaron los fondos necesarios para dicha transacción.

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = PaymentsApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val captureRequest : CaptureRequest = {"amount":100} // CaptureRequest | 
try {
    apiInstance.capture(orderToken, xApiKey, captureRequest)
} catch (e: ClientException) {
    println("4xx response calling PaymentsApi#capture")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PaymentsApi#capture")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **captureRequest** | [**CaptureRequest**](CaptureRequest.md)|  | [optional]

### Return type

null (empty response body)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="getMerchantsPaymentsMethods"></a>
# **getMerchantsPaymentsMethods**
> GetMerchantsPaymentsMethods200Response getMerchantsPaymentsMethods(orderToken, xApiKey, authorization)

Métodos de pago

Obtiene los métodos disponibles que tiene el comercio para esa orden en específico

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = PaymentsApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : GetMerchantsPaymentsMethods200Response = apiInstance.getMerchantsPaymentsMethods(orderToken, xApiKey, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PaymentsApi#getMerchantsPaymentsMethods")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PaymentsApi#getMerchantsPaymentsMethods")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**GetMerchantsPaymentsMethods200Response**](GetMerchantsPaymentsMethods200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getPaymentMethods"></a>
# **getPaymentMethods**
> GetPaymentMethods200Response getPaymentMethods(authorization)

Payment methods campos específicos

Obtén los métodos de pago asociados al comercio y su respectiva información adicional requerida.

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = PaymentsApi()
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : GetPaymentMethods200Response = apiInstance.getPaymentMethods(authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PaymentsApi#getPaymentMethods")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PaymentsApi#getPaymentMethods")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**GetPaymentMethods200Response**](GetPaymentMethods200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="purchase"></a>
# **purchase**
> Purchase200Response purchase(xApiKey, authorization, xDeviceId, xSessionId, purchaseRequest)

Realizar pago de orden

Realiza el pago de la orden. Para los procesadores previamente configurados, al momento de hacer el pago, en la respuesta el atributo &#39;status&#39; cambiará a &#39;authorized&#39;  indicando que dicha transacción esta pendiente para realizar una captura o anulación, según sea el caso.

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = PaymentsApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val xDeviceId : kotlin.String = xDeviceId_example // kotlin.String | 
val xSessionId : kotlin.String = xSessionId_example // kotlin.String | 
val purchaseRequest : PurchaseRequest = {"card_id":"xxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx","credit_card":{},"email":"jhondoe@deuna.com","method_type":"cash","processor_name":"cash","specific_fields":{},"store_code":"all","token":"xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx","user_instructions":""} // PurchaseRequest | 
try {
    val result : Purchase200Response = apiInstance.purchase(xApiKey, authorization, xDeviceId, xSessionId, purchaseRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PaymentsApi#purchase")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PaymentsApi#purchase")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]
 **xDeviceId** | **kotlin.String**|  | [optional]
 **xSessionId** | **kotlin.String**|  | [optional]
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
 - **Accept**: application/json, multipart/form-data

<a id="verifyPaymentOtp"></a>
# **verifyPaymentOtp**
> OrderToken200Response verifyPaymentOtp(orderToken, xApiKey, authorization, verifyPaymentOtpRequest)

Verificar pago con OTP

Verificar el pago con el código OTP 

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = PaymentsApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val verifyPaymentOtpRequest : VerifyPaymentOtpRequest = {"otp":"543210"} // VerifyPaymentOtpRequest | 
try {
    val result : OrderToken200Response = apiInstance.verifyPaymentOtp(orderToken, xApiKey, authorization, verifyPaymentOtpRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling PaymentsApi#verifyPaymentOtp")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling PaymentsApi#verifyPaymentOtp")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]
 **verifyPaymentOtpRequest** | [**VerifyPaymentOtpRequest**](VerifyPaymentOtpRequest.md)|  | [optional]

### Return type

[**OrderToken200Response**](OrderToken200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, multipart/form-data

