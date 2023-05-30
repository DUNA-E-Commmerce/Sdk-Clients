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

import { exists, mapValues } from '../runtime';
import type { UsersMeGet200ResponseIdentityProvidersInner } from './UsersMeGet200ResponseIdentityProvidersInner';
import {
    UsersMeGet200ResponseIdentityProvidersInnerFromJSON,
    UsersMeGet200ResponseIdentityProvidersInnerFromJSONTyped,
    UsersMeGet200ResponseIdentityProvidersInnerToJSON,
} from './UsersMeGet200ResponseIdentityProvidersInner';

/**
 * 
 * @export
 * @interface UsersMeGet200Response
 */
export interface UsersMeGet200Response {
    /**
     * 
     * @type {string}
     * @memberof UsersMeGet200Response
     */
    createdAt?: string;
    /**
     * 
     * @type {any}
     * @memberof UsersMeGet200Response
     */
    deletedAt?: any | null;
    /**
     * 
     * @type {string}
     * @memberof UsersMeGet200Response
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersMeGet200Response
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersMeGet200Response
     */
    id?: string;
    /**
     * 
     * @type {Set<UsersMeGet200ResponseIdentityProvidersInner>}
     * @memberof UsersMeGet200Response
     */
    identityProviders?: Set<UsersMeGet200ResponseIdentityProvidersInner>;
    /**
     * 
     * @type {boolean}
     * @memberof UsersMeGet200Response
     */
    isGuest?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof UsersMeGet200Response
     */
    isPhoneVerified?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UsersMeGet200Response
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersMeGet200Response
     */
    merchantId?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersMeGet200Response
     */
    phone?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersMeGet200Response
     */
    updatedAt?: string;
}

/**
 * Check if a given object implements the UsersMeGet200Response interface.
 */
export function instanceOfUsersMeGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersMeGet200ResponseFromJSON(json: any): UsersMeGet200Response {
    return UsersMeGet200ResponseFromJSONTyped(json, false);
}

export function UsersMeGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersMeGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'deletedAt': !exists(json, 'deleted_at') ? undefined : json['deleted_at'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'identityProviders': !exists(json, 'identity_providers') ? undefined : (new Set((json['identity_providers'] as Array<any>).map(UsersMeGet200ResponseIdentityProvidersInnerFromJSON))),
        'isGuest': !exists(json, 'is_guest') ? undefined : json['is_guest'],
        'isPhoneVerified': !exists(json, 'is_phone_verified') ? undefined : json['is_phone_verified'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'merchantId': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
    };
}

export function UsersMeGet200ResponseToJSON(value?: UsersMeGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'created_at': value.createdAt,
        'deleted_at': value.deletedAt,
        'email': value.email,
        'first_name': value.firstName,
        'id': value.id,
        'identity_providers': value.identityProviders === undefined ? undefined : (Array.from(value.identityProviders as Set<any>).map(UsersMeGet200ResponseIdentityProvidersInnerToJSON)),
        'is_guest': value.isGuest,
        'is_phone_verified': value.isPhoneVerified,
        'last_name': value.lastName,
        'merchant_id': value.merchantId,
        'phone': value.phone,
        'updated_at': value.updatedAt,
    };
}

