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

import {InlineResponse2002OrderShippingOptionsDetails} from './InlineResponse2002OrderShippingOptionsDetails';

export class InlineResponse2003OrderShippingOptions {
    'details'?: InlineResponse2002OrderShippingOptionsDetails;
    'type'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "details",
            "baseName": "details",
            "type": "InlineResponse2002OrderShippingOptionsDetails",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2003OrderShippingOptions.attributeTypeMap;
    }

    public constructor() {
    }
}

