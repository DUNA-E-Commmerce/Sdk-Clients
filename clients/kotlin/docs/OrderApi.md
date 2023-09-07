# OrderApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelOrder**](OrderApi.md#cancelOrder) | **POST** /merchants/orders/{order_token}/cancel | Cancelar la orden
[**getInstallments**](OrderApi.md#getInstallments) | **GET** /merchants/transactions/orders/{order_token}/installments | Obtener Installments para Orden
[**getOrder**](OrderApi.md#getOrder) | **GET** /merchants/orders/{order_token} | Obtener orden por token
[**orderToken**](OrderApi.md#orderToken) | **POST** /merchants/orders | Crear token de orden
[**refundOrder**](OrderApi.md#refundOrder) | **POST** /merchants/orders/{order_token}/refund | Reembolsar orden
[**successOrder**](OrderApi.md#successOrder) | **POST** /merchants/orders/{order_token}/success | Aprobar orden
[**voidPaymentOrder**](OrderApi.md#voidPaymentOrder) | **POST** /merchants/orders/{order_token}/void | Anular pago


<a id="cancelOrder"></a>
# **cancelOrder**
> cancelOrder(orderToken, xApiKey, cancelOrderRequest)

Cancelar la orden

Cancela una orden identificada por el token de la orden. 

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = OrderApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val cancelOrderRequest : CancelOrderRequest = {"reason":"orden de prueba"} // CancelOrderRequest | 
try {
    apiInstance.cancelOrder(orderToken, xApiKey, cancelOrderRequest)
} catch (e: ClientException) {
    println("4xx response calling OrderApi#cancelOrder")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OrderApi#cancelOrder")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **cancelOrderRequest** | [**CancelOrderRequest**](CancelOrderRequest.md)|  | [optional]

### Return type

null (empty response body)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="getInstallments"></a>
# **getInstallments**
> GetInstallments200Response getInstallments(orderToken, xApiKey, authorization)

Obtener Installments para Orden

Obtener Installments para Orden

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = OrderApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : GetInstallments200Response = apiInstance.getInstallments(orderToken, xApiKey, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OrderApi#getInstallments")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OrderApi#getInstallments")
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

[**GetInstallments200Response**](GetInstallments200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, multipart/form-data

<a id="getOrder"></a>
# **getOrder**
> OrderToken200Response getOrder(orderToken, xApiKey)

Obtener orden por token



### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = OrderApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    val result : OrderToken200Response = apiInstance.getOrder(orderToken, xApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OrderApi#getOrder")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OrderApi#getOrder")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

[**OrderToken200Response**](OrderToken200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, multipart/form-data

<a id="orderToken"></a>
# **orderToken**
> OrderToken200Response orderToken(xApiKey, orderTokenRequest)

Crear token de orden

Generar una orden tokenizada en DEUNA, este deberá ser usado para el resto de peticiones y para poder inicializar el checkout

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = OrderApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val orderTokenRequest : OrderTokenRequest = {"order":{"cash_change":0,"currency":"USD","discounts":[{"amount":0,"code":"string","description":"string","details_url":"string","discount_category":"Cupon","free_shipping":{"is_free_shipping":false,"maximum_cost_allowed":0},"reference":"string"}],"gift_card":[{"amount":2000,"code":"DEUNAGIFT","description":"Tarjeta de regalo","details_url":"https://example.com","reference":""}],"metadata":{"origin":"string","state":"string"},"order_id":"Test-12345","payment":{"data":{"amount":{"amount":2990,"currency":"USD"},"created_at":"string","customer":{"email":"jhondoe@mail.com","id":"145662365566466"},"from_card":{"card_brand":"Visa","first_six":"451152","last_four":"4558"},"id":"string","merchant":{"id":"96","store_code":"all"},"metadata":{},"method_type":"string","processor":"string","reason":"string","status":"processing","updated_at":"string"}},"payment_link":"https://buy.deuna.com/checkout/order_{order_token}","redirect_url":"http://example.com","shipping":{"discounts":[{"amount":2000,"ref_idx":1}],"original_amount":0,"total_discount":0},"shipping_address":{"additional_description":"No tocar timbre","address1":"Av. Eloy Alfaro 14, Quito 170515, Ecuador","address2":"Av. Eloy Alfaro 14, Quito 170515, Ecuador","address_type":"home","city":"Quito","country":"ECU","created_at":"2022-06-03T22:09:09.086990957Z","first_name":"string","id":0,"identity_document":"1234567891","is_default":false,"last_name":"string","lat":-0.100032,"lng":-78.46956,"phone":"+5999999999","state_name":"Quito","updated_at":"2022-06-03T22:09:09.086990957Z","user_id":"string","zipcode":"170515"},"shipping_method":{"code":"string","cost":0,"display_cost":"string","display_tax_amount":"string","max_delivery_date":"string","min_delivery_date":"string","name":"string","scheduler":[{"date":"2022-03-14","end_time":"20:00","start_time":"09:00","steps_minutes":15}],"tax_amount":0},"shipping_options":{"details":{"additional_details":{"pickup_time":"2022-06-03T22:09:09.086990957Z","stock_location":"DEUNA"},"address":"string","address_coordinates":{"lat":0,"lng":0},"contact":{"name":"string","phone":"string"},"store_name":"string"},"type":"pickup"},"status":"pending","store_code":"all","sub_total":4470,"timezone":"America/Mexico_City","total_amount":5000,"total_discount":0,"total_tax_amount":530,"user_instructions":"Sin pepinillos.","webhook_urls":{"apply_coupon":"https://{url_comercio}/api/v1/orders/{order_token}/coupons","get_shipping_methods":" https://{url_comercio}/merchants/external-orders/{order_token}/shipping-methods","notify_order":"https://{url_comercio}/api/v1/orders/notify","remove_coupon":"https://{url_comercio}/api/v1/orders/{order_token}/coupons/{coupon_code}","shipping_rate":"https://{url_comercio}/api/v1/orders/{order_token}/shipping","update_shipping_method":"https://{url_comercio}/merchants/external-orders/{order_token}/shipping-methods/{code}"}},"order_type":"UNSPECIFIED"} // OrderTokenRequest | 
try {
    val result : OrderToken200Response = apiInstance.orderToken(xApiKey, orderTokenRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling OrderApi#orderToken")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OrderApi#orderToken")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **orderTokenRequest** | [**OrderTokenRequest**](OrderTokenRequest.md)|  | [optional]

### Return type

[**OrderToken200Response**](OrderToken200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, multipart/form-data

<a id="refundOrder"></a>
# **refundOrder**
> refundOrder(orderToken, xApiKey, refundOrderRequest)

Reembolsar orden

Este request crea un reembolso de una orden identificada por el token de la orden, el reembolo puede ser: 1. &lt;b&gt;Reembolso total&lt;/b&gt;, en este caso no es necesario enviar el atributo &#x60;amount&#x60;. 2. &lt;b&gt;Reembolso parcial&lt;/b&gt;, debes enviar el atributo  &#x60;amount&#x60; para especificar que es un reembolso parcial, indicando la cantidad a reembolsar.

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = OrderApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val refundOrderRequest : RefundOrderRequest = {"reason":"orden de prueba"} // RefundOrderRequest | Reembolso de la orden
try {
    apiInstance.refundOrder(orderToken, xApiKey, refundOrderRequest)
} catch (e: ClientException) {
    println("4xx response calling OrderApi#refundOrder")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OrderApi#refundOrder")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **refundOrderRequest** | [**RefundOrderRequest**](RefundOrderRequest.md)| Reembolso de la orden | [optional]

### Return type

null (empty response body)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="successOrder"></a>
# **successOrder**
> successOrder(orderToken, xApiKey, successOrderRequest)

Aprobar orden

Si se quiere aprobar una orden para notificar una orden de pago asíncrona como una transferencia podemos usar este método

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = OrderApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val successOrderRequest : SuccessOrderRequest = {"reason":"orden de prueba"} // SuccessOrderRequest | Aprobar orden
try {
    apiInstance.successOrder(orderToken, xApiKey, successOrderRequest)
} catch (e: ClientException) {
    println("4xx response calling OrderApi#successOrder")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OrderApi#successOrder")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **successOrderRequest** | [**SuccessOrderRequest**](SuccessOrderRequest.md)| Aprobar orden | [optional]

### Return type

null (empty response body)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="voidPaymentOrder"></a>
# **voidPaymentOrder**
> voidPaymentOrder(orderToken, xApiKey, successOrderRequest)

Anular pago

Se utiliza este método cuando se quiere anular el pago de una orden 

### Example
```kotlin
// Import classes:
//import io.deuna.deuna-android-sdk.infrastructure.*
//import io.deuna.deuna-android-sdk.models.*

val apiInstance = OrderApi()
val orderToken : kotlin.String = orderToken_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val successOrderRequest : SuccessOrderRequest = {"reason":"orden de prueba"} // SuccessOrderRequest | Aprobar orden
try {
    apiInstance.voidPaymentOrder(orderToken, xApiKey, successOrderRequest)
} catch (e: ClientException) {
    println("4xx response calling OrderApi#voidPaymentOrder")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling OrderApi#voidPaymentOrder")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **successOrderRequest** | [**SuccessOrderRequest**](SuccessOrderRequest.md)| Aprobar orden | [optional]

### Return type

null (empty response body)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

