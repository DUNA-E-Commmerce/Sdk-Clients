# ApiGateway.UsersApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentsCardsUsersUserIdCardsCardIdDelete**](UsersApi.md#paymentsCardsUsersUserIdCardsCardIdDelete) | **DELETE** /payments-cards/users/{user_id}/cards/{card_id} | Get all user cards
[**paymentsCardsUsersUserIdCardsCardIdGet**](UsersApi.md#paymentsCardsUsersUserIdCardsCardIdGet) | **GET** /payments-cards/users/{user_id}/cards/{card_id} | Obtain a card by its identifier.
[**paymentsCardsUsersUserIdCardsGet**](UsersApi.md#paymentsCardsUsersUserIdCardsGet) | **GET** /payments-cards/users/{user_id}/cards | Get all user cards
[**paymentsCardsUsersUserIdCardsPost**](UsersApi.md#paymentsCardsUsersUserIdCardsPost) | **POST** /payments-cards/users/{user_id}/cards | Get all user cards
[**usersLoginDeviceFingerprintPost**](UsersApi.md#usersLoginDeviceFingerprintPost) | **POST** /users/login/device-fingerprint | Login User
[**usersLoginPost**](UsersApi.md#usersLoginPost) | **POST** /users/login | Allows logging in with the OTP code sent to the user&#x27;s email or phone. This must be specified in the query param.
[**usersMeGet**](UsersApi.md#usersMeGet) | **GET** /users/me | Get User Information
[**usersRegisterPost**](UsersApi.md#usersRegisterPost) | **POST** /users/register | Register User
[**usersRequestCodePost**](UsersApi.md#usersRequestCodePost) | **POST** /users/request-code | Allows logging in with the OTP code sent to the user&#x27;s email or phone. This must be specified in the query param.

<a name="paymentsCardsUsersUserIdCardsCardIdDelete"></a>
# **paymentsCardsUsersUserIdCardsCardIdDelete**
> paymentsCardsUsersUserIdCardsCardIdDelete(userId, cardId, opts)

Get all user cards

Get all user cards

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;

// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.UsersApi();
let userId = "userId_example"; // String | 
let cardId = "cardId_example"; // String | 
let opts = { 
  '': "_example" // String | 
};
apiInstance.paymentsCardsUsersUserIdCardsCardIdDelete(userId, cardId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **cardId** | **String**|  | 
 **** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="paymentsCardsUsersUserIdCardsCardIdGet"></a>
# **paymentsCardsUsersUserIdCardsCardIdGet**
> InlineResponse2004 paymentsCardsUsersUserIdCardsCardIdGet(userId, cardId, opts)

Obtain a card by its identifier.

Obtain a card by its identifier.

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;

// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.UsersApi();
let userId = "userId_example"; // String | 
let cardId = "cardId_example"; // String | 
let opts = { 
  '': "_example" // String | 
};
apiInstance.paymentsCardsUsersUserIdCardsCardIdGet(userId, cardId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **cardId** | **String**|  | 
 **** | **String**|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="paymentsCardsUsersUserIdCardsGet"></a>
# **paymentsCardsUsersUserIdCardsGet**
> [InlineResponse2003] paymentsCardsUsersUserIdCardsGet(userId, opts)

Get all user cards

Get all user cards

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;

// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.UsersApi();
let userId = "userId_example"; // String | 
let opts = { 
  '': "_example" // String | 
};
apiInstance.paymentsCardsUsersUserIdCardsGet(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **** | **String**|  | [optional] 

### Return type

[**[InlineResponse2003]**](InlineResponse2003.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="paymentsCardsUsersUserIdCardsPost"></a>
# **paymentsCardsUsersUserIdCardsPost**
> InlineResponse2004 paymentsCardsUsersUserIdCardsPost(userId, opts)

Get all user cards

Get all user cards

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;

// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.UsersApi();
let userId = "userId_example"; // String | 
let opts = { 
  'body': new ApiGateway.UserIdCardsBody(), // UserIdCardsBody | 
  '': "_example" // String | 
};
apiInstance.paymentsCardsUsersUserIdCardsPost(userId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**|  | 
 **body** | [**UserIdCardsBody**](UserIdCardsBody.md)|  | [optional] 
 **** | **String**|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersLoginDeviceFingerprintPost"></a>
# **usersLoginDeviceFingerprintPost**
> InlineResponse2006 usersLoginDeviceFingerprintPost(opts)

Login User

Login User

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;


// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.UsersApi();
let opts = { 
  'xApiKey': "xApiKey_example", // String | 
  'xMerchantId': "xMerchantId_example", // String | 
  'xDeviceId': "xDeviceId_example", // String | 
  'xSessionID': "xSessionID_example", // String | 
  'authorization': "authorization_example", // String | 
  'type': "type_example", // String | 
  'loadProfileData': "loadProfileData_example" // String | 
};
apiInstance.usersLoginDeviceFingerprintPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**|  | [optional] 
 **xMerchantId** | **String**|  | [optional] 
 **xDeviceId** | **String**|  | [optional] 
 **xSessionID** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **loadProfileData** | **String**|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[Authorization](../README.md#Authorization), [X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersLoginPost"></a>
# **usersLoginPost**
> InlineResponse2005 usersLoginPost(opts)

Allows logging in with the OTP code sent to the user&#x27;s email or phone. This must be specified in the query param.

Allows logging in with the OTP code sent to the user&#x27;s email or phone. This must be specified in the query param.

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;


// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.UsersApi();
let opts = { 
  'body': new ApiGateway.UsersLoginBody(), // UsersLoginBody | 
  'xApiKey': "xApiKey_example", // String | 
  'xMerchantId': "xMerchantId_example", // String | 
  'xDeviceId': "xDeviceId_example", // String | 
  'xSessionID': "xSessionID_example", // String | 
  'authorization': "authorization_example", // String | 
  'xRecaptchaToken': "xRecaptchaToken_example", // String | 
  'type': "type_example", // String | 
  'loadProfileData': "loadProfileData_example" // String | 
};
apiInstance.usersLoginPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersLoginBody**](UsersLoginBody.md)|  | [optional] 
 **xApiKey** | **String**|  | [optional] 
 **xMerchantId** | **String**|  | [optional] 
 **xDeviceId** | **String**|  | [optional] 
 **xSessionID** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **xRecaptchaToken** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 
 **loadProfileData** | **String**|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Authorization](../README.md#Authorization), [X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersMeGet"></a>
# **usersMeGet**
> InlineResponse2007 usersMeGet(opts)

Get User Information

Get User Information

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;


// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.UsersApi();
let opts = { 
  'xApiKey': "xApiKey_example", // String | 
  'xMerchantId': "xMerchantId_example", // String | 
  'xDeviceId': "xDeviceId_example", // String | 
  'authorization': "authorization_example" // String | 
};
apiInstance.usersMeGet(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**|  | [optional] 
 **xMerchantId** | **String**|  | [optional] 
 **xDeviceId** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[Authorization](../README.md#Authorization), [X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="usersRegisterPost"></a>
# **usersRegisterPost**
> InlineResponse2008 usersRegisterPost(opts)

Register User

Register a user of your business, this user once registered will belong to the DEUNA Network.

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;


// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.UsersApi();
let opts = { 
  'body': new ApiGateway.UsersRegisterBody(), // UsersRegisterBody | 
  'xApiKey': "xApiKey_example", // String | 
  'xMerchantId': "xMerchantId_example" // String | 
};
apiInstance.usersRegisterPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersRegisterBody**](UsersRegisterBody.md)|  | [optional] 
 **xApiKey** | **String**|  | [optional] 
 **xMerchantId** | **String**|  | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[Authorization](../README.md#Authorization), [X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersRequestCodePost"></a>
# **usersRequestCodePost**
> usersRequestCodePost(opts)

Allows logging in with the OTP code sent to the user&#x27;s email or phone. This must be specified in the query param.

Allows logging in with the OTP code sent to the user&#x27;s email or phone. This must be specified in the query param.

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;


// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.UsersApi();
let opts = { 
  'body': new ApiGateway.UsersRequestcodeBody(), // UsersRequestcodeBody | 
  'xApiKey': "xApiKey_example", // String | 
  'xMerchantId': "xMerchantId_example", // String | 
  'xDeviceId': "xDeviceId_example", // String | 
  'authorization': "authorization_example", // String | 
  'type': "type_example" // String | 
};
apiInstance.usersRequestCodePost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UsersRequestcodeBody**](UsersRequestcodeBody.md)|  | [optional] 
 **xApiKey** | **String**|  | [optional] 
 **xMerchantId** | **String**|  | [optional] 
 **xDeviceId** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **type** | **String**|  | [optional] 

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization), [X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

