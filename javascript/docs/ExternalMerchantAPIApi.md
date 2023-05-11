# ApiGateway.ExternalMerchantAPIApi

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



## merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete

> InlineResponse200 merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken, couponCode, opts)

Remove Coupon

Remove coupon

### Example

```javascript
import ApiGateway from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;
// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.ExternalMerchantAPIApi();
let orderToken = "orderToken_example"; // String | 
let couponCode = "couponCode_example"; // String | 
let opts = {
  'xApiKey': "xApiKey_example", // String | 
  'authorization': "authorization_example" // String | 
};
apiInstance.merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken, couponCode, opts, (error, data, response) => {
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
 **orderToken** | **String**|  | 
 **couponCode** | **String**|  | 
 **xApiKey** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantsExternalOrdersOrderTokenCouponsPost

> InlineResponse200 merchantsExternalOrdersOrderTokenCouponsPost(orderToken, opts)

Apply Coupon

Apply coupon

### Example

```javascript
import ApiGateway from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;
// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.ExternalMerchantAPIApi();
let orderToken = "orderToken_example"; // String | 
let opts = {
  'xApiKey': "xApiKey_example", // String | 
  'authorization': "authorization_example", // String | 
  'inlineObject': new ApiGateway.InlineObject() // InlineObject | 
};
apiInstance.merchantsExternalOrdersOrderTokenCouponsPost(orderToken, opts, (error, data, response) => {
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
 **orderToken** | **String**|  | 
 **xApiKey** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsExternalOrdersOrderTokenGiftCardsPost

> InlineResponse2001 merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken, opts)

Apply Gift Card

Apply Gift Card

### Example

```javascript
import ApiGateway from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;
// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.ExternalMerchantAPIApi();
let orderToken = "orderToken_example"; // String | 
let opts = {
  'xApiKey': "xApiKey_example", // String | 
  'authorization': "authorization_example", // String | 
  'inlineObject1': new ApiGateway.InlineObject1() // InlineObject1 | 
};
apiInstance.merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken, opts, (error, data, response) => {
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
 **orderToken** | **String**|  | 
 **xApiKey** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsExternalOrdersOrderTokenShippingMethodsCodePatch

> InlineResponse2003 merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken, code, opts)

Update the selected shipping method

Update the selected shipping method

### Example

```javascript
import ApiGateway from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;
// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.ExternalMerchantAPIApi();
let orderToken = "orderToken_example"; // String | 
let code = "code_example"; // String | 
let opts = {
  'xApiKey': "xApiKey_example", // String | 
  'authorization': "authorization_example" // String | 
};
apiInstance.merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken, code, opts, (error, data, response) => {
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
 **orderToken** | **String**|  | 
 **code** | **String**|  | 
 **xApiKey** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantsExternalOrdersOrderTokenShippingMethodsPost

> InlineResponse2002 merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken, opts)

Get shipping methods

Get shipping methods

### Example

```javascript
import ApiGateway from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;
// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.ExternalMerchantAPIApi();
let orderToken = "orderToken_example"; // String | 
let opts = {
  'xApiKey': "xApiKey_example", // String | 
  'authorization': "authorization_example", // String | 
  'inlineObject2': new ApiGateway.InlineObject2() // InlineObject2 | 
};
apiInstance.merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken, opts, (error, data, response) => {
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
 **orderToken** | **String**|  | 
 **xApiKey** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsExternalOrdersOrderTokenShippingRatePost

> InlineResponse2004 merchantsExternalOrdersOrderTokenShippingRatePost(orderToken, opts)

Shipping Rate

Get shipping rate

### Example

```javascript
import ApiGateway from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;
// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.ExternalMerchantAPIApi();
let orderToken = "orderToken_example"; // String | 
let opts = {
  'xApiKey': "xApiKey_example", // String | 
  'authorization': "authorization_example", // String | 
  'lat': "lat_example", // String | 
  'lon': "lon_example", // String | 
  'city': "city_example", // String | 
  'countryIso': "countryIso_example", // String | 
  'inlineObject3': new ApiGateway.InlineObject3() // InlineObject3 | 
};
apiInstance.merchantsExternalOrdersOrderTokenShippingRatePost(orderToken, opts, (error, data, response) => {
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
 **orderToken** | **String**|  | 
 **xApiKey** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **lat** | **String**|  | [optional] 
 **lon** | **String**|  | [optional] 
 **city** | **String**|  | [optional] 
 **countryIso** | **String**|  | [optional] 
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsOrdersOrderTokenGet

> InlineResponse200 merchantsOrdersOrderTokenGet(orderToken, opts)

Get order

Get order by token

### Example

```javascript
import ApiGateway from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;
// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.ExternalMerchantAPIApi();
let orderToken = "orderToken_example"; // String | 
let opts = {
  'xApiKey': "xApiKey_example" // String | 
};
apiInstance.merchantsOrdersOrderTokenGet(orderToken, opts, (error, data, response) => {
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
 **orderToken** | **String**|  | 
 **xApiKey** | **String**|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantsOrdersOrderTokenPaymentsMethodsGet

> InlineResponse2005 merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken, opts)

Payment Methods

Get payment methods

### Example

```javascript
import ApiGateway from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;
// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.ExternalMerchantAPIApi();
let orderToken = "orderToken_example"; // String | 
let opts = {
  'authorization': "authorization_example", // String | 
  'xApiKey': "xApiKey_example", // String | 
  'xStoreCode': "xStoreCode_example" // String | 
};
apiInstance.merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken, opts, (error, data, response) => {
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
 **orderToken** | **String**|  | 
 **authorization** | **String**|  | [optional] 
 **xApiKey** | **String**|  | [optional] 
 **xStoreCode** | **String**|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantsOrdersOrderTokenTransactionsVerifyPost

> InlineResponse2006 merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken, opts)

Verify OTP Dinners

Verify OTP Dinners

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

let apiInstance = new ApiGateway.ExternalMerchantAPIApi();
let orderToken = "orderToken_example"; // String | 
let opts = {
  'authorization': "authorization_example", // String | 
  'xApiKey': "xApiKey_example", // String | 
  'xMerchantID': "xMerchantID_example", // String | 
  'xStoreCode': "xStoreCode_example", // String | 
  'inlineObject5': new ApiGateway.InlineObject5() // InlineObject5 | 
};
apiInstance.merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken, opts, (error, data, response) => {
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
 **orderToken** | **String**|  | 
 **authorization** | **String**|  | [optional] 
 **xApiKey** | **String**|  | [optional] 
 **xMerchantID** | **String**|  | [optional] 
 **xStoreCode** | **String**|  | [optional] 
 **inlineObject5** | [**InlineObject5**](InlineObject5.md)|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[Authorization](../README.md#Authorization), [X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsOrdersPost

> InlineResponse200 merchantsOrdersPost(opts)

Create Order

Create order

### Example

```javascript
import ApiGateway from 'api_gateway';
let defaultClient = ApiGateway.ApiClient.instance;
// Configure API key authorization: X-Api-Key
let X-Api-Key = defaultClient.authentications['X-Api-Key'];
X-Api-Key.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//X-Api-Key.apiKeyPrefix = 'Token';

let apiInstance = new ApiGateway.ExternalMerchantAPIApi();
let opts = {
  'xApiKey': "xApiKey_example", // String | 
  'inlineObject4': new ApiGateway.InlineObject4() // InlineObject4 | 
};
apiInstance.merchantsOrdersPost(opts, (error, data, response) => {
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
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsTransactionsPurchasePost

> InlineResponse2007 merchantsTransactionsPurchasePost(opts)

Purchase

Purchase

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

let apiInstance = new ApiGateway.ExternalMerchantAPIApi();
let opts = {
  'authorization': "authorization_example", // String | 
  'xApiKey': "xApiKey_example", // String | 
  'xMerchantID': "xMerchantID_example", // String | 
  'xStoreCode': "xStoreCode_example", // String | 
  'xDeviceId': "xDeviceId_example", // String | 
  'xSessionId': "xSessionId_example", // String | 
  'userAgent': "userAgent_example", // String | 
  'inlineObject6': new ApiGateway.InlineObject6() // InlineObject6 | 
};
apiInstance.merchantsTransactionsPurchasePost(opts, (error, data, response) => {
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
 **authorization** | **String**|  | [optional] 
 **xApiKey** | **String**|  | [optional] 
 **xMerchantID** | **String**|  | [optional] 
 **xStoreCode** | **String**|  | [optional] 
 **xDeviceId** | **String**|  | [optional] 
 **xSessionId** | **String**|  | [optional] 
 **userAgent** | **String**|  | [optional] 
 **inlineObject6** | [**InlineObject6**](InlineObject6.md)|  | [optional] 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

[Authorization](../README.md#Authorization), [X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

