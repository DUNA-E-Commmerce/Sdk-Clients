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
import type { MerchantsMerchantIdApplicationsGet200ResponseDataInner } from './MerchantsMerchantIdApplicationsGet200ResponseDataInner';
import {
    MerchantsMerchantIdApplicationsGet200ResponseDataInnerFromJSON,
    MerchantsMerchantIdApplicationsGet200ResponseDataInnerFromJSONTyped,
    MerchantsMerchantIdApplicationsGet200ResponseDataInnerToJSON,
} from './MerchantsMerchantIdApplicationsGet200ResponseDataInner';

/**
 * 
 * @export
 * @interface MerchantsMerchantIdApplicationsGet200Response
 */
export interface MerchantsMerchantIdApplicationsGet200Response {
    /**
     * 
     * @type {Set<MerchantsMerchantIdApplicationsGet200ResponseDataInner>}
     * @memberof MerchantsMerchantIdApplicationsGet200Response
     */
    data?: Set<MerchantsMerchantIdApplicationsGet200ResponseDataInner>;
}

/**
 * Check if a given object implements the MerchantsMerchantIdApplicationsGet200Response interface.
 */
export function instanceOfMerchantsMerchantIdApplicationsGet200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MerchantsMerchantIdApplicationsGet200ResponseFromJSON(json: any): MerchantsMerchantIdApplicationsGet200Response {
    return MerchantsMerchantIdApplicationsGet200ResponseFromJSONTyped(json, false);
}

export function MerchantsMerchantIdApplicationsGet200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): MerchantsMerchantIdApplicationsGet200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : (new Set((json['data'] as Array<any>).map(MerchantsMerchantIdApplicationsGet200ResponseDataInnerFromJSON))),
    };
}

export function MerchantsMerchantIdApplicationsGet200ResponseToJSON(value?: MerchantsMerchantIdApplicationsGet200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : (Array.from(value.data as Set<any>).map(MerchantsMerchantIdApplicationsGet200ResponseDataInnerToJSON)),
    };
}

