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
/**
 * 
 * @export
 * @interface UsersUserIdCardsGet200ResponseInnerDataTokensInner
 */
export interface UsersUserIdCardsGet200ResponseInnerDataTokensInner {
    /**
     * 
     * @type {string}
     * @memberof UsersUserIdCardsGet200ResponseInnerDataTokensInner
     */
    cardId?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUserIdCardsGet200ResponseInnerDataTokensInner
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUserIdCardsGet200ResponseInnerDataTokensInner
     */
    deletedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUserIdCardsGet200ResponseInnerDataTokensInner
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUserIdCardsGet200ResponseInnerDataTokensInner
     */
    token?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUserIdCardsGet200ResponseInnerDataTokensInner
     */
    updatedAt?: string;
    /**
     * 
     * @type {string}
     * @memberof UsersUserIdCardsGet200ResponseInnerDataTokensInner
     */
    vaultName?: string;
}

/**
 * Check if a given object implements the UsersUserIdCardsGet200ResponseInnerDataTokensInner interface.
 */
export function instanceOfUsersUserIdCardsGet200ResponseInnerDataTokensInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UsersUserIdCardsGet200ResponseInnerDataTokensInnerFromJSON(json: any): UsersUserIdCardsGet200ResponseInnerDataTokensInner {
    return UsersUserIdCardsGet200ResponseInnerDataTokensInnerFromJSONTyped(json, false);
}

export function UsersUserIdCardsGet200ResponseInnerDataTokensInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): UsersUserIdCardsGet200ResponseInnerDataTokensInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cardId': !exists(json, 'card_id') ? undefined : json['card_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : json['created_at'],
        'deletedAt': !exists(json, 'deleted_at') ? undefined : json['deleted_at'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'updatedAt': !exists(json, 'updated_at') ? undefined : json['updated_at'],
        'vaultName': !exists(json, 'vault_name') ? undefined : json['vault_name'],
    };
}

export function UsersUserIdCardsGet200ResponseInnerDataTokensInnerToJSON(value?: UsersUserIdCardsGet200ResponseInnerDataTokensInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'card_id': value.cardId,
        'created_at': value.createdAt,
        'deleted_at': value.deletedAt,
        'id': value.id,
        'token': value.token,
        'updated_at': value.updatedAt,
        'vault_name': value.vaultName,
    };
}

