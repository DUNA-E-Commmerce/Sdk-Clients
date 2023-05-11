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
import InlineResponse2004OrderShippingAddress from './InlineResponse2004OrderShippingAddress';
import InlineResponse200OrderMetadata from './InlineResponse200OrderMetadata';

/**
 * The InlineResponse2004Order model module.
 * @module model/InlineResponse2004Order
 * @version 1.0
 */
class InlineResponse2004Order {
    /**
     * Constructs a new <code>InlineResponse2004Order</code>.
     * @alias module:model/InlineResponse2004Order
     * @param currency {String} 
     * @param discounts {Array.<Object>} 
     * @param items {Array.<Object>} 
     * @param itemsTotalAmount {Number} 
     * @param metadata {module:model/InlineResponse200OrderMetadata} 
     * @param orderId {String} 
     * @param shippingAddress {module:model/InlineResponse2004OrderShippingAddress} 
     * @param shippingAmount {Number} 
     * @param storeCode {String} 
     * @param subTotal {Number} 
     * @param taxAmount {Number} 
     * @param totalAmount {Number} 
     * @param userInstructions {String} 
     */
    constructor(currency, discounts, items, itemsTotalAmount, metadata, orderId, shippingAddress, shippingAmount, storeCode, subTotal, taxAmount, totalAmount, userInstructions) { 
        
        InlineResponse2004Order.initialize(this, currency, discounts, items, itemsTotalAmount, metadata, orderId, shippingAddress, shippingAmount, storeCode, subTotal, taxAmount, totalAmount, userInstructions);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, currency, discounts, items, itemsTotalAmount, metadata, orderId, shippingAddress, shippingAmount, storeCode, subTotal, taxAmount, totalAmount, userInstructions) { 
        obj['currency'] = currency;
        obj['discounts'] = discounts;
        obj['items'] = items;
        obj['items_total_amount'] = itemsTotalAmount;
        obj['metadata'] = metadata;
        obj['order_id'] = orderId;
        obj['shipping_address'] = shippingAddress;
        obj['shipping_amount'] = shippingAmount;
        obj['store_code'] = storeCode;
        obj['sub_total'] = subTotal;
        obj['tax_amount'] = taxAmount;
        obj['total_amount'] = totalAmount;
        obj['user_instructions'] = userInstructions;
    }

    /**
     * Constructs a <code>InlineResponse2004Order</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004Order} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004Order} The populated <code>InlineResponse2004Order</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2004Order();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('discounts')) {
                obj['discounts'] = ApiClient.convertToType(data['discounts'], [Object]);
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [Object]);
            }
            if (data.hasOwnProperty('items_total_amount')) {
                obj['items_total_amount'] = ApiClient.convertToType(data['items_total_amount'], 'Number');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = InlineResponse200OrderMetadata.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('order_id')) {
                obj['order_id'] = ApiClient.convertToType(data['order_id'], 'String');
            }
            if (data.hasOwnProperty('shipping_address')) {
                obj['shipping_address'] = InlineResponse2004OrderShippingAddress.constructFromObject(data['shipping_address']);
            }
            if (data.hasOwnProperty('shipping_amount')) {
                obj['shipping_amount'] = ApiClient.convertToType(data['shipping_amount'], 'Number');
            }
            if (data.hasOwnProperty('store_code')) {
                obj['store_code'] = ApiClient.convertToType(data['store_code'], 'String');
            }
            if (data.hasOwnProperty('sub_total')) {
                obj['sub_total'] = ApiClient.convertToType(data['sub_total'], 'Number');
            }
            if (data.hasOwnProperty('tax_amount')) {
                obj['tax_amount'] = ApiClient.convertToType(data['tax_amount'], 'Number');
            }
            if (data.hasOwnProperty('total_amount')) {
                obj['total_amount'] = ApiClient.convertToType(data['total_amount'], 'Number');
            }
            if (data.hasOwnProperty('user_instructions')) {
                obj['user_instructions'] = ApiClient.convertToType(data['user_instructions'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} currency
 */
InlineResponse2004Order.prototype['currency'] = undefined;

/**
 * @member {Array.<Object>} discounts
 */
InlineResponse2004Order.prototype['discounts'] = undefined;

/**
 * @member {Array.<Object>} items
 */
InlineResponse2004Order.prototype['items'] = undefined;

/**
 * @member {Number} items_total_amount
 */
InlineResponse2004Order.prototype['items_total_amount'] = undefined;

/**
 * @member {module:model/InlineResponse200OrderMetadata} metadata
 */
InlineResponse2004Order.prototype['metadata'] = undefined;

/**
 * @member {String} order_id
 */
InlineResponse2004Order.prototype['order_id'] = undefined;

/**
 * @member {module:model/InlineResponse2004OrderShippingAddress} shipping_address
 */
InlineResponse2004Order.prototype['shipping_address'] = undefined;

/**
 * @member {Number} shipping_amount
 */
InlineResponse2004Order.prototype['shipping_amount'] = undefined;

/**
 * @member {String} store_code
 */
InlineResponse2004Order.prototype['store_code'] = undefined;

/**
 * @member {Number} sub_total
 */
InlineResponse2004Order.prototype['sub_total'] = undefined;

/**
 * @member {Number} tax_amount
 */
InlineResponse2004Order.prototype['tax_amount'] = undefined;

/**
 * @member {Number} total_amount
 */
InlineResponse2004Order.prototype['total_amount'] = undefined;

/**
 * @member {String} user_instructions
 */
InlineResponse2004Order.prototype['user_instructions'] = undefined;






export default InlineResponse2004Order;

