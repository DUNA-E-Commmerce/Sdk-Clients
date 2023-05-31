/* tslint:disable */
/* eslint-disable */
/**
 * API Gateway
 * API Gateway
 *
 * The version of the OpenAPI document: 1.0
 * Contact: checkout@deuna.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  PaymentsCardsUsersUserIdCardsGet200ResponseInner,
  PaymentsCardsUsersUserIdCardsGet401Response,
  PaymentsCardsUsersUserIdCardsPost200Response,
  PaymentsCardsUsersUserIdCardsPostRequest,
  UsersLoginDeviceFingerprintPost200Response,
  UsersLoginPost200Response,
  UsersLoginPostRequest,
  UsersMeGet200Response,
  UsersRegisterPost200Response,
  UsersRegisterPost401Response,
  UsersRegisterPostRequest,
  UsersRequestCodePostRequest,
} from '../models';
import {
    PaymentsCardsUsersUserIdCardsGet200ResponseInnerFromJSON,
    PaymentsCardsUsersUserIdCardsGet200ResponseInnerToJSON,
    PaymentsCardsUsersUserIdCardsGet401ResponseFromJSON,
    PaymentsCardsUsersUserIdCardsGet401ResponseToJSON,
    PaymentsCardsUsersUserIdCardsPost200ResponseFromJSON,
    PaymentsCardsUsersUserIdCardsPost200ResponseToJSON,
    PaymentsCardsUsersUserIdCardsPostRequestFromJSON,
    PaymentsCardsUsersUserIdCardsPostRequestToJSON,
    UsersLoginDeviceFingerprintPost200ResponseFromJSON,
    UsersLoginDeviceFingerprintPost200ResponseToJSON,
    UsersLoginPost200ResponseFromJSON,
    UsersLoginPost200ResponseToJSON,
    UsersLoginPostRequestFromJSON,
    UsersLoginPostRequestToJSON,
    UsersMeGet200ResponseFromJSON,
    UsersMeGet200ResponseToJSON,
    UsersRegisterPost200ResponseFromJSON,
    UsersRegisterPost200ResponseToJSON,
    UsersRegisterPost401ResponseFromJSON,
    UsersRegisterPost401ResponseToJSON,
    UsersRegisterPostRequestFromJSON,
    UsersRegisterPostRequestToJSON,
    UsersRequestCodePostRequestFromJSON,
    UsersRequestCodePostRequestToJSON,
} from '../models';

export interface PaymentsCardsUsersUserIdCardsCardIdDeleteRequest {
    userId: string;
    cardId: string;
    ?: string;
}

export interface PaymentsCardsUsersUserIdCardsCardIdGetRequest {
    userId: string;
    cardId: string;
    ?: string;
}

export interface PaymentsCardsUsersUserIdCardsGetRequest {
    userId: string;
    ?: string;
}

export interface PaymentsCardsUsersUserIdCardsPostOperationRequest {
    userId: string;
    ?: string;
    paymentsCardsUsersUserIdCardsPostRequest?: PaymentsCardsUsersUserIdCardsPostRequest;
}

export interface UsersGetRequest {
    xApiKey?: string;
    xMerchantId?: string;
    xDeviceId?: string;
    authorization?: string;
    email?: string;
}

export interface UsersLoginDeviceFingerprintPostRequest {
    xApiKey?: string;
    xMerchantId?: string;
    xDeviceId?: string;
    xSessionID?: string;
    authorization?: string;
    type?: string;
    loadProfileData?: string;
}

export interface UsersLoginPostOperationRequest {
    xApiKey?: string;
    xMerchantId?: string;
    xDeviceId?: string;
    xSessionID?: string;
    authorization?: string;
    xRecaptchaToken?: string;
    type?: string;
    loadProfileData?: string;
    usersLoginPostRequest?: UsersLoginPostRequest;
}

export interface UsersMeGetRequest {
    xApiKey?: string;
    xMerchantId?: string;
    xDeviceId?: string;
    authorization?: string;
}

export interface UsersRegisterPostOperationRequest {
    xApiKey?: string;
    xMerchantId?: string;
    usersRegisterPostRequest?: UsersRegisterPostRequest;
}

export interface UsersRequestCodePostOperationRequest {
    xApiKey?: string;
    xMerchantId?: string;
    xDeviceId?: string;
    authorization?: string;
    type?: string;
    usersRequestCodePostRequest?: UsersRequestCodePostRequest;
}

/**
 * UsersApi - interface
 * 
 * @export
 * @interface UsersApiInterface
 */
export interface UsersApiInterface {
    /**
     * Get all user cards
     * @summary Get all user cards
     * @param {string} userId 
     * @param {string} cardId 
     * @param {string} [] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    paymentsCardsUsersUserIdCardsCardIdDeleteRaw(requestParameters: PaymentsCardsUsersUserIdCardsCardIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Get all user cards
     * Get all user cards
     */
    paymentsCardsUsersUserIdCardsCardIdDelete(requestParameters: PaymentsCardsUsersUserIdCardsCardIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Obtain a card by its identifier.
     * @summary Obtain a card by its identifier.
     * @param {string} userId 
     * @param {string} cardId 
     * @param {string} [] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    paymentsCardsUsersUserIdCardsCardIdGetRaw(requestParameters: PaymentsCardsUsersUserIdCardsCardIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentsCardsUsersUserIdCardsPost200Response>>;

    /**
     * Obtain a card by its identifier.
     * Obtain a card by its identifier.
     */
    paymentsCardsUsersUserIdCardsCardIdGet(requestParameters: PaymentsCardsUsersUserIdCardsCardIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentsCardsUsersUserIdCardsPost200Response>;

    /**
     * Get all user cards
     * @summary Get all user cards
     * @param {string} userId 
     * @param {string} [] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    paymentsCardsUsersUserIdCardsGetRaw(requestParameters: PaymentsCardsUsersUserIdCardsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PaymentsCardsUsersUserIdCardsGet200ResponseInner>>>;

    /**
     * Get all user cards
     * Get all user cards
     */
    paymentsCardsUsersUserIdCardsGet(requestParameters: PaymentsCardsUsersUserIdCardsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PaymentsCardsUsersUserIdCardsGet200ResponseInner>>;

    /**
     * Get all user cards
     * @summary Get all user cards
     * @param {string} userId 
     * @param {string} [] 
     * @param {PaymentsCardsUsersUserIdCardsPostRequest} [paymentsCardsUsersUserIdCardsPostRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    paymentsCardsUsersUserIdCardsPostRaw(requestParameters: PaymentsCardsUsersUserIdCardsPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentsCardsUsersUserIdCardsPost200Response>>;

    /**
     * Get all user cards
     * Get all user cards
     */
    paymentsCardsUsersUserIdCardsPost(requestParameters: PaymentsCardsUsersUserIdCardsPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentsCardsUsersUserIdCardsPost200Response>;

    /**
     * Get If User Exists
     * @summary Get If User Exists
     * @param {string} [xApiKey] 
     * @param {string} [xMerchantId] 
     * @param {string} [xDeviceId] 
     * @param {string} [authorization] 
     * @param {string} [email] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    usersGetRaw(requestParameters: UsersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Get If User Exists
     * Get If User Exists
     */
    usersGet(requestParameters: UsersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * Login User
     * @summary Login User
     * @param {string} [xApiKey] 
     * @param {string} [xMerchantId] 
     * @param {string} [xDeviceId] 
     * @param {string} [xSessionID] 
     * @param {string} [authorization] 
     * @param {string} [type] 
     * @param {string} [loadProfileData] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    usersLoginDeviceFingerprintPostRaw(requestParameters: UsersLoginDeviceFingerprintPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersLoginDeviceFingerprintPost200Response>>;

    /**
     * Login User
     * Login User
     */
    usersLoginDeviceFingerprintPost(requestParameters: UsersLoginDeviceFingerprintPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersLoginDeviceFingerprintPost200Response>;

    /**
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     * @summary Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     * @param {string} [xApiKey] 
     * @param {string} [xMerchantId] 
     * @param {string} [xDeviceId] 
     * @param {string} [xSessionID] 
     * @param {string} [authorization] 
     * @param {string} [xRecaptchaToken] 
     * @param {string} [type] 
     * @param {string} [loadProfileData] 
     * @param {UsersLoginPostRequest} [usersLoginPostRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    usersLoginPostRaw(requestParameters: UsersLoginPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersLoginPost200Response>>;

    /**
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     */
    usersLoginPost(requestParameters: UsersLoginPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersLoginPost200Response>;

    /**
     * Get User Information
     * @summary Get User Information
     * @param {string} [xApiKey] 
     * @param {string} [xMerchantId] 
     * @param {string} [xDeviceId] 
     * @param {string} [authorization] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    usersMeGetRaw(requestParameters: UsersMeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersMeGet200Response>>;

    /**
     * Get User Information
     * Get User Information
     */
    usersMeGet(requestParameters: UsersMeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersMeGet200Response>;

    /**
     * Register a user of your business, this user once registered will belong to the DEUNA Network.
     * @summary Register User
     * @param {string} [xApiKey] 
     * @param {string} [xMerchantId] 
     * @param {UsersRegisterPostRequest} [usersRegisterPostRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    usersRegisterPostRaw(requestParameters: UsersRegisterPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersRegisterPost200Response>>;

    /**
     * Register a user of your business, this user once registered will belong to the DEUNA Network.
     * Register User
     */
    usersRegisterPost(requestParameters: UsersRegisterPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersRegisterPost200Response>;

    /**
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     * @summary Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     * @param {string} [xApiKey] 
     * @param {string} [xMerchantId] 
     * @param {string} [xDeviceId] 
     * @param {string} [authorization] 
     * @param {string} [type] 
     * @param {UsersRequestCodePostRequest} [usersRequestCodePostRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApiInterface
     */
    usersRequestCodePostRaw(requestParameters: UsersRequestCodePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     */
    usersRequestCodePost(requestParameters: UsersRequestCodePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class UsersApi extends runtime.BaseAPI implements UsersApiInterface {

    /**
     * Get all user cards
     * Get all user cards
     */
    async paymentsCardsUsersUserIdCardsCardIdDeleteRaw(requestParameters: PaymentsCardsUsersUserIdCardsCardIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling paymentsCardsUsersUserIdCardsCardIdDelete.');
        }

        if (requestParameters.cardId === null || requestParameters.cardId === undefined) {
            throw new runtime.RequiredError('cardId','Required parameter requestParameters.cardId was null or undefined when calling paymentsCardsUsersUserIdCardsCardIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters. !== undefined && requestParameters. !== null) {
            headerParameters['*'] = String(requestParameters.);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Api-Key"] = this.configuration.apiKey("X-Api-Key"); // X-Api-Key authentication
        }

        const response = await this.request({
            path: `/payments-cards/users/{user_id}/cards/{card_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters.cardId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get all user cards
     * Get all user cards
     */
    async paymentsCardsUsersUserIdCardsCardIdDelete(requestParameters: PaymentsCardsUsersUserIdCardsCardIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.paymentsCardsUsersUserIdCardsCardIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Obtain a card by its identifier.
     * Obtain a card by its identifier.
     */
    async paymentsCardsUsersUserIdCardsCardIdGetRaw(requestParameters: PaymentsCardsUsersUserIdCardsCardIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentsCardsUsersUserIdCardsPost200Response>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling paymentsCardsUsersUserIdCardsCardIdGet.');
        }

        if (requestParameters.cardId === null || requestParameters.cardId === undefined) {
            throw new runtime.RequiredError('cardId','Required parameter requestParameters.cardId was null or undefined when calling paymentsCardsUsersUserIdCardsCardIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters. !== undefined && requestParameters. !== null) {
            headerParameters['*'] = String(requestParameters.);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Api-Key"] = this.configuration.apiKey("X-Api-Key"); // X-Api-Key authentication
        }

        const response = await this.request({
            path: `/payments-cards/users/{user_id}/cards/{card_id}`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))).replace(`{${"card_id"}}`, encodeURIComponent(String(requestParameters.cardId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentsCardsUsersUserIdCardsPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Obtain a card by its identifier.
     * Obtain a card by its identifier.
     */
    async paymentsCardsUsersUserIdCardsCardIdGet(requestParameters: PaymentsCardsUsersUserIdCardsCardIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentsCardsUsersUserIdCardsPost200Response> {
        const response = await this.paymentsCardsUsersUserIdCardsCardIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all user cards
     * Get all user cards
     */
    async paymentsCardsUsersUserIdCardsGetRaw(requestParameters: PaymentsCardsUsersUserIdCardsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<PaymentsCardsUsersUserIdCardsGet200ResponseInner>>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling paymentsCardsUsersUserIdCardsGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters. !== undefined && requestParameters. !== null) {
            headerParameters['*'] = String(requestParameters.);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Api-Key"] = this.configuration.apiKey("X-Api-Key"); // X-Api-Key authentication
        }

        const response = await this.request({
            path: `/payments-cards/users/{user_id}/cards`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PaymentsCardsUsersUserIdCardsGet200ResponseInnerFromJSON));
    }

    /**
     * Get all user cards
     * Get all user cards
     */
    async paymentsCardsUsersUserIdCardsGet(requestParameters: PaymentsCardsUsersUserIdCardsGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<PaymentsCardsUsersUserIdCardsGet200ResponseInner>> {
        const response = await this.paymentsCardsUsersUserIdCardsGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all user cards
     * Get all user cards
     */
    async paymentsCardsUsersUserIdCardsPostRaw(requestParameters: PaymentsCardsUsersUserIdCardsPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaymentsCardsUsersUserIdCardsPost200Response>> {
        if (requestParameters.userId === null || requestParameters.userId === undefined) {
            throw new runtime.RequiredError('userId','Required parameter requestParameters.userId was null or undefined when calling paymentsCardsUsersUserIdCardsPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters. !== undefined && requestParameters. !== null) {
            headerParameters['*'] = String(requestParameters.);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Api-Key"] = this.configuration.apiKey("X-Api-Key"); // X-Api-Key authentication
        }

        const response = await this.request({
            path: `/payments-cards/users/{user_id}/cards`.replace(`{${"user_id"}}`, encodeURIComponent(String(requestParameters.userId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PaymentsCardsUsersUserIdCardsPostRequestToJSON(requestParameters.paymentsCardsUsersUserIdCardsPostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaymentsCardsUsersUserIdCardsPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Get all user cards
     * Get all user cards
     */
    async paymentsCardsUsersUserIdCardsPost(requestParameters: PaymentsCardsUsersUserIdCardsPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaymentsCardsUsersUserIdCardsPost200Response> {
        const response = await this.paymentsCardsUsersUserIdCardsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get If User Exists
     * Get If User Exists
     */
    async usersGetRaw(requestParameters: UsersGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.email !== undefined) {
            queryParameters['email'] = requestParameters.email;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['X-Api-Key'] = String(requestParameters.xApiKey);
        }

        if (requestParameters.xMerchantId !== undefined && requestParameters.xMerchantId !== null) {
            headerParameters['X-Merchant-Id'] = String(requestParameters.xMerchantId);
        }

        if (requestParameters.xDeviceId !== undefined && requestParameters.xDeviceId !== null) {
            headerParameters['X-Device-Id'] = String(requestParameters.xDeviceId);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Api-Key"] = this.configuration.apiKey("X-Api-Key"); // X-Api-Key authentication
        }

        const response = await this.request({
            path: `/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get If User Exists
     * Get If User Exists
     */
    async usersGet(requestParameters: UsersGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.usersGetRaw(requestParameters, initOverrides);
    }

    /**
     * Login User
     * Login User
     */
    async usersLoginDeviceFingerprintPostRaw(requestParameters: UsersLoginDeviceFingerprintPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersLoginDeviceFingerprintPost200Response>> {
        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.loadProfileData !== undefined) {
            queryParameters['load_profile_data'] = requestParameters.loadProfileData;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['X-Api-Key'] = String(requestParameters.xApiKey);
        }

        if (requestParameters.xMerchantId !== undefined && requestParameters.xMerchantId !== null) {
            headerParameters['X-Merchant-Id'] = String(requestParameters.xMerchantId);
        }

        if (requestParameters.xDeviceId !== undefined && requestParameters.xDeviceId !== null) {
            headerParameters['X-Device-Id'] = String(requestParameters.xDeviceId);
        }

        if (requestParameters.xSessionID !== undefined && requestParameters.xSessionID !== null) {
            headerParameters['X-Session-ID'] = String(requestParameters.xSessionID);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Authorization", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Api-Key"] = this.configuration.apiKey("X-Api-Key"); // X-Api-Key authentication
        }

        const response = await this.request({
            path: `/users/login/device-fingerprint`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersLoginDeviceFingerprintPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Login User
     * Login User
     */
    async usersLoginDeviceFingerprintPost(requestParameters: UsersLoginDeviceFingerprintPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersLoginDeviceFingerprintPost200Response> {
        const response = await this.usersLoginDeviceFingerprintPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     */
    async usersLoginPostRaw(requestParameters: UsersLoginPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersLoginPost200Response>> {
        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.loadProfileData !== undefined) {
            queryParameters['load_profile_data'] = requestParameters.loadProfileData;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['X-Api-Key'] = String(requestParameters.xApiKey);
        }

        if (requestParameters.xMerchantId !== undefined && requestParameters.xMerchantId !== null) {
            headerParameters['X-Merchant-Id'] = String(requestParameters.xMerchantId);
        }

        if (requestParameters.xDeviceId !== undefined && requestParameters.xDeviceId !== null) {
            headerParameters['X-Device-Id'] = String(requestParameters.xDeviceId);
        }

        if (requestParameters.xSessionID !== undefined && requestParameters.xSessionID !== null) {
            headerParameters['X-Session-ID'] = String(requestParameters.xSessionID);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (requestParameters.xRecaptchaToken !== undefined && requestParameters.xRecaptchaToken !== null) {
            headerParameters['X-Recaptcha-Token'] = String(requestParameters.xRecaptchaToken);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Authorization", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Api-Key"] = this.configuration.apiKey("X-Api-Key"); // X-Api-Key authentication
        }

        const response = await this.request({
            path: `/users/login`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UsersLoginPostRequestToJSON(requestParameters.usersLoginPostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersLoginPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     */
    async usersLoginPost(requestParameters: UsersLoginPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersLoginPost200Response> {
        const response = await this.usersLoginPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get User Information
     * Get User Information
     */
    async usersMeGetRaw(requestParameters: UsersMeGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersMeGet200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['X-Api-Key'] = String(requestParameters.xApiKey);
        }

        if (requestParameters.xMerchantId !== undefined && requestParameters.xMerchantId !== null) {
            headerParameters['X-Merchant-Id'] = String(requestParameters.xMerchantId);
        }

        if (requestParameters.xDeviceId !== undefined && requestParameters.xDeviceId !== null) {
            headerParameters['X-Device-Id'] = String(requestParameters.xDeviceId);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Authorization", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Api-Key"] = this.configuration.apiKey("X-Api-Key"); // X-Api-Key authentication
        }

        const response = await this.request({
            path: `/users/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersMeGet200ResponseFromJSON(jsonValue));
    }

    /**
     * Get User Information
     * Get User Information
     */
    async usersMeGet(requestParameters: UsersMeGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersMeGet200Response> {
        const response = await this.usersMeGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Register a user of your business, this user once registered will belong to the DEUNA Network.
     * Register User
     */
    async usersRegisterPostRaw(requestParameters: UsersRegisterPostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UsersRegisterPost200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['X-Api-Key'] = String(requestParameters.xApiKey);
        }

        if (requestParameters.xMerchantId !== undefined && requestParameters.xMerchantId !== null) {
            headerParameters['X-Merchant-Id'] = String(requestParameters.xMerchantId);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Authorization", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Api-Key"] = this.configuration.apiKey("X-Api-Key"); // X-Api-Key authentication
        }

        const response = await this.request({
            path: `/users/register`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UsersRegisterPostRequestToJSON(requestParameters.usersRegisterPostRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UsersRegisterPost200ResponseFromJSON(jsonValue));
    }

    /**
     * Register a user of your business, this user once registered will belong to the DEUNA Network.
     * Register User
     */
    async usersRegisterPost(requestParameters: UsersRegisterPostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UsersRegisterPost200Response> {
        const response = await this.usersRegisterPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     */
    async usersRequestCodePostRaw(requestParameters: UsersRequestCodePostOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (requestParameters.xApiKey !== undefined && requestParameters.xApiKey !== null) {
            headerParameters['X-Api-Key'] = String(requestParameters.xApiKey);
        }

        if (requestParameters.xMerchantId !== undefined && requestParameters.xMerchantId !== null) {
            headerParameters['X-Merchant-Id'] = String(requestParameters.xMerchantId);
        }

        if (requestParameters.xDeviceId !== undefined && requestParameters.xDeviceId !== null) {
            headerParameters['X-Device-Id'] = String(requestParameters.xDeviceId);
        }

        if (requestParameters.authorization !== undefined && requestParameters.authorization !== null) {
            headerParameters['Authorization'] = String(requestParameters.authorization);
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("Authorization", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["X-Api-Key"] = this.configuration.apiKey("X-Api-Key"); // X-Api-Key authentication
        }

        const response = await this.request({
            path: `/users/request-code`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UsersRequestCodePostRequestToJSON(requestParameters.usersRequestCodePostRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     * Allows logging in with the OTP code sent to the user\'s email or phone. This must be specified in the query param.
     */
    async usersRequestCodePost(requestParameters: UsersRequestCodePostOperationRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.usersRequestCodePostRaw(requestParameters, initOverrides);
    }

}
