# ApiGateway.MerchantApplicationApi

All URIs are relative to *https://staging-apigw.getduna.com:443*

Method | HTTP request | Description
------------- | ------------- | -------------
[**merchantsApplicationsValidateGet**](MerchantApplicationApi.md#merchantsApplicationsValidateGet) | **GET** /merchants/applications/validate | Validate Application
[**merchantsMerchantIdApplicationsApplicationIdGet**](MerchantApplicationApi.md#merchantsMerchantIdApplicationsApplicationIdGet) | **GET** /merchants/{merchant_id}/applications/{application_id} | Get Application
[**merchantsMerchantIdApplicationsGet**](MerchantApplicationApi.md#merchantsMerchantIdApplicationsGet) | **GET** /merchants/{merchant_id}/applications | Get Applications
[**merchantsMerchantIdApplicationsPost**](MerchantApplicationApi.md#merchantsMerchantIdApplicationsPost) | **POST** /merchants/{merchant_id}/applications | Create Application

<a name="merchantsApplicationsValidateGet"></a>
# **merchantsApplicationsValidateGet**
> InlineResponse200 merchantsApplicationsValidateGet(opts)

Validate Application

Validate application

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;

// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.MerchantApplicationApi();
let opts = { 
  'xApiKey': "xApiKey_example" // String | 
};
apiInstance.merchantsApplicationsValidateGet(opts, (error, data, response) => {
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

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="merchantsMerchantIdApplicationsApplicationIdGet"></a>
# **merchantsMerchantIdApplicationsApplicationIdGet**
> InlineResponse2002 merchantsMerchantIdApplicationsApplicationIdGet(merchantId, applicationId, opts)

Get Application

Get application by ID

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;


let apiInstance = new ApiGateway.MerchantApplicationApi();
let merchantId = "merchantId_example"; // String | 
let applicationId = "applicationId_example"; // String | 
let opts = { 
  'authorization': "authorization_example" // String | 
};
apiInstance.merchantsMerchantIdApplicationsApplicationIdGet(merchantId, applicationId, opts, (error, data, response) => {
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
 **merchantId** | **String**|  | 
 **applicationId** | **String**|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="merchantsMerchantIdApplicationsGet"></a>
# **merchantsMerchantIdApplicationsGet**
> InlineResponse2001 merchantsMerchantIdApplicationsGet(merchantId, opts)

Get Applications

Get applications of merchant

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;


let apiInstance = new ApiGateway.MerchantApplicationApi();
let merchantId = "merchantId_example"; // String | 
let opts = { 
  'authorization': "authorization_example" // String | 
};
apiInstance.merchantsMerchantIdApplicationsGet(merchantId, opts, (error, data, response) => {
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
 **merchantId** | **String**|  | 
 **authorization** | **String**|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="merchantsMerchantIdApplicationsPost"></a>
# **merchantsMerchantIdApplicationsPost**
> InlineResponse2002 merchantsMerchantIdApplicationsPost(merchantId, opts)

Create Application

Create application

### Example
```javascript
import {ApiGateway} from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;


let apiInstance = new ApiGateway.MerchantApplicationApi();
let merchantId = "merchantId_example"; // String | 
let opts = { 
  'body': new ApiGateway.MerchantIdApplicationsBody(), // MerchantIdApplicationsBody | 
  'authorization': "authorization_example" // String | 
};
apiInstance.merchantsMerchantIdApplicationsPost(merchantId, opts, (error, data, response) => {
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
 **merchantId** | **String**|  | 
 **body** | [**MerchantIdApplicationsBody**](MerchantIdApplicationsBody.md)|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

