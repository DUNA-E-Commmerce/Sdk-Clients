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
 * The MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress model module.
 * @module model/MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress
 * @version 1.0
 */
class MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress {
    /**
     * Constructs a new <code>MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress</code>.
     * @alias module:model/MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress
     */
    constructor() { 
        
        MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress} obj Optional instance to populate.
     * @return {module:model/MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress} The populated <code>MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress();

            if (data.hasOwnProperty('additional_description')) {
                obj['additional_description'] = ApiClient.convertToType(data['additional_description'], 'String');
            }
            if (data.hasOwnProperty('address1')) {
                obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
            }
            if (data.hasOwnProperty('address2')) {
                obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
            }
            if (data.hasOwnProperty('address_type')) {
                obj['address_type'] = ApiClient.convertToType(data['address_type'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('country_code')) {
                obj['country_code'] = ApiClient.convertToType(data['country_code'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'String');
            }
            if (data.hasOwnProperty('first_name')) {
                obj['first_name'] = ApiClient.convertToType(data['first_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('identity_document')) {
                obj['identity_document'] = ApiClient.convertToType(data['identity_document'], 'String');
            }
            if (data.hasOwnProperty('is_default')) {
                obj['is_default'] = ApiClient.convertToType(data['is_default'], 'Boolean');
            }
            if (data.hasOwnProperty('last_name')) {
                obj['last_name'] = ApiClient.convertToType(data['last_name'], 'String');
            }
            if (data.hasOwnProperty('lat')) {
                obj['lat'] = ApiClient.convertToType(data['lat'], 'Number');
            }
            if (data.hasOwnProperty('lng')) {
                obj['lng'] = ApiClient.convertToType(data['lng'], 'Number');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('state_name')) {
                obj['state_name'] = ApiClient.convertToType(data['state_name'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'String');
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
            }
            if (data.hasOwnProperty('zipcode')) {
                obj['zipcode'] = ApiClient.convertToType(data['zipcode'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['additional_description'] && !(typeof data['additional_description'] === 'string' || data['additional_description'] instanceof String)) {
            throw new Error("Expected the field `additional_description` to be a primitive type in the JSON string but got " + data['additional_description']);
        }
        // ensure the json data is a string
        if (data['address1'] && !(typeof data['address1'] === 'string' || data['address1'] instanceof String)) {
            throw new Error("Expected the field `address1` to be a primitive type in the JSON string but got " + data['address1']);
        }
        // ensure the json data is a string
        if (data['address2'] && !(typeof data['address2'] === 'string' || data['address2'] instanceof String)) {
            throw new Error("Expected the field `address2` to be a primitive type in the JSON string but got " + data['address2']);
        }
        // ensure the json data is a string
        if (data['address_type'] && !(typeof data['address_type'] === 'string' || data['address_type'] instanceof String)) {
            throw new Error("Expected the field `address_type` to be a primitive type in the JSON string but got " + data['address_type']);
        }
        // ensure the json data is a string
        if (data['city'] && !(typeof data['city'] === 'string' || data['city'] instanceof String)) {
            throw new Error("Expected the field `city` to be a primitive type in the JSON string but got " + data['city']);
        }
        // ensure the json data is a string
        if (data['country_code'] && !(typeof data['country_code'] === 'string' || data['country_code'] instanceof String)) {
            throw new Error("Expected the field `country_code` to be a primitive type in the JSON string but got " + data['country_code']);
        }
        // ensure the json data is a string
        if (data['created_at'] && !(typeof data['created_at'] === 'string' || data['created_at'] instanceof String)) {
            throw new Error("Expected the field `created_at` to be a primitive type in the JSON string but got " + data['created_at']);
        }
        // ensure the json data is a string
        if (data['first_name'] && !(typeof data['first_name'] === 'string' || data['first_name'] instanceof String)) {
            throw new Error("Expected the field `first_name` to be a primitive type in the JSON string but got " + data['first_name']);
        }
        // ensure the json data is a string
        if (data['identity_document'] && !(typeof data['identity_document'] === 'string' || data['identity_document'] instanceof String)) {
            throw new Error("Expected the field `identity_document` to be a primitive type in the JSON string but got " + data['identity_document']);
        }
        // ensure the json data is a string
        if (data['last_name'] && !(typeof data['last_name'] === 'string' || data['last_name'] instanceof String)) {
            throw new Error("Expected the field `last_name` to be a primitive type in the JSON string but got " + data['last_name']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        // ensure the json data is a string
        if (data['state_name'] && !(typeof data['state_name'] === 'string' || data['state_name'] instanceof String)) {
            throw new Error("Expected the field `state_name` to be a primitive type in the JSON string but got " + data['state_name']);
        }
        // ensure the json data is a string
        if (data['updated_at'] && !(typeof data['updated_at'] === 'string' || data['updated_at'] instanceof String)) {
            throw new Error("Expected the field `updated_at` to be a primitive type in the JSON string but got " + data['updated_at']);
        }
        // ensure the json data is a string
        if (data['user_id'] && !(typeof data['user_id'] === 'string' || data['user_id'] instanceof String)) {
            throw new Error("Expected the field `user_id` to be a primitive type in the JSON string but got " + data['user_id']);
        }
        // ensure the json data is a string
        if (data['zipcode'] && !(typeof data['zipcode'] === 'string' || data['zipcode'] instanceof String)) {
            throw new Error("Expected the field `zipcode` to be a primitive type in the JSON string but got " + data['zipcode']);
        }

        return true;
    }


}



/**
 * @member {String} additional_description
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['additional_description'] = undefined;

/**
 * @member {String} address1
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['address1'] = undefined;

/**
 * @member {String} address2
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['address2'] = undefined;

/**
 * @member {String} address_type
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['address_type'] = undefined;

/**
 * @member {String} city
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['city'] = undefined;

/**
 * @member {String} country_code
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['country_code'] = undefined;

/**
 * @member {String} created_at
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['created_at'] = undefined;

/**
 * @member {String} first_name
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['first_name'] = undefined;

/**
 * @member {Number} id
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['id'] = undefined;

/**
 * @member {String} identity_document
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['identity_document'] = undefined;

/**
 * @member {Boolean} is_default
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['is_default'] = undefined;

/**
 * @member {String} last_name
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['last_name'] = undefined;

/**
 * @member {Number} lat
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['lat'] = undefined;

/**
 * @member {Number} lng
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['lng'] = undefined;

/**
 * @member {String} phone
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['phone'] = undefined;

/**
 * @member {String} state_name
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['state_name'] = undefined;

/**
 * @member {String} updated_at
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['updated_at'] = undefined;

/**
 * @member {String} user_id
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['user_id'] = undefined;

/**
 * @member {String} zipcode
 */
MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress.prototype['zipcode'] = undefined;






export default MerchantsExternalOrdersOrderTokenShippingMethodsPost200ResponseOrderShippingAddress;

