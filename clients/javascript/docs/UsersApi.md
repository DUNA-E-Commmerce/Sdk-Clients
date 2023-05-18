# ApiGateway.UsersApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersLoginDeviceFingerprintPost**](UsersApi.md#usersLoginDeviceFingerprintPost) | **POST** /users/login/device-fingerprint | Login User
[**usersMeGet**](UsersApi.md#usersMeGet) | **GET** /users/me | Get User Information



## usersLoginDeviceFingerprintPost

> InlineResponse2008 usersLoginDeviceFingerprintPost(opts)

Login User

Login User

### Example

```javascript
import ApiGateway from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;
// Configure Bearer access token for authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.accessToken = "YOUR ACCESS TOKEN"
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

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

[Authorization](../README.md#Authorization), [X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersMeGet

> InlineResponse2009 usersMeGet(opts)

Get User Information

Get User Information

### Example

```javascript
import ApiGateway from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;
// Configure Bearer access token for authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.accessToken = "YOUR ACCESS TOKEN"
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

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

[Authorization](../README.md#Authorization), [X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

