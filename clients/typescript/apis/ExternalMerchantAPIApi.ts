// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';


import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineObject6 } from '../models/InlineObject6';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';

/**
 * no description
 */
export class ExternalMerchantAPIApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Remove coupon
     * Remove Coupon
     * @param orderToken 
     * @param couponCode 
     * @param xApiKey 
     * @param authorization 
     */
    public async merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken: string, couponCode: string, xApiKey?: string, authorization?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderToken' is not null or undefined
        if (orderToken === null || orderToken === undefined) {
            throw new RequiredError("ExternalMerchantAPIApi", "merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete", "orderToken");
        }


        // verify required parameter 'couponCode' is not null or undefined
        if (couponCode === null || couponCode === undefined) {
            throw new RequiredError("ExternalMerchantAPIApi", "merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete", "couponCode");
        }




        // Path Params
        const localVarPath = '/merchants/external-orders/{order_token}/coupons/{coupon_code}'
            .replace('{' + 'order_token' + '}', encodeURIComponent(String(orderToken)))
            .replace('{' + 'coupon_code' + '}', encodeURIComponent(String(couponCode)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Apply coupon
     * Apply Coupon
     * @param orderToken 
     * @param xApiKey 
     * @param authorization 
     * @param inlineObject 
     */
    public async merchantsExternalOrdersOrderTokenCouponsPost(orderToken: string, xApiKey?: string, authorization?: string, inlineObject?: InlineObject, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderToken' is not null or undefined
        if (orderToken === null || orderToken === undefined) {
            throw new RequiredError("ExternalMerchantAPIApi", "merchantsExternalOrdersOrderTokenCouponsPost", "orderToken");
        }





        // Path Params
        const localVarPath = '/merchants/external-orders/{order_token}/coupons'
            .replace('{' + 'order_token' + '}', encodeURIComponent(String(orderToken)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inlineObject, "InlineObject", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Apply Gift Card
     * Apply Gift Card
     * @param orderToken 
     * @param xApiKey 
     * @param authorization 
     * @param inlineObject1 
     */
    public async merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken: string, xApiKey?: string, authorization?: string, inlineObject1?: InlineObject1, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderToken' is not null or undefined
        if (orderToken === null || orderToken === undefined) {
            throw new RequiredError("ExternalMerchantAPIApi", "merchantsExternalOrdersOrderTokenGiftCardsPost", "orderToken");
        }





        // Path Params
        const localVarPath = '/merchants/external-orders/{order_token}/gift-cards'
            .replace('{' + 'order_token' + '}', encodeURIComponent(String(orderToken)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inlineObject1, "InlineObject1", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update the selected shipping method
     * Update the selected shipping method
     * @param orderToken 
     * @param code 
     * @param xApiKey 
     * @param authorization 
     */
    public async merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken: string, code: string, xApiKey?: string, authorization?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderToken' is not null or undefined
        if (orderToken === null || orderToken === undefined) {
            throw new RequiredError("ExternalMerchantAPIApi", "merchantsExternalOrdersOrderTokenShippingMethodsCodePatch", "orderToken");
        }


        // verify required parameter 'code' is not null or undefined
        if (code === null || code === undefined) {
            throw new RequiredError("ExternalMerchantAPIApi", "merchantsExternalOrdersOrderTokenShippingMethodsCodePatch", "code");
        }




        // Path Params
        const localVarPath = '/merchants/external-orders/{order_token}/shipping-methods/{code}'
            .replace('{' + 'order_token' + '}', encodeURIComponent(String(orderToken)))
            .replace('{' + 'code' + '}', encodeURIComponent(String(code)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get shipping methods
     * Get shipping methods
     * @param orderToken 
     * @param xApiKey 
     * @param authorization 
     * @param inlineObject2 
     */
    public async merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken: string, xApiKey?: string, authorization?: string, inlineObject2?: InlineObject2, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderToken' is not null or undefined
        if (orderToken === null || orderToken === undefined) {
            throw new RequiredError("ExternalMerchantAPIApi", "merchantsExternalOrdersOrderTokenShippingMethodsPost", "orderToken");
        }





        // Path Params
        const localVarPath = '/merchants/external-orders/{order_token}/shipping-methods'
            .replace('{' + 'order_token' + '}', encodeURIComponent(String(orderToken)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inlineObject2, "InlineObject2", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get shipping rate
     * Shipping Rate
     * @param orderToken 
     * @param xApiKey 
     * @param authorization 
     * @param lat 
     * @param lon 
     * @param city 
     * @param countryIso 
     * @param inlineObject3 
     */
    public async merchantsExternalOrdersOrderTokenShippingRatePost(orderToken: string, xApiKey?: string, authorization?: string, lat?: string, lon?: string, city?: string, countryIso?: string, inlineObject3?: InlineObject3, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderToken' is not null or undefined
        if (orderToken === null || orderToken === undefined) {
            throw new RequiredError("ExternalMerchantAPIApi", "merchantsExternalOrdersOrderTokenShippingRatePost", "orderToken");
        }









        // Path Params
        const localVarPath = '/merchants/external-orders/{order_token}/shipping-rate'
            .replace('{' + 'order_token' + '}', encodeURIComponent(String(orderToken)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (lat !== undefined) {
            requestContext.setQueryParam("lat", ObjectSerializer.serialize(lat, "string", ""));
        }

        // Query Params
        if (lon !== undefined) {
            requestContext.setQueryParam("lon", ObjectSerializer.serialize(lon, "string", ""));
        }

        // Query Params
        if (city !== undefined) {
            requestContext.setQueryParam("city", ObjectSerializer.serialize(city, "string", ""));
        }

        // Query Params
        if (countryIso !== undefined) {
            requestContext.setQueryParam("country_iso", ObjectSerializer.serialize(countryIso, "string", ""));
        }

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inlineObject3, "InlineObject3", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get order by token
     * Get order
     * @param orderToken 
     * @param xApiKey 
     */
    public async merchantsOrdersOrderTokenGet(orderToken: string, xApiKey?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderToken' is not null or undefined
        if (orderToken === null || orderToken === undefined) {
            throw new RequiredError("ExternalMerchantAPIApi", "merchantsOrdersOrderTokenGet", "orderToken");
        }



        // Path Params
        const localVarPath = '/merchants/orders/{order_token}'
            .replace('{' + 'order_token' + '}', encodeURIComponent(String(orderToken)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get payment methods
     * Payment Methods
     * @param orderToken 
     * @param authorization 
     * @param xApiKey 
     * @param xStoreCode 
     */
    public async merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken: string, authorization?: string, xApiKey?: string, xStoreCode?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderToken' is not null or undefined
        if (orderToken === null || orderToken === undefined) {
            throw new RequiredError("ExternalMerchantAPIApi", "merchantsOrdersOrderTokenPaymentsMethodsGet", "orderToken");
        }





        // Path Params
        const localVarPath = '/merchants/orders/{order_token}/payments-methods'
            .replace('{' + 'order_token' + '}', encodeURIComponent(String(orderToken)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Store-Code", ObjectSerializer.serialize(xStoreCode, "string", ""));


        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Verify OTP Dinners
     * Verify OTP Dinners
     * @param orderToken 
     * @param authorization 
     * @param xApiKey 
     * @param xMerchantID 
     * @param xStoreCode 
     * @param inlineObject5 
     */
    public async merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken: string, authorization?: string, xApiKey?: string, xMerchantID?: string, xStoreCode?: string, inlineObject5?: InlineObject5, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'orderToken' is not null or undefined
        if (orderToken === null || orderToken === undefined) {
            throw new RequiredError("ExternalMerchantAPIApi", "merchantsOrdersOrderTokenTransactionsVerifyPost", "orderToken");
        }







        // Path Params
        const localVarPath = '/merchants/orders/{order_token}/transactions/verify'
            .replace('{' + 'order_token' + '}', encodeURIComponent(String(orderToken)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Merchant-ID", ObjectSerializer.serialize(xMerchantID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Store-Code", ObjectSerializer.serialize(xStoreCode, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inlineObject5, "InlineObject5", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create order
     * Create Order
     * @param xApiKey 
     * @param inlineObject4 
     */
    public async merchantsOrdersPost(xApiKey?: string, inlineObject4?: InlineObject4, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/merchants/orders';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inlineObject4, "InlineObject4", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Purchase
     * Purchase
     * @param authorization 
     * @param xApiKey 
     * @param xMerchantID 
     * @param xStoreCode 
     * @param xDeviceId 
     * @param xSessionId 
     * @param userAgent 
     * @param inlineObject6 
     */
    public async merchantsTransactionsPurchasePost(authorization?: string, xApiKey?: string, xMerchantID?: string, xStoreCode?: string, xDeviceId?: string, xSessionId?: string, userAgent?: string, inlineObject6?: InlineObject6, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;









        // Path Params
        const localVarPath = '/merchants/transactions/purchase';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Header Params
        requestContext.setHeaderParam("Authorization", ObjectSerializer.serialize(authorization, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Api-Key", ObjectSerializer.serialize(xApiKey, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Merchant-ID", ObjectSerializer.serialize(xMerchantID, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Store-Code", ObjectSerializer.serialize(xStoreCode, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Device-Id", ObjectSerializer.serialize(xDeviceId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("X-Session-Id", ObjectSerializer.serialize(xSessionId, "string", ""));

        // Header Params
        requestContext.setHeaderParam("User-Agent", ObjectSerializer.serialize(userAgent, "string", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inlineObject6, "InlineObject6", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["Authorization"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        // Apply auth methods
        authMethod = _config.authMethods["X-Api-Key"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ExternalMerchantAPIApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to merchantsExternalOrdersOrderTokenCouponsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async merchantsExternalOrdersOrderTokenCouponsPost(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to merchantsExternalOrdersOrderTokenGiftCardsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async merchantsExternalOrdersOrderTokenGiftCardsPost(response: ResponseContext): Promise<InlineResponse2001 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2001 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2001", ""
            ) as InlineResponse2001;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to merchantsExternalOrdersOrderTokenShippingMethodsCodePatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(response: ResponseContext): Promise<InlineResponse2003 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2003 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2003", ""
            ) as InlineResponse2003;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to merchantsExternalOrdersOrderTokenShippingMethodsPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async merchantsExternalOrdersOrderTokenShippingMethodsPost(response: ResponseContext): Promise<InlineResponse2002 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2002 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2002", ""
            ) as InlineResponse2002;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2002 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2002", ""
            ) as InlineResponse2002;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to merchantsExternalOrdersOrderTokenShippingRatePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async merchantsExternalOrdersOrderTokenShippingRatePost(response: ResponseContext): Promise<InlineResponse2004 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2004 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2004", ""
            ) as InlineResponse2004;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2004 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2004", ""
            ) as InlineResponse2004;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to merchantsOrdersOrderTokenGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async merchantsOrdersOrderTokenGet(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to merchantsOrdersOrderTokenPaymentsMethodsGet
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async merchantsOrdersOrderTokenPaymentsMethodsGet(response: ResponseContext): Promise<InlineResponse2005 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2005 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2005", ""
            ) as InlineResponse2005;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2005 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2005", ""
            ) as InlineResponse2005;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to merchantsOrdersOrderTokenTransactionsVerifyPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async merchantsOrdersOrderTokenTransactionsVerifyPost(response: ResponseContext): Promise<InlineResponse2006 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2006 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2006", ""
            ) as InlineResponse2006;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2006 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2006", ""
            ) as InlineResponse2006;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to merchantsOrdersPost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async merchantsOrdersPost(response: ResponseContext): Promise<InlineResponse200 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse200 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse200", ""
            ) as InlineResponse200;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to merchantsTransactionsPurchasePost
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async merchantsTransactionsPurchasePost(response: ResponseContext): Promise<InlineResponse2007 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InlineResponse2007 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2007", ""
            ) as InlineResponse2007;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InlineResponse2007 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InlineResponse2007", ""
            ) as InlineResponse2007;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
