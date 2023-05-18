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
 * The MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount model module.
 * @module model/MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount
 * @version 1.0
 */
class MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount {
    /**
     * Constructs a new <code>MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount</code>.
     * @alias module:model/MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount
     * @param amount {Number} 
     * @param currency {String} 
     * @param currencySymbol {String} 
     */
    constructor(amount, currency, currencySymbol) { 
        
        MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount.initialize(this, amount, currency, currencySymbol);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, currency, currencySymbol) { 
        obj['amount'] = amount;
        obj['currency'] = currency;
        obj['currency_symbol'] = currencySymbol;
    }

    /**
     * Constructs a <code>MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount} obj Optional instance to populate.
     * @return {module:model/MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount} The populated <code>MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('currency_symbol')) {
                obj['currency_symbol'] = ApiClient.convertToType(data['currency_symbol'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['currency'] && !(typeof data['currency'] === 'string' || data['currency'] instanceof String)) {
            throw new Error("Expected the field `currency` to be a primitive type in the JSON string but got " + data['currency']);
        }
        // ensure the json data is a string
        if (data['currency_symbol'] && !(typeof data['currency_symbol'] === 'string' || data['currency_symbol'] instanceof String)) {
            throw new Error("Expected the field `currency_symbol` to be a primitive type in the JSON string but got " + data['currency_symbol']);
        }

        return true;
    }


}

MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount.RequiredProperties = ["amount", "currency", "currency_symbol"];

/**
 * @member {Number} amount
 */
MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount.prototype['amount'] = undefined;

/**
 * @member {String} currency
 */
MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount.prototype['currency'] = undefined;

/**
 * @member {String} currency_symbol
 */
MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount.prototype['currency_symbol'] = undefined;






export default MerchantsExternalOrdersOrderTokenShippingRatePost200ResponseOrderItemsInnerTaxAmount;

