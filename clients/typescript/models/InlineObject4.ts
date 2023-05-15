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

import { MerchantsOrdersOrder } from './MerchantsOrdersOrder';
import { HttpFile } from '../http/http';

export class InlineObject4 {
    'order'?: MerchantsOrdersOrder;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "order",
            "baseName": "order",
            "type": "MerchantsOrdersOrder",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineObject4.attributeTypeMap;
    }

    public constructor() {
    }
}

