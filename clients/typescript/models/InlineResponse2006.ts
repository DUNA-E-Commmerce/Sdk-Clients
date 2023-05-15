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

import { InlineResponse2001Order } from './InlineResponse2001Order';
import { HttpFile } from '../http/http';

export class InlineResponse2006 {
    'order'?: InlineResponse2001Order;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "order",
            "baseName": "order",
            "type": "InlineResponse2001Order",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2006.attributeTypeMap;
    }

    public constructor() {
    }
}

