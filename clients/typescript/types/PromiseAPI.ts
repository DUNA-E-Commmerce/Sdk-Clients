import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { InlineObject } from '../models/InlineObject';
import { InlineObject1 } from '../models/InlineObject1';
import { InlineObject2 } from '../models/InlineObject2';
import { InlineObject3 } from '../models/InlineObject3';
import { InlineObject4 } from '../models/InlineObject4';
import { InlineObject5 } from '../models/InlineObject5';
import { InlineObject6 } from '../models/InlineObject6';
import { InlineResponse200 } from '../models/InlineResponse200';
import { InlineResponse2001 } from '../models/InlineResponse2001';
import { InlineResponse2001Order } from '../models/InlineResponse2001Order';
import { InlineResponse2001OrderMetadata } from '../models/InlineResponse2001OrderMetadata';
import { InlineResponse2001OrderShippingAddress } from '../models/InlineResponse2001OrderShippingAddress';
import { InlineResponse2001OrderShippingOptions } from '../models/InlineResponse2001OrderShippingOptions';
import { InlineResponse2001OrderShippingOptionsDetails } from '../models/InlineResponse2001OrderShippingOptionsDetails';
import { InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails } from '../models/InlineResponse2001OrderShippingOptionsDetailsAdditionalDetails';
import { InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates } from '../models/InlineResponse2001OrderShippingOptionsDetailsAddressCoordinates';
import { InlineResponse2001OrderShippingOptionsDetailsContact } from '../models/InlineResponse2001OrderShippingOptionsDetailsContact';
import { InlineResponse2002 } from '../models/InlineResponse2002';
import { InlineResponse2002Order } from '../models/InlineResponse2002Order';
import { InlineResponse2002OrderShippingAddress } from '../models/InlineResponse2002OrderShippingAddress';
import { InlineResponse2002OrderShippingOptions } from '../models/InlineResponse2002OrderShippingOptions';
import { InlineResponse2002OrderShippingOptionsDetails } from '../models/InlineResponse2002OrderShippingOptionsDetails';
import { InlineResponse2003 } from '../models/InlineResponse2003';
import { InlineResponse2003Order } from '../models/InlineResponse2003Order';
import { InlineResponse2003OrderShippingOptions } from '../models/InlineResponse2003OrderShippingOptions';
import { InlineResponse2004 } from '../models/InlineResponse2004';
import { InlineResponse2004Order } from '../models/InlineResponse2004Order';
import { InlineResponse2004OrderShippingAddress } from '../models/InlineResponse2004OrderShippingAddress';
import { InlineResponse2004ShippingOption } from '../models/InlineResponse2004ShippingOption';
import { InlineResponse2005 } from '../models/InlineResponse2005';
import { InlineResponse2006 } from '../models/InlineResponse2006';
import { InlineResponse2007 } from '../models/InlineResponse2007';
import { InlineResponse2007Order } from '../models/InlineResponse2007Order';
import { InlineResponse2007OrderPayment } from '../models/InlineResponse2007OrderPayment';
import { InlineResponse2007OrderPaymentData } from '../models/InlineResponse2007OrderPaymentData';
import { InlineResponse2007OrderPaymentDataAmount } from '../models/InlineResponse2007OrderPaymentDataAmount';
import { InlineResponse2007OrderPaymentDataCustomer } from '../models/InlineResponse2007OrderPaymentDataCustomer';
import { InlineResponse2007OrderPaymentDataFromCard } from '../models/InlineResponse2007OrderPaymentDataFromCard';
import { InlineResponse2007OrderPaymentDataMerchant } from '../models/InlineResponse2007OrderPaymentDataMerchant';
import { InlineResponse2008 } from '../models/InlineResponse2008';
import { InlineResponse2009 } from '../models/InlineResponse2009';
import { InlineResponse200Order } from '../models/InlineResponse200Order';
import { InlineResponse200OrderMetadata } from '../models/InlineResponse200OrderMetadata';
import { InlineResponse200OrderShippingAddress } from '../models/InlineResponse200OrderShippingAddress';
import { InlineResponse200OrderShippingOptions } from '../models/InlineResponse200OrderShippingOptions';
import { InlineResponse200OrderShippingOptionsDetails } from '../models/InlineResponse200OrderShippingOptionsDetails';
import { InlineResponse200OrderShippingOptionsDetailsAdditionalDetails } from '../models/InlineResponse200OrderShippingOptionsDetailsAdditionalDetails';
import { InlineResponse200OrderShippingOptionsDetailsAddressCoordinates } from '../models/InlineResponse200OrderShippingOptionsDetailsAddressCoordinates';
import { InlineResponse200OrderShippingOptionsDetailsContact } from '../models/InlineResponse200OrderShippingOptionsDetailsContact';
import { MerchantsOrdersOrder } from '../models/MerchantsOrdersOrder';
import { MerchantsOrdersOrderShippingAddress } from '../models/MerchantsOrdersOrderShippingAddress';
import { MerchantsOrdersOrderShippingOptions } from '../models/MerchantsOrdersOrderShippingOptions';
import { MerchantsOrdersOrderShippingOptionsDetails } from '../models/MerchantsOrdersOrderShippingOptionsDetails';
import { MerchantsOrdersOrderShippingOptionsDetailsContact } from '../models/MerchantsOrdersOrderShippingOptionsDetailsContact';
import { MerchantsTransactionsPurchaseCreditCard } from '../models/MerchantsTransactionsPurchaseCreditCard';
import { MerchantsTransactionsPurchaseSpecificFields } from '../models/MerchantsTransactionsPurchaseSpecificFields';
import { ObservableExternalMerchantAPIApi } from './ObservableAPI';

import { ExternalMerchantAPIApiRequestFactory, ExternalMerchantAPIApiResponseProcessor} from "../apis/ExternalMerchantAPIApi";
export class PromiseExternalMerchantAPIApi {
    private api: ObservableExternalMerchantAPIApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExternalMerchantAPIApiRequestFactory,
        responseProcessor?: ExternalMerchantAPIApiResponseProcessor
    ) {
        this.api = new ObservableExternalMerchantAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove coupon
     * Remove Coupon
     * @param orderToken 
     * @param couponCode 
     * @param xApiKey 
     * @param authorization 
     */
    public merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken: string, couponCode: string, xApiKey?: string, authorization?: string, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken, couponCode, xApiKey, authorization, _options);
        return result.toPromise();
    }

    /**
     * Apply coupon
     * Apply Coupon
     * @param orderToken 
     * @param xApiKey 
     * @param authorization 
     * @param inlineObject 
     */
    public merchantsExternalOrdersOrderTokenCouponsPost(orderToken: string, xApiKey?: string, authorization?: string, inlineObject?: InlineObject, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.merchantsExternalOrdersOrderTokenCouponsPost(orderToken, xApiKey, authorization, inlineObject, _options);
        return result.toPromise();
    }

    /**
     * Apply Gift Card
     * Apply Gift Card
     * @param orderToken 
     * @param xApiKey 
     * @param authorization 
     * @param inlineObject1 
     */
    public merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken: string, xApiKey?: string, authorization?: string, inlineObject1?: InlineObject1, _options?: Configuration): Promise<InlineResponse2001> {
        const result = this.api.merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken, xApiKey, authorization, inlineObject1, _options);
        return result.toPromise();
    }

    /**
     * Update the selected shipping method
     * Update the selected shipping method
     * @param orderToken 
     * @param code 
     * @param xApiKey 
     * @param authorization 
     */
    public merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken: string, code: string, xApiKey?: string, authorization?: string, _options?: Configuration): Promise<InlineResponse2003> {
        const result = this.api.merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken, code, xApiKey, authorization, _options);
        return result.toPromise();
    }

    /**
     * Get shipping methods
     * Get shipping methods
     * @param orderToken 
     * @param xApiKey 
     * @param authorization 
     * @param inlineObject2 
     */
    public merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken: string, xApiKey?: string, authorization?: string, inlineObject2?: InlineObject2, _options?: Configuration): Promise<InlineResponse2002> {
        const result = this.api.merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken, xApiKey, authorization, inlineObject2, _options);
        return result.toPromise();
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
    public merchantsExternalOrdersOrderTokenShippingRatePost(orderToken: string, xApiKey?: string, authorization?: string, lat?: string, lon?: string, city?: string, countryIso?: string, inlineObject3?: InlineObject3, _options?: Configuration): Promise<InlineResponse2004> {
        const result = this.api.merchantsExternalOrdersOrderTokenShippingRatePost(orderToken, xApiKey, authorization, lat, lon, city, countryIso, inlineObject3, _options);
        return result.toPromise();
    }

    /**
     * Get order by token
     * Get order
     * @param orderToken 
     * @param xApiKey 
     */
    public merchantsOrdersOrderTokenGet(orderToken: string, xApiKey?: string, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.merchantsOrdersOrderTokenGet(orderToken, xApiKey, _options);
        return result.toPromise();
    }

    /**
     * Get payment methods
     * Payment Methods
     * @param orderToken 
     * @param authorization 
     * @param xApiKey 
     * @param xStoreCode 
     */
    public merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken: string, authorization?: string, xApiKey?: string, xStoreCode?: string, _options?: Configuration): Promise<InlineResponse2005> {
        const result = this.api.merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken, authorization, xApiKey, xStoreCode, _options);
        return result.toPromise();
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
    public merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken: string, authorization?: string, xApiKey?: string, xMerchantID?: string, xStoreCode?: string, inlineObject5?: InlineObject5, _options?: Configuration): Promise<InlineResponse2006> {
        const result = this.api.merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken, authorization, xApiKey, xMerchantID, xStoreCode, inlineObject5, _options);
        return result.toPromise();
    }

    /**
     * Create order
     * Create Order
     * @param xApiKey 
     * @param inlineObject4 
     */
    public merchantsOrdersPost(xApiKey?: string, inlineObject4?: InlineObject4, _options?: Configuration): Promise<InlineResponse200> {
        const result = this.api.merchantsOrdersPost(xApiKey, inlineObject4, _options);
        return result.toPromise();
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
    public merchantsTransactionsPurchasePost(authorization?: string, xApiKey?: string, xMerchantID?: string, xStoreCode?: string, xDeviceId?: string, xSessionId?: string, userAgent?: string, inlineObject6?: InlineObject6, _options?: Configuration): Promise<InlineResponse2007> {
        const result = this.api.merchantsTransactionsPurchasePost(authorization, xApiKey, xMerchantID, xStoreCode, xDeviceId, xSessionId, userAgent, inlineObject6, _options);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Login User
     * Login User
     * @param xApiKey 
     * @param xMerchantId 
     * @param xDeviceId 
     * @param xSessionID 
     * @param authorization 
     * @param type 
     * @param loadProfileData 
     */
    public usersLoginDeviceFingerprintPost(xApiKey?: string, xMerchantId?: string, xDeviceId?: string, xSessionID?: string, authorization?: string, type?: string, loadProfileData?: string, _options?: Configuration): Promise<InlineResponse2008> {
        const result = this.api.usersLoginDeviceFingerprintPost(xApiKey, xMerchantId, xDeviceId, xSessionID, authorization, type, loadProfileData, _options);
        return result.toPromise();
    }

    /**
     * Get User Information
     * Get User Information
     * @param xApiKey 
     * @param xMerchantId 
     * @param xDeviceId 
     * @param authorization 
     */
    public usersMeGet(xApiKey?: string, xMerchantId?: string, xDeviceId?: string, authorization?: string, _options?: Configuration): Promise<InlineResponse2009> {
        const result = this.api.usersMeGet(xApiKey, xMerchantId, xDeviceId, authorization, _options);
        return result.toPromise();
    }


}



