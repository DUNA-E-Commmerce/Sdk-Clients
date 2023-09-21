# UsersApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAddress**](UsersApi.md#createAddress) | **POST** /users/{user_id}/addresses | Crear nueva dirección para el usuario
[**deleteUserCardById**](UsersApi.md#deleteUserCardById) | **DELETE** /users/{user_id}/cards/{card_id} | Remove card by identifier
[**deleteUsersAddress**](UsersApi.md#deleteUsersAddress) | **DELETE** /users/{user_id}/addresses/{address_id} | Eliminar dirección
[**deleteUsersUserId**](UsersApi.md#deleteUsersUserId) | **DELETE** /users/{user_id} | Eliminar Usuario
[**editUser**](UsersApi.md#editUser) | **PATCH** /users/{user_id} | Edit User
[**externalAuthorize**](UsersApi.md#externalAuthorize) | **POST** /users/external-authorize | Iniciar sesión - autorización externa
[**externalAuthorizeRefresh**](UsersApi.md#externalAuthorizeRefresh) | **POST** /users/authorize | Actualizar token
[**getUserAddresses**](UsersApi.md#getUserAddresses) | **GET** /users/{user_id}/addresses | Obtener todas direcciones del usuario
[**getUserCardById**](UsersApi.md#getUserCardById) | **GET** /users/{user_id}/cards/{card_id} | Obtain a card by its identifier.
[**getUserCards**](UsersApi.md#getUserCards) | **GET** /users/{user_id}/cards | Get all user cards
[**getUserInformation**](UsersApi.md#getUserInformation) | **GET** /users/me | Get User Information
[**loginWithOtp**](UsersApi.md#loginWithOtp) | **POST** /users/login | Login con OTP
[**patchUserAddress**](UsersApi.md#patchUserAddress) | **PATCH** /users/{user_id}/addresses/{address_id} | Actualizar dirección
[**registerUser**](UsersApi.md#registerUser) | **POST** /users/signup | Register User
[**requestOtp**](UsersApi.md#requestOtp) | **POST** /users/request-code | Enviar código OTP
[**userExists**](UsersApi.md#userExists) | **GET** /users | Users Exists
[**usersLoginDeviceFingerprintPost**](UsersApi.md#usersLoginDeviceFingerprintPost) | **POST** /users/login/device-fingerprint | Login User
[**usersRegister**](UsersApi.md#usersRegister) | **POST** /users/register | Registro de usuario


<a id="createAddress"></a>
# **createAddress**
> CreateAddress200Response createAddress(userId, xApiKey, createAddressRequest)

Crear nueva dirección para el usuario

Permite crear una dirección para el usuario

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val createAddressRequest : CreateAddressRequest =  // CreateAddressRequest | 
try {
    val result : CreateAddress200Response = apiInstance.createAddress(userId, xApiKey, createAddressRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#createAddress")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#createAddress")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]
 **createAddressRequest** | [**CreateAddressRequest**](CreateAddressRequest.md)|  | [optional]

### Return type

[**CreateAddress200Response**](CreateAddress200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="deleteUserCardById"></a>
# **deleteUserCardById**
> deleteUserCardById(userId, cardId, xApiKey)

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
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    apiInstance.deleteUserCardById(userId, cardId, xApiKey)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#deleteUserCardById")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#deleteUserCardById")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **cardId** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

null (empty response body)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="deleteUsersAddress"></a>
# **deleteUsersAddress**
> deleteUsersAddress(userId, addressId, authorization)

Eliminar dirección

Permite eliminar una dirección del usuario dado su identificador 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val addressId : kotlin.String = addressId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    apiInstance.deleteUsersAddress(userId, addressId, authorization)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#deleteUsersAddress")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#deleteUsersAddress")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **addressId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]

### Return type

null (empty response body)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="deleteUsersUserId"></a>
# **deleteUsersUserId**
> deleteUsersUserId(userId, xApiKey)

Eliminar Usuario

Permite eliminar un usuario de la red DEUNA.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    apiInstance.deleteUsersUserId(userId, xApiKey)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#deleteUsersUserId")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#deleteUsersUserId")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

null (empty response body)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="editUser"></a>
# **editUser**
> editUser(userId, registerUserRequest, xApiKey)

Edit User

Editing User

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val registerUserRequest : RegisterUserRequest =  // RegisterUserRequest | Ejemplo de requestBody
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    apiInstance.editUser(userId, registerUserRequest, xApiKey)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#editUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#editUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **registerUserRequest** | [**RegisterUserRequest**](RegisterUserRequest.md)| Ejemplo de requestBody |
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

null (empty response body)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="externalAuthorize"></a>
# **externalAuthorize**
> ExternalAuthorize200Response externalAuthorize(xApiKey, authorization)

Iniciar sesión - autorización externa

Entregar de forma segura un token autorizado por DEUNA ONE y el cliente.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : ExternalAuthorize200Response = apiInstance.externalAuthorize(xApiKey, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#externalAuthorize")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#externalAuthorize")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**ExternalAuthorize200Response**](ExternalAuthorize200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="externalAuthorizeRefresh"></a>
# **externalAuthorizeRefresh**
> ExternalAuthorizeRefresh200Response externalAuthorizeRefresh(xApiKey, authorization)

Actualizar token

Obtener un nuevo token de forma segura a partir de un refresh_token autorizado por DEUNA ONE y el cliente.

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : ExternalAuthorizeRefresh200Response = apiInstance.externalAuthorizeRefresh(xApiKey, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#externalAuthorizeRefresh")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#externalAuthorizeRefresh")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**ExternalAuthorizeRefresh200Response**](ExternalAuthorizeRefresh200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getUserAddresses"></a>
# **getUserAddresses**
> GetUserAddresses200Response getUserAddresses(userId, authorization)

Obtener todas direcciones del usuario



### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : GetUserAddresses200Response = apiInstance.getUserAddresses(userId, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#getUserAddresses")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#getUserAddresses")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**GetUserAddresses200Response**](GetUserAddresses200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getUserCardById"></a>
# **getUserCardById**
> GetUserCardById200Response getUserCardById(userId, cardId, xApiKey)

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
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    val result : GetUserCardById200Response = apiInstance.getUserCardById(userId, cardId, xApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#getUserCardById")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#getUserCardById")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **cardId** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

[**GetUserCardById200Response**](GetUserCardById200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getUserCards"></a>
# **getUserCards**
> GetUserCards200Response getUserCards(userId, xApiKey)

Get all user cards

Get all user cards

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    val result : GetUserCards200Response = apiInstance.getUserCards(userId, xApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#getUserCards")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#getUserCards")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

[**GetUserCards200Response**](GetUserCards200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="getUserInformation"></a>
# **getUserInformation**
> GetUserInformation200Response getUserInformation(xApiKey, authorization)

Get User Information

Get User Information

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : GetUserInformation200Response = apiInstance.getUserInformation(xApiKey, authorization)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#getUserInformation")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#getUserInformation")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]

### Return type

[**GetUserInformation200Response**](GetUserInformation200Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="loginWithOtp"></a>
# **loginWithOtp**
> LoginWithOtp200Response loginWithOtp(loginWithOtpRequest)

Login con OTP

Permite iniciar sesión con el código OTP enviado al correo o al teléfono del usuario. **Esto se debe especificar en el query param.** 

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val loginWithOtpRequest : LoginWithOtpRequest = {"email":"jhondoe@email.com","otp":"123456"} // LoginWithOtpRequest | 
try {
    val result : LoginWithOtp200Response = apiInstance.loginWithOtp(loginWithOtpRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#loginWithOtp")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#loginWithOtp")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginWithOtpRequest** | [**LoginWithOtpRequest**](LoginWithOtpRequest.md)|  | [optional]

### Return type

[**LoginWithOtp200Response**](LoginWithOtp200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="patchUserAddress"></a>
# **patchUserAddress**
> patchUserAddress(userId, addressId, authorization)

Actualizar dirección

Permite actualizar los datos de una dirección mediante el id del mismo

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val userId : kotlin.String = userId_example // kotlin.String | 
val addressId : kotlin.String = addressId_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    apiInstance.patchUserAddress(userId, addressId, authorization)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#patchUserAddress")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#patchUserAddress")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **kotlin.String**|  |
 **addressId** | **kotlin.String**|  |
 **authorization** | **kotlin.String**|  | [optional]

### Return type

null (empty response body)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="registerUser"></a>
# **registerUser**
> RegisterUser200Response registerUser(registerUserRequest, xApiKey)

Register User

Allow register user

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val registerUserRequest : RegisterUserRequest =  // RegisterUserRequest | Ejemplo de requestBody
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
try {
    val result : RegisterUser200Response = apiInstance.registerUser(registerUserRequest, xApiKey)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#registerUser")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#registerUser")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerUserRequest** | [**RegisterUserRequest**](RegisterUserRequest.md)| Ejemplo de requestBody |
 **xApiKey** | **kotlin.String**|  | [optional]

### Return type

[**RegisterUser200Response**](RegisterUser200Response.md)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="requestOtp"></a>
# **requestOtp**
> requestOtp(requestOtpRequest)

Enviar código OTP

Enviar el OTP (One time password) al correo o teléfono del usuario. **Esto se debe especificar en el query param.**

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val requestOtpRequest : RequestOtpRequest = {"email":"jhondoe@email.com"} // RequestOtpRequest | 
try {
    apiInstance.requestOtp(requestOtpRequest)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#requestOtp")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#requestOtp")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestOtpRequest** | [**RequestOtpRequest**](RequestOtpRequest.md)|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a id="userExists"></a>
# **userExists**
> userExists(xApiKey, email)

Users Exists

Get if user exists

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val email : kotlin.String = email_example // kotlin.String | 
try {
    apiInstance.userExists(xApiKey, email)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#userExists")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#userExists")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **email** | **kotlin.String**|  | [optional]

### Return type

null (empty response body)

### Authorization


Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a id="usersLoginDeviceFingerprintPost"></a>
# **usersLoginDeviceFingerprintPost**
> UsersLoginDeviceFingerprintPost200Response usersLoginDeviceFingerprintPost(xApiKey, authorization)

Login User

Login User

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
try {
    val result : UsersLoginDeviceFingerprintPost200Response = apiInstance.usersLoginDeviceFingerprintPost(xApiKey, authorization)
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
 **authorization** | **kotlin.String**|  | [optional]

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

<a id="usersRegister"></a>
# **usersRegister**
> UsersRegister201Response usersRegister(xApiKey, authorization, usersRegisterRequest)

Registro de usuario

Registrar un usuario de tu comercio, este usuario una vez registrado pertenecera a la Red DEUNA

### Example
```kotlin
// Import classes:
//import org.openapitools.client.infrastructure.*
//import org.openapitools.client.models.*

val apiInstance = UsersApi()
val xApiKey : kotlin.String = xApiKey_example // kotlin.String | 
val authorization : kotlin.String = authorization_example // kotlin.String | 
val usersRegisterRequest : UsersRegisterRequest =  // UsersRegisterRequest | 
try {
    val result : UsersRegister201Response = apiInstance.usersRegister(xApiKey, authorization, usersRegisterRequest)
    println(result)
} catch (e: ClientException) {
    println("4xx response calling UsersApi#usersRegister")
    e.printStackTrace()
} catch (e: ServerException) {
    println("5xx response calling UsersApi#usersRegister")
    e.printStackTrace()
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **kotlin.String**|  | [optional]
 **authorization** | **kotlin.String**|  | [optional]
 **usersRegisterRequest** | [**UsersRegisterRequest**](UsersRegisterRequest.md)|  | [optional]

### Return type

[**UsersRegister201Response**](UsersRegister201Response.md)

### Authorization


Configure Authorization:
    ApiClient.accessToken = ""
Configure X-Api-Key:
    ApiClient.apiKey["X-Api-Key"] = ""
    ApiClient.apiKeyPrefix["X-Api-Key"] = ""

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

