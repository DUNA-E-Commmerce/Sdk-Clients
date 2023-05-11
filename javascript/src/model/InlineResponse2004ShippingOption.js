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
 * The InlineResponse2004ShippingOption model module.
 * @module model/InlineResponse2004ShippingOption
 * @version 1.0
 */
class InlineResponse2004ShippingOption {
    /**
     * Constructs a new <code>InlineResponse2004ShippingOption</code>.
     * @alias module:model/InlineResponse2004ShippingOption
     * @param cost {Number} 
     * @param description {String} 
     * @param estimatedDeliveryDate {String} 
     * @param reference {String} 
     * @param serviceName {String} 
     * @param taxAmount {Number} 
     * @param taxCode {String} 
     */
    constructor(cost, description, estimatedDeliveryDate, reference, serviceName, taxAmount, taxCode) { 
        
        InlineResponse2004ShippingOption.initialize(this, cost, description, estimatedDeliveryDate, reference, serviceName, taxAmount, taxCode);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, cost, description, estimatedDeliveryDate, reference, serviceName, taxAmount, taxCode) { 
        obj['cost'] = cost;
        obj['description'] = description;
        obj['estimated_delivery_date'] = estimatedDeliveryDate;
        obj['reference'] = reference;
        obj['service_name'] = serviceName;
        obj['tax_amount'] = taxAmount;
        obj['tax_code'] = taxCode;
    }

    /**
     * Constructs a <code>InlineResponse2004ShippingOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004ShippingOption} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004ShippingOption} The populated <code>InlineResponse2004ShippingOption</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004ShippingOption();

            if (data.hasOwnProperty('cost')) {
                obj['cost'] = ApiClient.convertToType(data['cost'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('estimated_delivery_date')) {
                obj['estimated_delivery_date'] = ApiClient.convertToType(data['estimated_delivery_date'], 'String');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
            }
            if (data.hasOwnProperty('service_name')) {
                obj['service_name'] = ApiClient.convertToType(data['service_name'], 'String');
            }
            if (data.hasOwnProperty('tax_amount')) {
                obj['tax_amount'] = ApiClient.convertToType(data['tax_amount'], 'Number');
            }
            if (data.hasOwnProperty('tax_code')) {
                obj['tax_code'] = ApiClient.convertToType(data['tax_code'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} cost
 */
InlineResponse2004ShippingOption.prototype['cost'] = undefined;

/**
 * @member {String} description
 */
InlineResponse2004ShippingOption.prototype['description'] = undefined;

/**
 * @member {String} estimated_delivery_date
 */
InlineResponse2004ShippingOption.prototype['estimated_delivery_date'] = undefined;

/**
 * @member {String} reference
 */
InlineResponse2004ShippingOption.prototype['reference'] = undefined;

/**
 * @member {String} service_name
 */
InlineResponse2004ShippingOption.prototype['service_name'] = undefined;

/**
 * @member {Number} tax_amount
 */
InlineResponse2004ShippingOption.prototype['tax_amount'] = undefined;

/**
 * @member {String} tax_code
 */
InlineResponse2004ShippingOption.prototype['tax_code'] = undefined;






export default InlineResponse2004ShippingOption;

