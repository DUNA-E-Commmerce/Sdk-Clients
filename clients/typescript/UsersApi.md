# .UsersApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersLoginDeviceFingerprintPost**](UsersApi.md#usersLoginDeviceFingerprintPost) | **POST** /users/login/device-fingerprint | Login User
[**usersMeGet**](UsersApi.md#usersMeGet) | **GET** /users/me | Get User Information


# **usersLoginDeviceFingerprintPost**
> InlineResponse2008 usersLoginDeviceFingerprintPost()

Login User

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersLoginDeviceFingerprintPostRequest = {
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // string (optional)
  xMerchantId: "X-Merchant-Id_example",
  // string (optional)
  xDeviceId: "X-Device-Id_example",
  // string (optional)
  xSessionID: "X-Session-ID_example",
  // string (optional)
  authorization: "Authorization_example",
  // string (optional)
  type: "type_example",
  // string (optional)
  loadProfileData: "load_profile_data_example",
};

apiInstance.usersLoginDeviceFingerprintPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | [**string**] |  | (optional) defaults to undefined
 **xMerchantId** | [**string**] |  | (optional) defaults to undefined
 **xDeviceId** | [**string**] |  | (optional) defaults to undefined
 **xSessionID** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **type** | [**string**] |  | (optional) defaults to undefined
 **loadProfileData** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2008**

### Authorization

[Authorization](README.md#Authorization), [X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **usersMeGet**
> InlineResponse2009 usersMeGet()

Get User Information

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UsersApi(configuration);

let body:.UsersApiUsersMeGetRequest = {
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // string (optional)
  xMerchantId: "X-Merchant-Id_example",
  // string (optional)
  xDeviceId: "X-Device-Id_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.usersMeGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | [**string**] |  | (optional) defaults to undefined
 **xMerchantId** | [**string**] |  | (optional) defaults to undefined
 **xDeviceId** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2009**

### Authorization

[Authorization](README.md#Authorization), [X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


