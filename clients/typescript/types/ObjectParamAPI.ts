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

import { ObservableExternalMerchantAPIApi } from "./ObservableAPI";
import { ExternalMerchantAPIApiRequestFactory, ExternalMerchantAPIApiResponseProcessor} from "../apis/ExternalMerchantAPIApi";

export interface ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenCouponsCouponCodeDeleteRequest {
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenCouponsCouponCodeDelete
     */
    orderToken: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenCouponsCouponCodeDelete
     */
    couponCode: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenCouponsCouponCodeDelete
     */
    xApiKey?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenCouponsCouponCodeDelete
     */
    authorization?: string
}

export interface ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenCouponsPostRequest {
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenCouponsPost
     */
    orderToken: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenCouponsPost
     */
    xApiKey?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenCouponsPost
     */
    authorization?: string
    /**
     * 
     * @type InlineObject
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenCouponsPost
     */
    inlineObject?: InlineObject
}

export interface ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenGiftCardsPostRequest {
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenGiftCardsPost
     */
    orderToken: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenGiftCardsPost
     */
    xApiKey?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenGiftCardsPost
     */
    authorization?: string
    /**
     * 
     * @type InlineObject1
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenGiftCardsPost
     */
    inlineObject1?: InlineObject1
}

export interface ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenShippingMethodsCodePatchRequest {
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingMethodsCodePatch
     */
    orderToken: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingMethodsCodePatch
     */
    code: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingMethodsCodePatch
     */
    xApiKey?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingMethodsCodePatch
     */
    authorization?: string
}

export interface ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenShippingMethodsPostRequest {
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingMethodsPost
     */
    orderToken: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingMethodsPost
     */
    xApiKey?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingMethodsPost
     */
    authorization?: string
    /**
     * 
     * @type InlineObject2
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingMethodsPost
     */
    inlineObject2?: InlineObject2
}

export interface ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenShippingRatePostRequest {
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingRatePost
     */
    orderToken: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingRatePost
     */
    xApiKey?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingRatePost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingRatePost
     */
    lat?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingRatePost
     */
    lon?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingRatePost
     */
    city?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingRatePost
     */
    countryIso?: string
    /**
     * 
     * @type InlineObject3
     * @memberof ExternalMerchantAPIApimerchantsExternalOrdersOrderTokenShippingRatePost
     */
    inlineObject3?: InlineObject3
}

export interface ExternalMerchantAPIApiMerchantsOrdersOrderTokenGetRequest {
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenGet
     */
    orderToken: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenGet
     */
    xApiKey?: string
}

export interface ExternalMerchantAPIApiMerchantsOrdersOrderTokenPaymentsMethodsGetRequest {
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenPaymentsMethodsGet
     */
    orderToken: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenPaymentsMethodsGet
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenPaymentsMethodsGet
     */
    xApiKey?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenPaymentsMethodsGet
     */
    xStoreCode?: string
}

export interface ExternalMerchantAPIApiMerchantsOrdersOrderTokenTransactionsVerifyPostRequest {
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenTransactionsVerifyPost
     */
    orderToken: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenTransactionsVerifyPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenTransactionsVerifyPost
     */
    xApiKey?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenTransactionsVerifyPost
     */
    xMerchantID?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenTransactionsVerifyPost
     */
    xStoreCode?: string
    /**
     * 
     * @type InlineObject5
     * @memberof ExternalMerchantAPIApimerchantsOrdersOrderTokenTransactionsVerifyPost
     */
    inlineObject5?: InlineObject5
}

export interface ExternalMerchantAPIApiMerchantsOrdersPostRequest {
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsOrdersPost
     */
    xApiKey?: string
    /**
     * 
     * @type InlineObject4
     * @memberof ExternalMerchantAPIApimerchantsOrdersPost
     */
    inlineObject4?: InlineObject4
}

export interface ExternalMerchantAPIApiMerchantsTransactionsPurchasePostRequest {
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsTransactionsPurchasePost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsTransactionsPurchasePost
     */
    xApiKey?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsTransactionsPurchasePost
     */
    xMerchantID?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsTransactionsPurchasePost
     */
    xStoreCode?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsTransactionsPurchasePost
     */
    xDeviceId?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsTransactionsPurchasePost
     */
    xSessionId?: string
    /**
     * 
     * @type string
     * @memberof ExternalMerchantAPIApimerchantsTransactionsPurchasePost
     */
    userAgent?: string
    /**
     * 
     * @type InlineObject6
     * @memberof ExternalMerchantAPIApimerchantsTransactionsPurchasePost
     */
    inlineObject6?: InlineObject6
}

export class ObjectExternalMerchantAPIApi {
    private api: ObservableExternalMerchantAPIApi

    public constructor(configuration: Configuration, requestFactory?: ExternalMerchantAPIApiRequestFactory, responseProcessor?: ExternalMerchantAPIApiResponseProcessor) {
        this.api = new ObservableExternalMerchantAPIApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Remove coupon
     * Remove Coupon
     * @param param the request object
     */
    public merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(param: ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenCouponsCouponCodeDeleteRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(param.orderToken, param.couponCode, param.xApiKey, param.authorization,  options).toPromise();
    }

    /**
     * Apply coupon
     * Apply Coupon
     * @param param the request object
     */
    public merchantsExternalOrdersOrderTokenCouponsPost(param: ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenCouponsPostRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.merchantsExternalOrdersOrderTokenCouponsPost(param.orderToken, param.xApiKey, param.authorization, param.inlineObject,  options).toPromise();
    }

    /**
     * Apply Gift Card
     * Apply Gift Card
     * @param param the request object
     */
    public merchantsExternalOrdersOrderTokenGiftCardsPost(param: ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenGiftCardsPostRequest, options?: Configuration): Promise<InlineResponse2001> {
        return this.api.merchantsExternalOrdersOrderTokenGiftCardsPost(param.orderToken, param.xApiKey, param.authorization, param.inlineObject1,  options).toPromise();
    }

    /**
     * Update the selected shipping method
     * Update the selected shipping method
     * @param param the request object
     */
    public merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(param: ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenShippingMethodsCodePatchRequest, options?: Configuration): Promise<InlineResponse2003> {
        return this.api.merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(param.orderToken, param.code, param.xApiKey, param.authorization,  options).toPromise();
    }

    /**
     * Get shipping methods
     * Get shipping methods
     * @param param the request object
     */
    public merchantsExternalOrdersOrderTokenShippingMethodsPost(param: ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenShippingMethodsPostRequest, options?: Configuration): Promise<InlineResponse2002> {
        return this.api.merchantsExternalOrdersOrderTokenShippingMethodsPost(param.orderToken, param.xApiKey, param.authorization, param.inlineObject2,  options).toPromise();
    }

    /**
     * Get shipping rate
     * Shipping Rate
     * @param param the request object
     */
    public merchantsExternalOrdersOrderTokenShippingRatePost(param: ExternalMerchantAPIApiMerchantsExternalOrdersOrderTokenShippingRatePostRequest, options?: Configuration): Promise<InlineResponse2004> {
        return this.api.merchantsExternalOrdersOrderTokenShippingRatePost(param.orderToken, param.xApiKey, param.authorization, param.lat, param.lon, param.city, param.countryIso, param.inlineObject3,  options).toPromise();
    }

    /**
     * Get order by token
     * Get order
     * @param param the request object
     */
    public merchantsOrdersOrderTokenGet(param: ExternalMerchantAPIApiMerchantsOrdersOrderTokenGetRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.merchantsOrdersOrderTokenGet(param.orderToken, param.xApiKey,  options).toPromise();
    }

    /**
     * Get payment methods
     * Payment Methods
     * @param param the request object
     */
    public merchantsOrdersOrderTokenPaymentsMethodsGet(param: ExternalMerchantAPIApiMerchantsOrdersOrderTokenPaymentsMethodsGetRequest, options?: Configuration): Promise<InlineResponse2005> {
        return this.api.merchantsOrdersOrderTokenPaymentsMethodsGet(param.orderToken, param.authorization, param.xApiKey, param.xStoreCode,  options).toPromise();
    }

    /**
     * Verify OTP Dinners
     * Verify OTP Dinners
     * @param param the request object
     */
    public merchantsOrdersOrderTokenTransactionsVerifyPost(param: ExternalMerchantAPIApiMerchantsOrdersOrderTokenTransactionsVerifyPostRequest, options?: Configuration): Promise<InlineResponse2006> {
        return this.api.merchantsOrdersOrderTokenTransactionsVerifyPost(param.orderToken, param.authorization, param.xApiKey, param.xMerchantID, param.xStoreCode, param.inlineObject5,  options).toPromise();
    }

    /**
     * Create order
     * Create Order
     * @param param the request object
     */
    public merchantsOrdersPost(param: ExternalMerchantAPIApiMerchantsOrdersPostRequest, options?: Configuration): Promise<InlineResponse200> {
        return this.api.merchantsOrdersPost(param.xApiKey, param.inlineObject4,  options).toPromise();
    }

    /**
     * Purchase
     * Purchase
     * @param param the request object
     */
    public merchantsTransactionsPurchasePost(param: ExternalMerchantAPIApiMerchantsTransactionsPurchasePostRequest, options?: Configuration): Promise<InlineResponse2007> {
        return this.api.merchantsTransactionsPurchasePost(param.authorization, param.xApiKey, param.xMerchantID, param.xStoreCode, param.xDeviceId, param.xSessionId, param.userAgent, param.inlineObject6,  options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiUsersLoginDeviceFingerprintPostRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiusersLoginDeviceFingerprintPost
     */
    xApiKey?: string
    /**
     * 
     * @type string
     * @memberof UsersApiusersLoginDeviceFingerprintPost
     */
    xMerchantId?: string
    /**
     * 
     * @type string
     * @memberof UsersApiusersLoginDeviceFingerprintPost
     */
    xDeviceId?: string
    /**
     * 
     * @type string
     * @memberof UsersApiusersLoginDeviceFingerprintPost
     */
    xSessionID?: string
    /**
     * 
     * @type string
     * @memberof UsersApiusersLoginDeviceFingerprintPost
     */
    authorization?: string
    /**
     * 
     * @type string
     * @memberof UsersApiusersLoginDeviceFingerprintPost
     */
    type?: string
    /**
     * 
     * @type string
     * @memberof UsersApiusersLoginDeviceFingerprintPost
     */
    loadProfileData?: string
}

export interface UsersApiUsersMeGetRequest {
    /**
     * 
     * @type string
     * @memberof UsersApiusersMeGet
     */
    xApiKey?: string
    /**
     * 
     * @type string
     * @memberof UsersApiusersMeGet
     */
    xMerchantId?: string
    /**
     * 
     * @type string
     * @memberof UsersApiusersMeGet
     */
    xDeviceId?: string
    /**
     * 
     * @type string
     * @memberof UsersApiusersMeGet
     */
    authorization?: string
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Login User
     * Login User
     * @param param the request object
     */
    public usersLoginDeviceFingerprintPost(param: UsersApiUsersLoginDeviceFingerprintPostRequest, options?: Configuration): Promise<InlineResponse2008> {
        return this.api.usersLoginDeviceFingerprintPost(param.xApiKey, param.xMerchantId, param.xDeviceId, param.xSessionID, param.authorization, param.type, param.loadProfileData,  options).toPromise();
    }

    /**
     * Get User Information
     * Get User Information
     * @param param the request object
     */
    public usersMeGet(param: UsersApiUsersMeGetRequest, options?: Configuration): Promise<InlineResponse2009> {
        return this.api.usersMeGet(param.xApiKey, param.xMerchantId, param.xDeviceId, param.authorization,  options).toPromise();
    }

}
