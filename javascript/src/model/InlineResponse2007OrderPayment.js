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
import InlineResponse2007OrderPaymentData from './InlineResponse2007OrderPaymentData';

/**
 * The InlineResponse2007OrderPayment model module.
 * @module model/InlineResponse2007OrderPayment
 * @version 1.0
 */
class InlineResponse2007OrderPayment {
    /**
     * Constructs a new <code>InlineResponse2007OrderPayment</code>.
     * @alias module:model/InlineResponse2007OrderPayment
     * @param data {module:model/InlineResponse2007OrderPaymentData} 
     */
    constructor(data) { 
        
        InlineResponse2007OrderPayment.initialize(this, data);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, data) { 
        obj['data'] = data;
    }

    /**
     * Constructs a <code>InlineResponse2007OrderPayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2007OrderPayment} obj Optional instance to populate.
     * @return {module:model/InlineResponse2007OrderPayment} The populated <code>InlineResponse2007OrderPayment</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2007OrderPayment();

            if (data.hasOwnProperty('data')) {
                obj['data'] = InlineResponse2007OrderPaymentData.constructFromObject(data['data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2007OrderPaymentData} data
 */
InlineResponse2007OrderPayment.prototype['data'] = undefined;






export default InlineResponse2007OrderPayment;

