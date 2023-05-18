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

export class MerchantsTransactionsPurchaseSpecificFields {
    'financialInstitution': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "financialInstitution",
            "baseName": "financial_institution",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MerchantsTransactionsPurchaseSpecificFields.attributeTypeMap;
    }

    public constructor() {
    }
}

