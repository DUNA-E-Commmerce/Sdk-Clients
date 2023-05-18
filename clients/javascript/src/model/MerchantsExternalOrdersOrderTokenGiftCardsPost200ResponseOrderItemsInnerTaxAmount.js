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
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount model module.
 * @module model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount
 * @version 1.0
 */
class MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount {
    /**
     * Constructs a new <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount</code>.
     * @alias module:model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount
     */
    constructor() { 
        
        MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount} obj Optional instance to populate.
     * @return {module:model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount} The populated <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('currency_symbol')) {
                obj['currency_symbol'] = ApiClient.convertToType(data['currency_symbol'], 'String');
            }
            if (data.hasOwnProperty('display_amount')) {
                obj['display_amount'] = ApiClient.convertToType(data['display_amount'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['currency_symbol'] && !(typeof data['currency_symbol'] === 'string' || data['currency_symbol'] instanceof String)) {
            throw new Error("Expected the field `currency_symbol` to be a primitive type in the JSON string but got " + data['currency_symbol']);
        }
        // ensure the json data is a string
        if (data['display_amount'] && !(typeof data['display_amount'] === 'string' || data['display_amount'] instanceof String)) {
            throw new Error("Expected the field `display_amount` to be a primitive type in the JSON string but got " + data['display_amount']);
        }

        return true;
    }


}



/**
 * @member {Number} amount
 */
MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount.prototype['amount'] = undefined;

/**
 * @member {String} currency
 */
MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount.prototype['currency'] = undefined;

/**
 * @member {String} currency_symbol
 */
MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount.prototype['currency_symbol'] = undefined;

/**
 * @member {String} display_amount
 */
MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount.prototype['display_amount'] = undefined;






export default MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderItemsInnerTaxAmount;

