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
 * The MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata model module.
 * @module model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata
 * @version 1.0
 */
class MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata {
    /**
     * Constructs a new <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata</code>.
     * @alias module:model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata
     */
    constructor() { 
        
        MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata} obj Optional instance to populate.
     * @return {module:model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata} The populated <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata();

            if (data.hasOwnProperty('key1')) {
                obj['key1'] = ApiClient.convertToType(data['key1'], 'String');
            }
            if (data.hasOwnProperty('key2')) {
                obj['key2'] = ApiClient.convertToType(data['key2'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key1'] && !(typeof data['key1'] === 'string' || data['key1'] instanceof String)) {
            throw new Error("Expected the field `key1` to be a primitive type in the JSON string but got " + data['key1']);
        }
        // ensure the json data is a string
        if (data['key2'] && !(typeof data['key2'] === 'string' || data['key2'] instanceof String)) {
            throw new Error("Expected the field `key2` to be a primitive type in the JSON string but got " + data['key2']);
        }

        return true;
    }


}



/**
 * @member {String} key1
 */
MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata.prototype['key1'] = undefined;

/**
 * @member {String} key2
 */
MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata.prototype['key2'] = undefined;






export default MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderMetadata;

