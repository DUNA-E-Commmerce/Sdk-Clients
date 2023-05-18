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
 * The MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates model module.
 * @module model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates
 * @version 1.0
 */
class MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates {
    /**
     * Constructs a new <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates</code>.
     * @alias module:model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates
     */
    constructor() { 
        
        MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates} obj Optional instance to populate.
     * @return {module:model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates} The populated <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates();

            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Number} lat
 */
MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates.prototype['lat'] = undefined;

/**
 * @member {Number} lng
 */
MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates.prototype['lng'] = undefined;






export default MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates;

