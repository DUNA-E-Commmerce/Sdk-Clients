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
import MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates from './MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates';
import MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsContact from './MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsContact';

/**
 * The MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails model module.
 * @module model/MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails
 * @version 1.0
 */
class MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails {
    /**
     * Constructs a new <code>MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails</code>.
     * @alias module:model/MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails
     */
    constructor() { 
        
        MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails} obj Optional instance to populate.
     * @return {module:model/MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails} The populated <code>MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails();

            if (data.hasOwnProperty('additional_details')) {
                obj['additional_details'] = ApiClient.convertToType(data['additional_details'], Object);
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('address_coordinates')) {
                obj['address_coordinates'] = MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates.constructFromObject(data['address_coordinates']);
            }
            if (data.hasOwnProperty('contact')) {
                obj['contact'] = MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsContact.constructFromObject(data['contact']);
            }
            if (data.hasOwnProperty('store_name')) {
                obj['store_name'] = ApiClient.convertToType(data['store_name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // validate the optional field `address_coordinates`
        if (data['address_coordinates']) { // data not null
          MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates.validateJSON(data['address_coordinates']);
        }
        // validate the optional field `contact`
        if (data['contact']) { // data not null
          MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsContact.validateJSON(data['contact']);
        }
        // ensure the json data is a string
        if (data['store_name'] && !(typeof data['store_name'] === 'string' || data['store_name'] instanceof String)) {
            throw new Error("Expected the field `store_name` to be a primitive type in the JSON string but got " + data['store_name']);
        }

        return true;
    }


}



/**
 * @member {Object} additional_details
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails.prototype['additional_details'] = undefined;

/**
 * @member {String} address
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails.prototype['address'] = undefined;

/**
 * @member {module:model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsAddressCoordinates} address_coordinates
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails.prototype['address_coordinates'] = undefined;

/**
 * @member {module:model/MerchantsExternalOrdersOrderTokenGiftCardsPost200ResponseOrderShippingOptionsDetailsContact} contact
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails.prototype['contact'] = undefined;

/**
 * @member {String} store_name
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails.prototype['store_name'] = undefined;






export default MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingOptionsDetails;

