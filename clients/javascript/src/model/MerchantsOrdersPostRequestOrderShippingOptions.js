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
import MerchantsOrdersPostRequestOrderShippingOptionsDetails from './MerchantsOrdersPostRequestOrderShippingOptionsDetails';

/**
 * The MerchantsOrdersPostRequestOrderShippingOptions model module.
 * @module model/MerchantsOrdersPostRequestOrderShippingOptions
 * @version 1.0
 */
class MerchantsOrdersPostRequestOrderShippingOptions {
    /**
     * Constructs a new <code>MerchantsOrdersPostRequestOrderShippingOptions</code>.
     * @alias module:model/MerchantsOrdersPostRequestOrderShippingOptions
     * @param details {module:model/MerchantsOrdersPostRequestOrderShippingOptionsDetails} 
     * @param type {String} 
     */
    constructor(details, type) { 
        
        MerchantsOrdersPostRequestOrderShippingOptions.initialize(this, details, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, details, type) { 
        obj['details'] = details;
        obj['type'] = type;
    }

    /**
     * Constructs a <code>MerchantsOrdersPostRequestOrderShippingOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantsOrdersPostRequestOrderShippingOptions} obj Optional instance to populate.
     * @return {module:model/MerchantsOrdersPostRequestOrderShippingOptions} The populated <code>MerchantsOrdersPostRequestOrderShippingOptions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantsOrdersPostRequestOrderShippingOptions();

            if (data.hasOwnProperty('details')) {
                obj['details'] = MerchantsOrdersPostRequestOrderShippingOptionsDetails.constructFromObject(data['details']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MerchantsOrdersPostRequestOrderShippingOptions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MerchantsOrdersPostRequestOrderShippingOptions</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MerchantsOrdersPostRequestOrderShippingOptions.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `details`
        if (data['details']) { // data not null
          MerchantsOrdersPostRequestOrderShippingOptionsDetails.validateJSON(data['details']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }

        return true;
    }


}

MerchantsOrdersPostRequestOrderShippingOptions.RequiredProperties = ["details", "type"];

/**
 * @member {module:model/MerchantsOrdersPostRequestOrderShippingOptionsDetails} details
 */
MerchantsOrdersPostRequestOrderShippingOptions.prototype['details'] = undefined;

/**
 * @member {String} type
 */
MerchantsOrdersPostRequestOrderShippingOptions.prototype['type'] = undefined;






export default MerchantsOrdersPostRequestOrderShippingOptions;

