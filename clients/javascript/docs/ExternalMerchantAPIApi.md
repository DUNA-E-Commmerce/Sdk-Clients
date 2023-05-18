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

> MerchantsExternalOrdersOrderTokenCouponsPost200Response merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken, couponCode, opts)

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
apiInstance.merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken, couponCode, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

[**MerchantsExternalOrdersOrderTokenCouponsPost200Response**](MerchantsExternalOrdersOrderTokenCouponsPost200Response.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantsExternalOrdersOrderTokenCouponsPost

> MerchantsExternalOrdersOrderTokenCouponsPost200Response merchantsExternalOrdersOrderTokenCouponsPost(orderToken, opts)

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
  'merchantsExternalOrdersOrderTokenCouponsPostRequest': new ApiGateway.MerchantsExternalOrdersOrderTokenCouponsPostRequest() // MerchantsExternalOrdersOrderTokenCouponsPostRequest | 
};
apiInstance.merchantsExternalOrdersOrderTokenCouponsPost(orderToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **String**|  | 
 **xApiKey** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **merchantsExternalOrdersOrderTokenCouponsPostRequest** | [**MerchantsExternalOrdersOrderTokenCouponsPostRequest**](MerchantsExternalOrdersOrderTokenCouponsPostRequest.md)|  | [optional] 

### Return type

[**MerchantsExternalOrdersOrderTokenCouponsPost200Response**](MerchantsExternalOrdersOrderTokenCouponsPost200Response.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsExternalOrdersOrderTokenGiftCardsPost

> MerchantsExternalOrdersOrderTokenGiftCardsPost200Response merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken, opts)

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
  'merchantsExternalOrdersOrderTokenGiftCardsPostRequest': new ApiGateway.MerchantsExternalOrdersOrderTokenGiftCardsPostRequest() // MerchantsExternalOrdersOrderTokenGiftCardsPostRequest | 
};
apiInstance.merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **String**|  | 
 **xApiKey** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **merchantsExternalOrdersOrderTokenGiftCardsPostRequest** | [**MerchantsExternalOrdersOrderTokenGiftCardsPostRequest**](MerchantsExternalOrdersOrderTokenGiftCardsPostRequest.md)|  | [optional] 

### Return type

[**MerchantsExternalOrdersOrderTokenGiftCardsPost200Response**](MerchantsExternalOrdersOrderTokenGiftCardsPost200Response.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsExternalOrdersOrderTokenShippingMethodsCodePatch

> MerchantsExternalOrdersOrderTokenShippingMethodsCodePatch200Response merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken, code, opts)

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
apiInstance.merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken, code, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

[**MerchantsExternalOrdersOrderTokenShippingMethodsCodePatch200Response**](MerchantsExternalOrdersOrderTokenShippingMethodsCodePatch200Response.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantsExternalOrdersOrderTokenShippingMethodsPost

> MerchantsExternalOrdersOrderTokenShippingMethodsPost200Response merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken, opts)

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
  'merchantsExternalOrdersOrderTokenShippingMethodsPostRequest': new ApiGateway.MerchantsExternalOrdersOrderTokenShippingMethodsPostRequest() // MerchantsExternalOrdersOrderTokenShippingMethodsPostRequest | 
};
apiInstance.merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **String**|  | 
 **xApiKey** | **String**|  | [optional] 
 **authorization** | **String**|  | [optional] 
 **merchantsExternalOrdersOrderTokenShippingMethodsPostRequest** | [**MerchantsExternalOrdersOrderTokenShippingMethodsPostRequest**](MerchantsExternalOrdersOrderTokenShippingMethodsPostRequest.md)|  | [optional] 

### Return type

[**MerchantsExternalOrdersOrderTokenShippingMethodsPost200Response**](MerchantsExternalOrdersOrderTokenShippingMethodsPost200Response.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsExternalOrdersOrderTokenShippingRatePost

> MerchantsExternalOrdersOrderTokenShippingRatePost200Response merchantsExternalOrdersOrderTokenShippingRatePost(orderToken, opts)

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
  'merchantsExternalOrdersOrderTokenShippingRatePostRequest': new ApiGateway.MerchantsExternalOrdersOrderTokenShippingRatePostRequest() // MerchantsExternalOrdersOrderTokenShippingRatePostRequest | 
};
apiInstance.merchantsExternalOrdersOrderTokenShippingRatePost(orderToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
 **merchantsExternalOrdersOrderTokenShippingRatePostRequest** | [**MerchantsExternalOrdersOrderTokenShippingRatePostRequest**](MerchantsExternalOrdersOrderTokenShippingRatePostRequest.md)|  | [optional] 

### Return type

[**MerchantsExternalOrdersOrderTokenShippingRatePost200Response**](MerchantsExternalOrdersOrderTokenShippingRatePost200Response.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsOrdersOrderTokenGet

> MerchantsExternalOrdersOrderTokenCouponsPost200Response merchantsOrdersOrderTokenGet(orderToken, opts)

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
apiInstance.merchantsOrdersOrderTokenGet(orderToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | **String**|  | 
 **xApiKey** | **String**|  | [optional] 

### Return type

[**MerchantsExternalOrdersOrderTokenCouponsPost200Response**](MerchantsExternalOrdersOrderTokenCouponsPost200Response.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantsOrdersOrderTokenPaymentsMethodsGet

> MerchantsOrdersOrderTokenPaymentsMethodsGet200Response merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken, opts)

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
apiInstance.merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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

[**MerchantsOrdersOrderTokenPaymentsMethodsGet200Response**](MerchantsOrdersOrderTokenPaymentsMethodsGet200Response.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## merchantsOrdersOrderTokenTransactionsVerifyPost

> MerchantsOrdersOrderTokenTransactionsVerifyPost200Response merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken, opts)

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
  'merchantsOrdersOrderTokenTransactionsVerifyPostRequest': new ApiGateway.MerchantsOrdersOrderTokenTransactionsVerifyPostRequest() // MerchantsOrdersOrderTokenTransactionsVerifyPostRequest | 
};
apiInstance.merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
 **merchantsOrdersOrderTokenTransactionsVerifyPostRequest** | [**MerchantsOrdersOrderTokenTransactionsVerifyPostRequest**](MerchantsOrdersOrderTokenTransactionsVerifyPostRequest.md)|  | [optional] 

### Return type

[**MerchantsOrdersOrderTokenTransactionsVerifyPost200Response**](MerchantsOrdersOrderTokenTransactionsVerifyPost200Response.md)

### Authorization

[Authorization](../README.md#Authorization), [X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsOrdersPost

> MerchantsExternalOrdersOrderTokenCouponsPost200Response merchantsOrdersPost(opts)

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
  'merchantsOrdersPostRequest': new ApiGateway.MerchantsOrdersPostRequest() // MerchantsOrdersPostRequest | 
};
apiInstance.merchantsOrdersPost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**|  | [optional] 
 **merchantsOrdersPostRequest** | [**MerchantsOrdersPostRequest**](MerchantsOrdersPostRequest.md)|  | [optional] 

### Return type

[**MerchantsExternalOrdersOrderTokenCouponsPost200Response**](MerchantsExternalOrdersOrderTokenCouponsPost200Response.md)

### Authorization

[X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## merchantsTransactionsPurchasePost

> MerchantsTransactionsPurchasePost200Response merchantsTransactionsPurchasePost(opts)

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
  'merchantsTransactionsPurchasePostRequest': new ApiGateway.MerchantsTransactionsPurchasePostRequest() // MerchantsTransactionsPurchasePostRequest | 
};
apiInstance.merchantsTransactionsPurchasePost(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
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
 **merchantsTransactionsPurchasePostRequest** | [**MerchantsTransactionsPurchasePostRequest**](MerchantsTransactionsPurchasePostRequest.md)|  | [optional] 

### Return type

[**MerchantsTransactionsPurchasePost200Response**](MerchantsTransactionsPurchasePost200Response.md)

### Authorization

[Authorization](../README.md#Authorization), [X-Api-Key](../README.md#X-Api-Key)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

