import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { ExternalMerchantAPIApiRequestFactory, ExternalMerchantAPIApiResponseProcessor} from "../apis/ExternalMerchantAPIApi";
export class ObservableExternalMerchantAPIApi {
    private requestFactory: ExternalMerchantAPIApiRequestFactory;
    private responseProcessor: ExternalMerchantAPIApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ExternalMerchantAPIApiRequestFactory,
        responseProcessor?: ExternalMerchantAPIApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ExternalMerchantAPIApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ExternalMerchantAPIApiResponseProcessor();
    }

    /**
     * Remove coupon
     * Remove Coupon
     * @param orderToken 
     * @param couponCode 
     * @param xApiKey 
     * @param authorization 
     */
    public merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken: string, couponCode: string, xApiKey?: string, authorization?: string, _options?: Configuration): Observable<InlineResponse200> {
        const requestContextPromise = this.requestFactory.merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(orderToken, couponCode, xApiKey, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merchantsExternalOrdersOrderTokenCouponsCouponCodeDelete(rsp)));
            }));
    }

    /**
     * Apply coupon
     * Apply Coupon
     * @param orderToken 
     * @param xApiKey 
     * @param authorization 
     * @param inlineObject 
     */
    public merchantsExternalOrdersOrderTokenCouponsPost(orderToken: string, xApiKey?: string, authorization?: string, inlineObject?: InlineObject, _options?: Configuration): Observable<InlineResponse200> {
        const requestContextPromise = this.requestFactory.merchantsExternalOrdersOrderTokenCouponsPost(orderToken, xApiKey, authorization, inlineObject, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merchantsExternalOrdersOrderTokenCouponsPost(rsp)));
            }));
    }

    /**
     * Apply Gift Card
     * Apply Gift Card
     * @param orderToken 
     * @param xApiKey 
     * @param authorization 
     * @param inlineObject1 
     */
    public merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken: string, xApiKey?: string, authorization?: string, inlineObject1?: InlineObject1, _options?: Configuration): Observable<InlineResponse2001> {
        const requestContextPromise = this.requestFactory.merchantsExternalOrdersOrderTokenGiftCardsPost(orderToken, xApiKey, authorization, inlineObject1, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merchantsExternalOrdersOrderTokenGiftCardsPost(rsp)));
            }));
    }

    /**
     * Update the selected shipping method
     * Update the selected shipping method
     * @param orderToken 
     * @param code 
     * @param xApiKey 
     * @param authorization 
     */
    public merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken: string, code: string, xApiKey?: string, authorization?: string, _options?: Configuration): Observable<InlineResponse2003> {
        const requestContextPromise = this.requestFactory.merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(orderToken, code, xApiKey, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merchantsExternalOrdersOrderTokenShippingMethodsCodePatch(rsp)));
            }));
    }

    /**
     * Get shipping methods
     * Get shipping methods
     * @param orderToken 
     * @param xApiKey 
     * @param authorization 
     * @param inlineObject2 
     */
    public merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken: string, xApiKey?: string, authorization?: string, inlineObject2?: InlineObject2, _options?: Configuration): Observable<InlineResponse2002> {
        const requestContextPromise = this.requestFactory.merchantsExternalOrdersOrderTokenShippingMethodsPost(orderToken, xApiKey, authorization, inlineObject2, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merchantsExternalOrdersOrderTokenShippingMethodsPost(rsp)));
            }));
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
    public merchantsExternalOrdersOrderTokenShippingRatePost(orderToken: string, xApiKey?: string, authorization?: string, lat?: string, lon?: string, city?: string, countryIso?: string, inlineObject3?: InlineObject3, _options?: Configuration): Observable<InlineResponse2004> {
        const requestContextPromise = this.requestFactory.merchantsExternalOrdersOrderTokenShippingRatePost(orderToken, xApiKey, authorization, lat, lon, city, countryIso, inlineObject3, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merchantsExternalOrdersOrderTokenShippingRatePost(rsp)));
            }));
    }

    /**
     * Get order by token
     * Get order
     * @param orderToken 
     * @param xApiKey 
     */
    public merchantsOrdersOrderTokenGet(orderToken: string, xApiKey?: string, _options?: Configuration): Observable<InlineResponse200> {
        const requestContextPromise = this.requestFactory.merchantsOrdersOrderTokenGet(orderToken, xApiKey, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merchantsOrdersOrderTokenGet(rsp)));
            }));
    }

    /**
     * Get payment methods
     * Payment Methods
     * @param orderToken 
     * @param authorization 
     * @param xApiKey 
     * @param xStoreCode 
     */
    public merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken: string, authorization?: string, xApiKey?: string, xStoreCode?: string, _options?: Configuration): Observable<InlineResponse2005> {
        const requestContextPromise = this.requestFactory.merchantsOrdersOrderTokenPaymentsMethodsGet(orderToken, authorization, xApiKey, xStoreCode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merchantsOrdersOrderTokenPaymentsMethodsGet(rsp)));
            }));
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
    public merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken: string, authorization?: string, xApiKey?: string, xMerchantID?: string, xStoreCode?: string, inlineObject5?: InlineObject5, _options?: Configuration): Observable<InlineResponse2006> {
        const requestContextPromise = this.requestFactory.merchantsOrdersOrderTokenTransactionsVerifyPost(orderToken, authorization, xApiKey, xMerchantID, xStoreCode, inlineObject5, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merchantsOrdersOrderTokenTransactionsVerifyPost(rsp)));
            }));
    }

    /**
     * Create order
     * Create Order
     * @param xApiKey 
     * @param inlineObject4 
     */
    public merchantsOrdersPost(xApiKey?: string, inlineObject4?: InlineObject4, _options?: Configuration): Observable<InlineResponse200> {
        const requestContextPromise = this.requestFactory.merchantsOrdersPost(xApiKey, inlineObject4, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merchantsOrdersPost(rsp)));
            }));
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
    public merchantsTransactionsPurchasePost(authorization?: string, xApiKey?: string, xMerchantID?: string, xStoreCode?: string, xDeviceId?: string, xSessionId?: string, userAgent?: string, inlineObject6?: InlineObject6, _options?: Configuration): Observable<InlineResponse2007> {
        const requestContextPromise = this.requestFactory.merchantsTransactionsPurchasePost(authorization, xApiKey, xMerchantID, xStoreCode, xDeviceId, xSessionId, userAgent, inlineObject6, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merchantsTransactionsPurchasePost(rsp)));
            }));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
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
    public usersLoginDeviceFingerprintPost(xApiKey?: string, xMerchantId?: string, xDeviceId?: string, xSessionID?: string, authorization?: string, type?: string, loadProfileData?: string, _options?: Configuration): Observable<InlineResponse2008> {
        const requestContextPromise = this.requestFactory.usersLoginDeviceFingerprintPost(xApiKey, xMerchantId, xDeviceId, xSessionID, authorization, type, loadProfileData, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersLoginDeviceFingerprintPost(rsp)));
            }));
    }

    /**
     * Get User Information
     * Get User Information
     * @param xApiKey 
     * @param xMerchantId 
     * @param xDeviceId 
     * @param authorization 
     */
    public usersMeGet(xApiKey?: string, xMerchantId?: string, xDeviceId?: string, authorization?: string, _options?: Configuration): Observable<InlineResponse2009> {
        const requestContextPromise = this.requestFactory.usersMeGet(xApiKey, xMerchantId, xDeviceId, authorization, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.usersMeGet(rsp)));
            }));
    }

}
