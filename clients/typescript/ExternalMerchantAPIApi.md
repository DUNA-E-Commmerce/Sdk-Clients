# .ExternalMerchantAPIApi

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


# **merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete**
> InlineResponse200 merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete()

Remove coupon

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExternalMerchantAPIApi(configuration);

let body:.ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenCouponsCouponCodeDeleteRequest = {
  // string
  orderToken: "order_token_example",
  // string
  couponCode: "coupon_code_example",
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | [**string**] |  | defaults to undefined
 **couponCode** | [**string**] |  | defaults to undefined
 **xApiKey** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse200**

### Authorization

[X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **merchantsExternalOrdersOrderTokenCouponsPost**
> InlineResponse200 merchantsExternalOrdersOrderTokenCouponsPost()

Apply coupon

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExternalMerchantAPIApi(configuration);

let body:.ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenCouponsPostRequest = {
  // string
  orderToken: "order_token_example",
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // string (optional)
  authorization: "Authorization_example",
  // InlineObject (optional)
  inlineObject: {
    couponCode: "couponCode_example",
  },
};

apiInstance.merchantsExternalOrdersOrderTokenCouponsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | **InlineObject**|  |
 **orderToken** | [**string**] |  | defaults to undefined
 **xApiKey** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse200**

### Authorization

[X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **merchantsExternalOrdersOrderTokenGiftCardsPost**
> InlineResponse2001 merchantsExternalOrdersOrderTokenGiftCardsPost()

Apply Gift Card

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExternalMerchantAPIApi(configuration);

let body:.ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenGiftCardsPostRequest = {
  // string
  orderToken: "order_token_example",
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // string (optional)
  authorization: "Authorization_example",
  // InlineObject1 (optional)
  inlineObject1: {
    giftCardCode: "giftCardCode_example",
  },
};

apiInstance.merchantsExternalOrdersOrderTokenGiftCardsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | **InlineObject1**|  |
 **orderToken** | [**string**] |  | defaults to undefined
 **xApiKey** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2001**

### Authorization

[X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **merchantsExternalOrdersOrderTokenShippingMethodsCodePatch**
> InlineResponse2003 merchantsExternalOrdersOrderTokenShippingMethodsCodePatch()

Update the selected shipping method

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExternalMerchantAPIApi(configuration);

let body:.ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenShippingMethodsCodePatchRequest = {
  // string
  orderToken: "order_token_example",
  // string
  code: "code_example",
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // string (optional)
  authorization: "Authorization_example",
};

apiInstance.merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | [**string**] |  | defaults to undefined
 **code** | [**string**] |  | defaults to undefined
 **xApiKey** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2003**

### Authorization

[X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **merchantsExternalOrdersOrderTokenShippingMethodsPost**
> InlineResponse2002 merchantsExternalOrdersOrderTokenShippingMethodsPost()

Get shipping methods

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExternalMerchantAPIApi(configuration);

let body:.ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenShippingMethodsPostRequest = {
  // string
  orderToken: "order_token_example",
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // string (optional)
  authorization: "Authorization_example",
  // InlineObject2 (optional)
  inlineObject2: {
    additionalDescription: "additionalDescription_example",
    address1: "address1_example",
    address2: "address2_example",
    addressType: "addressType_example",
    city: "city_example",
    countryIso: "countryIso_example",
    firstName: "firstName_example",
    id: 3.14,
    identityDocument: "identityDocument_example",
    isDefault: true,
    lastName: "lastName_example",
    lat: 3.14,
    lng: 3.14,
    phone: "phone_example",
    stateName: "stateName_example",
    zipcode: "zipcode_example",
  },
};

apiInstance.merchantsExternalOrdersOrderTokenShippingMethodsPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | **InlineObject2**|  |
 **orderToken** | [**string**] |  | defaults to undefined
 **xApiKey** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2002**

### Authorization

[X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **merchantsExternalOrdersOrderTokenShippingRatePost**
> InlineResponse2004 merchantsExternalOrdersOrderTokenShippingRatePost()

Get shipping rate

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExternalMerchantAPIApi(configuration);

let body:.ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenShippingRatePostRequest = {
  // string
  orderToken: "order_token_example",
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // string (optional)
  authorization: "Authorization_example",
  // string (optional)
  lat: "lat_example",
  // string (optional)
  lon: "lon_example",
  // string (optional)
  city: "city_example",
  // string (optional)
  countryIso: "country_iso_example",
  // InlineObject3 (optional)
  inlineObject3: {
    additionalDescription: "additionalDescription_example",
    address1: "address1_example",
    address2: "address2_example",
    addressType: "addressType_example",
    city: "city_example",
    countryIso: "countryIso_example",
    firstName: "firstName_example",
    id: 3.14,
    identityDocument: "identityDocument_example",
    isDefault: true,
    lastName: "lastName_example",
    lat: 3.14,
    lng: 3.14,
    orderToken: "orderToken_example",
    phone: "phone_example",
    stateName: "stateName_example",
    zipcode: "zipcode_example",
  },
};

apiInstance.merchantsExternalOrdersOrderTokenShippingRatePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject3** | **InlineObject3**|  |
 **orderToken** | [**string**] |  | defaults to undefined
 **xApiKey** | [**string**] |  | (optional) defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **lat** | [**string**] |  | (optional) defaults to undefined
 **lon** | [**string**] |  | (optional) defaults to undefined
 **city** | [**string**] |  | (optional) defaults to undefined
 **countryIso** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2004**

### Authorization

[X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **merchantsOrdersOrderTokenGet**
> InlineResponse200 merchantsOrdersOrderTokenGet()

Get order by token

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExternalMerchantAPIApi(configuration);

let body:.ExternalMerchantAPIApiMerchantsOrdersOrderTokenGetRequest = {
  // string
  orderToken: "order_token_example",
  // string (optional)
  xApiKey: "X-Api-Key_example",
};

apiInstance.merchantsOrdersOrderTokenGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | [**string**] |  | defaults to undefined
 **xApiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse200**

### Authorization

[X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **merchantsOrdersOrderTokenPaymentsMethodsGet**
> InlineResponse2005 merchantsOrdersOrderTokenPaymentsMethodsGet()

Get payment methods

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExternalMerchantAPIApi(configuration);

let body:.ExternalMerchantAPIApiMerchantsOrdersOrderTokenPaymentsMethodsGetRequest = {
  // string
  orderToken: "order_token_example",
  // string (optional)
  authorization: "Authorization_example",
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // string (optional)
  xStoreCode: "X-Store-Code_example",
};

apiInstance.merchantsOrdersOrderTokenPaymentsMethodsGet(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **orderToken** | [**string**] |  | defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **xApiKey** | [**string**] |  | (optional) defaults to undefined
 **xStoreCode** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2005**

### Authorization

[X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **merchantsOrdersOrderTokenTransactionsVerifyPost**
> InlineResponse2006 merchantsOrdersOrderTokenTransactionsVerifyPost()

Verify OTP Dinners

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExternalMerchantAPIApi(configuration);

let body:.ExternalMerchantAPIApiMerchantsOrdersOrderTokenTransactionsVerifyPostRequest = {
  // string
  orderToken: "order_token_example",
  // string (optional)
  authorization: "Authorization_example",
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // string (optional)
  xMerchantID: "X-Merchant-ID_example",
  // string (optional)
  xStoreCode: "X-Store-Code_example",
  // InlineObject5 (optional)
  inlineObject5: {
    otp: "otp_example",
  },
};

apiInstance.merchantsOrdersOrderTokenTransactionsVerifyPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject5** | **InlineObject5**|  |
 **orderToken** | [**string**] |  | defaults to undefined
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **xApiKey** | [**string**] |  | (optional) defaults to undefined
 **xMerchantID** | [**string**] |  | (optional) defaults to undefined
 **xStoreCode** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2006**

### Authorization

[Authorization](README.md#Authorization), [X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **merchantsOrdersPost**
> InlineResponse200 merchantsOrdersPost()

Create order

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExternalMerchantAPIApi(configuration);

let body:.ExternalMerchantAPIApiMerchantsOrdersPostRequest = {
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // InlineObject4 (optional)
  inlineObject4: {
    order: {
      currency: "currency_example",
      discounts: [
        null,
      ],
      items: [
        null,
      ],
      itemsTotalAmount: 3.14,
      metadata: {
        key1: "key1_example",
        key2: "key2_example",
      },
      orderId: "orderId_example",
      shippingAddress: {
        additionalDescription: "additionalDescription_example",
        address1: "address1_example",
        address2: "address2_example",
        addressType: "addressType_example",
        city: "city_example",
        country: "country_example",
        createdAt: "createdAt_example",
        firstName: "firstName_example",
        id: 3.14,
        identityDocument: "identityDocument_example",
        isDefault: true,
        lastName: "lastName_example",
        lat: 3.14,
        lng: 3.14,
        phone: "phone_example",
        stateName: "stateName_example",
        updatedAt: "updatedAt_example",
        userId: "userId_example",
        zipcode: "zipcode_example",
      },
      shippingAmount: 3.14,
      shippingOptions: {
        details: {
          additionalDetails: {
            pickupTime: "pickupTime_example",
            stockLocation: "stockLocation_example",
          },
          address: "address_example",
          addressCoordinates: {
            lat: 3.14,
            lng: 3.14,
          },
          contact: {
            name: "name_example",
            phone: 3.14,
          },
          storeName: "storeName_example",
        },
        type: "type_example",
      },
      storeCode: "storeCode_example",
      subTotal: 3.14,
      taxAmount: 3.14,
      totalAmount: 3.14,
      userInstructions: "userInstructions_example",
    },
  },
};

apiInstance.merchantsOrdersPost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject4** | **InlineObject4**|  |
 **xApiKey** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse200**

### Authorization

[X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **merchantsTransactionsPurchasePost**
> InlineResponse2007 merchantsTransactionsPurchasePost()

Purchase

### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ExternalMerchantAPIApi(configuration);

let body:.ExternalMerchantAPIApiMerchantsTransactionsPurchasePostRequest = {
  // string (optional)
  authorization: "Authorization_example",
  // string (optional)
  xApiKey: "X-Api-Key_example",
  // string (optional)
  xMerchantID: "X-Merchant-ID_example",
  // string (optional)
  xStoreCode: "X-Store-Code_example",
  // string (optional)
  xDeviceId: "X-Device-Id_example",
  // string (optional)
  xSessionId: "X-Session-Id_example",
  // string (optional)
  userAgent: "User-Agent_example",
  // InlineObject6 (optional)
  inlineObject6: {
null,
    callbackUrl: "callbackUrl_example",
    creditCard: {
      address1: "address1_example",
      cardCvv: "cardCvv_example",
      cardHolder: "cardHolder_example",
      cardHolderDni: "cardHolderDni_example",
      cardNumber: "cardNumber_example",
      city: "city_example",
      country: "country_example",
      expiryMonth: "expiryMonth_example",
      expiryYear: "expiryYear_example",
      phone: "phone_example",
      state: "state_example",
      zip: "zip_example",
    },
    deviceId: "deviceId_example",
    email: "email_example",
    methodType: "methodType_example",
null,
    specificFields: {
      financialInstitution: "financialInstitution_example",
    },
    storeCode: "storeCode_example",
    token: "token_example",
  },
};

apiInstance.merchantsTransactionsPurchasePost(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject6** | **InlineObject6**|  |
 **authorization** | [**string**] |  | (optional) defaults to undefined
 **xApiKey** | [**string**] |  | (optional) defaults to undefined
 **xMerchantID** | [**string**] |  | (optional) defaults to undefined
 **xStoreCode** | [**string**] |  | (optional) defaults to undefined
 **xDeviceId** | [**string**] |  | (optional) defaults to undefined
 **xSessionId** | [**string**] |  | (optional) defaults to undefined
 **userAgent** | [**string**] |  | (optional) defaults to undefined


### Return type

**InlineResponse2007**

### Authorization

[Authorization](README.md#Authorization), [X-Api-Key](README.md#X-Api-Key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


