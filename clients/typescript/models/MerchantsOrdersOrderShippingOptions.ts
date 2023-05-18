/**
 * API Gateway
 * API Gateway
 *
 * OpenAPI spec version: 1.0
 * Contact: checkout@deuna.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MerchantsOrdersOrderShippingOptionsDetails } from './MerchantsOrdersOrderShippingOptionsDetails';
import { HttpFile } from '../http/http';

export class MerchantsOrdersOrderShippingOptions {
    'details': MerchantsOrdersOrderShippingOptionsDetails;
    'type': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "details",
            "baseName": "details",
            "type": "MerchantsOrdersOrderShippingOptionsDetails",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MerchantsOrdersOrderShippingOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

