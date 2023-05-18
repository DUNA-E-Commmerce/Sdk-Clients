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

import { InlineResponse2001OrderMetadata } from './InlineResponse2001OrderMetadata';
import { InlineResponse2001OrderShippingAddress } from './InlineResponse2001OrderShippingAddress';
import { InlineResponse2001OrderShippingOptions } from './InlineResponse2001OrderShippingOptions';
import { Set } from './Set';
import { HttpFile } from '../http/http';

export class InlineResponse2001Order {
    'currency'?: string;
    'discounts'?: Set<any>;
    'displayItemsTotalAmount'?: string;
    'displayShippingAmount'?: string;
    'displaySubTotal'?: string;
    'displayTaxAmount'?: string;
    'displayTotalAmount'?: string;
    'giftCard'?: Set<any>;
    'items'?: Set<any>;
    'itemsTotalAmount'?: number;
    'metadata'?: InlineResponse2001OrderMetadata;
    'orderId'?: string;
    'payment'?: any;
    'shippingAddress'?: InlineResponse2001OrderShippingAddress;
    'shippingAmount'?: number;
    'shippingOptions'?: InlineResponse2001OrderShippingOptions;
    'status'?: string;
    'storeCode'?: string;
    'subTotal'?: number;
    'taxAmount'?: number;
    'totalAmount'?: number;
    'userInstructions'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "currency",
            "baseName": "currency",
            "type": "string",
            "format": ""
        },
        {
            "name": "discounts",
            "baseName": "discounts",
            "type": "Set<any>",
            "format": ""
        },
        {
            "name": "displayItemsTotalAmount",
            "baseName": "display_items_total_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayShippingAmount",
            "baseName": "display_shipping_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "displaySubTotal",
            "baseName": "display_sub_total",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayTaxAmount",
            "baseName": "display_tax_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayTotalAmount",
            "baseName": "display_total_amount",
            "type": "string",
            "format": ""
        },
        {
            "name": "giftCard",
            "baseName": "gift_card",
            "type": "Set<any>",
            "format": ""
        },
        {
            "name": "items",
            "baseName": "items",
            "type": "Set<any>",
            "format": ""
        },
        {
            "name": "itemsTotalAmount",
            "baseName": "items_total_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "InlineResponse2001OrderMetadata",
            "format": ""
        },
        {
            "name": "orderId",
            "baseName": "order_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "payment",
            "baseName": "payment",
            "type": "any",
            "format": ""
        },
        {
            "name": "shippingAddress",
            "baseName": "shipping_address",
            "type": "InlineResponse2001OrderShippingAddress",
            "format": ""
        },
        {
            "name": "shippingAmount",
            "baseName": "shipping_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "shippingOptions",
            "baseName": "shipping_options",
            "type": "InlineResponse2001OrderShippingOptions",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "storeCode",
            "baseName": "store_code",
            "type": "string",
            "format": ""
        },
        {
            "name": "subTotal",
            "baseName": "sub_total",
            "type": "number",
            "format": ""
        },
        {
            "name": "taxAmount",
            "baseName": "tax_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "totalAmount",
            "baseName": "total_amount",
            "type": "number",
            "format": ""
        },
        {
            "name": "userInstructions",
            "baseName": "user_instructions",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return InlineResponse2001Order.attributeTypeMap;
    }

    public constructor() {
    }
}

