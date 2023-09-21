# CardsApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cardsBinBinGet**](CardsApi.md#cardsBinBinGet) | **GET** /cards/bin/{bin} | Bin detector
[**deleteUsersUserIdCardsCardId**](CardsApi.md#deleteUsersUserIdCardsCardId) | **DELETE** /payments-cards/users/{user_id}/cards/{card_id} | Eliminar una tarjeta
[**getUserCards**](CardsApi.md#getUserCards) | **GET** /payments-cards/users/{user_id}/cards | Obtener todas las tarjetas del usuario
[**getUserIdCards**](CardsApi.md#getUserIdCards) | **GET** /payments-cards/users/{user_id}/cards/{card_id} | Obtener una tarjeta
[**postUsersUserIdCards**](CardsApi.md#postUsersUserIdCards) | **POST** /payments-cards/users/{user_id}/cards | Crear una tarjeta


<a id="cardsBinBinGet"></a>
# **cardsBinBinGet**
> CardsBinBinGet200Response cardsBinBinGet(bin, xApiKey)

Bin detector

Get Bin

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CardsApi()
val bin : kotlin.String = bin_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    val result : CardsBinBinGet200Response = apiInstance.cardsBinBinGet(bin, xApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CardsApi#cardsBinBinGet")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CardsApi#cardsBinBinGet")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bin** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

[**CardsBinBinGet200Response**](CardsBinBinGet200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="deleteUsersUserIdCardsCardId"></a>
# **deleteUsersUserIdCardsCardId**
> deleteUsersUserIdCardsCardId(userId, cardId, authorization)

Eliminar una tarjeta

Eliminar una tarjeta.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CardsApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val cardId : kotlin.String = cardId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    apiInstance.deleteUsersUserIdCardsCardId(userId, cardId, authorization)
} catch (e: ClientException) {
    println("4xx response calling CardsApi#deleteUsersUserIdCardsCardId")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CardsApi#deleteUsersUserIdCardsCardId")
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


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getUserCards"></a>
# **getUserCards**
> GetUserCards200Response getUserCards(userId, authorization)

Obtener todas las tarjetas del usuario

Obtener todas las tarjetas del usuario

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CardsApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : GetUserCards200Response = apiInstance.getUserCards(userId, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CardsApi#getUserCards")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CardsApi#getUserCards")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**GetUserCards200Response**](GetUserCards200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getUserIdCards"></a>
# **getUserIdCards**
> GetUserIdCards200Response getUserIdCards(userId, cardId, authorization)

Obtener una tarjeta

Obtener una tarjeta por su identificador.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CardsApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val cardId : kotlin.String = cardId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : GetUserIdCards200Response = apiInstance.getUserIdCards(userId, cardId, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CardsApi#getUserIdCards")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CardsApi#getUserIdCards")
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

[**GetUserIdCards200Response**](GetUserIdCards200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="postUsersUserIdCards"></a>
# **postUsersUserIdCards**
> PostUsersUserIdCards201Response postUsersUserIdCards(userId, authorization, postUsersUserIdCardsRequest)

Crear una tarjeta

Crear una tarjeta para el usuario.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = CardsApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val postUsersUserIdCardsRequest : PostUsersUserIdCardsRequest = {"address1":"Vergara 548","card_cvv":"123","card_holder":"Jhon Doe","card_holder_dni":"22333444-4","card_number":"4111111111111111","card_verification_config":{"invoke_card_verification":true},"city":"Quito","country":"EC","expiry_month":"11","expiry_year":"2025","fraud_config":{"invoke_fraud_checkpoint":true},"phone":"12345755","state":"Quito","zip":"001100"} // PostUsersUserIdCardsRequest | 
try {
    val result : PostUsersUserIdCards201Response = apiInstance.postUsersUserIdCards(userId, authorization, postUsersUserIdCardsRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling CardsApi#postUsersUserIdCards")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling CardsApi#postUsersUserIdCards")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]
 **postUsersUserIdCardsRequest** | [**PostUsersUserIdCardsRequest**](PostUsersUserIdCardsRequest.md)|  | [optional]

### Return type

[**PostUsersUserIdCards201Response**](PostUsersUserIdCards201Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

