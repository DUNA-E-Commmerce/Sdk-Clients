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
import MerchantsExternalOrdersOrderTokenCouponsPost200ResponseOrderItemsInnerWeight from './MerchantsExternalOrdersOrderTokenCouponsPost200ResponseOrderItemsInnerWeight';
import MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTaxAmount from './MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTaxAmount';
import MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTotalAmount from './MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTotalAmount';

/**
 * The MerchantsTransactionsPurchasePost200ResponseOrderItemsInner model module.
 * @module model/MerchantsTransactionsPurchasePost200ResponseOrderItemsInner
 * @version 1.0
 */
class MerchantsTransactionsPurchasePost200ResponseOrderItemsInner {
    /**
     * Constructs a new <code>MerchantsTransactionsPurchasePost200ResponseOrderItemsInner</code>.
     * @alias module:model/MerchantsTransactionsPurchasePost200ResponseOrderItemsInner
     * @param brand {String} 
     * @param category {String} 
     * @param color {String} 
     * @param description {String} 
     * @param detailsUrl {String} 
     * @param id {String} 
     * @param imageUrl {String} 
     * @param isbn {String} 
     * @param manufacturer {String} 
     * @param name {String} 
     * @param options {String} 
     * @param quantity {Number} 
     * @param size {String} 
     * @param sku {String} 
     * @param taxable {Boolean} 
     * @param type {String} 
     * @param uom {String} 
     * @param upc {String} 
     */
    constructor(brand, category, color, description, detailsUrl, id, imageUrl, isbn, manufacturer, name, options, quantity, size, sku, taxable, type, uom, upc) { 
        
        MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.initialize(this, brand, category, color, description, detailsUrl, id, imageUrl, isbn, manufacturer, name, options, quantity, size, sku, taxable, type, uom, upc);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, brand, category, color, description, detailsUrl, id, imageUrl, isbn, manufacturer, name, options, quantity, size, sku, taxable, type, uom, upc) { 
        obj['brand'] = brand;
        obj['category'] = category;
        obj['color'] = color;
        obj['description'] = description;
        obj['details_url'] = detailsUrl;
        obj['id'] = id;
        obj['image_url'] = imageUrl;
        obj['isbn'] = isbn;
        obj['manufacturer'] = manufacturer;
        obj['name'] = name;
        obj['options'] = options;
        obj['quantity'] = quantity;
        obj['size'] = size;
        obj['sku'] = sku;
        obj['taxable'] = taxable;
        obj['type'] = type;
        obj['uom'] = uom;
        obj['upc'] = upc;
    }

    /**
     * Constructs a <code>MerchantsTransactionsPurchasePost200ResponseOrderItemsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MerchantsTransactionsPurchasePost200ResponseOrderItemsInner} obj Optional instance to populate.
     * @return {module:model/MerchantsTransactionsPurchasePost200ResponseOrderItemsInner} The populated <code>MerchantsTransactionsPurchasePost200ResponseOrderItemsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MerchantsTransactionsPurchasePost200ResponseOrderItemsInner();

            if (data.hasOwnProperty('brand')) {
                obj['brand'] = ApiClient.convertToType(data['brand'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('details_url')) {
                obj['details_url'] = ApiClient.convertToType(data['details_url'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('image_url')) {
                obj['image_url'] = ApiClient.convertToType(data['image_url'], 'String');
            }
            if (data.hasOwnProperty('isbn')) {
                obj['isbn'] = ApiClient.convertToType(data['isbn'], 'String');
            }
            if (data.hasOwnProperty('manufacturer')) {
                obj['manufacturer'] = ApiClient.convertToType(data['manufacturer'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('options')) {
                obj['options'] = ApiClient.convertToType(data['options'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'String');
            }
            if (data.hasOwnProperty('sku')) {
                obj['sku'] = ApiClient.convertToType(data['sku'], 'String');
            }
            if (data.hasOwnProperty('tax_amount')) {
                obj['tax_amount'] = MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTaxAmount.constructFromObject(data['tax_amount']);
            }
            if (data.hasOwnProperty('taxable')) {
                obj['taxable'] = ApiClient.convertToType(data['taxable'], 'Boolean');
            }
            if (data.hasOwnProperty('total_amount')) {
                obj['total_amount'] = MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTotalAmount.constructFromObject(data['total_amount']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('unit_price')) {
                obj['unit_price'] = MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTaxAmount.constructFromObject(data['unit_price']);
            }
            if (data.hasOwnProperty('uom')) {
                obj['uom'] = ApiClient.convertToType(data['uom'], 'String');
            }
            if (data.hasOwnProperty('upc')) {
                obj['upc'] = ApiClient.convertToType(data['upc'], 'String');
            }
            if (data.hasOwnProperty('weight')) {
                obj['weight'] = MerchantsExternalOrdersOrderTokenCouponsPost200ResponseOrderItemsInnerWeight.constructFromObject(data['weight']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MerchantsTransactionsPurchasePost200ResponseOrderItemsInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MerchantsTransactionsPurchasePost200ResponseOrderItemsInner</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['brand'] && !(typeof data['brand'] === 'string' || data['brand'] instanceof String)) {
            throw new Error("Expected the field `brand` to be a primitive type in the JSON string but got " + data['brand']);
        }
        // ensure the json data is a string
        if (data['category'] && !(typeof data['category'] === 'string' || data['category'] instanceof String)) {
            throw new Error("Expected the field `category` to be a primitive type in the JSON string but got " + data['category']);
        }
        // ensure the json data is a string
        if (data['color'] && !(typeof data['color'] === 'string' || data['color'] instanceof String)) {
            throw new Error("Expected the field `color` to be a primitive type in the JSON string but got " + data['color']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['details_url'] && !(typeof data['details_url'] === 'string' || data['details_url'] instanceof String)) {
            throw new Error("Expected the field `details_url` to be a primitive type in the JSON string but got " + data['details_url']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['image_url'] && !(typeof data['image_url'] === 'string' || data['image_url'] instanceof String)) {
            throw new Error("Expected the field `image_url` to be a primitive type in the JSON string but got " + data['image_url']);
        }
        // ensure the json data is a string
        if (data['isbn'] && !(typeof data['isbn'] === 'string' || data['isbn'] instanceof String)) {
            throw new Error("Expected the field `isbn` to be a primitive type in the JSON string but got " + data['isbn']);
        }
        // ensure the json data is a string
        if (data['manufacturer'] && !(typeof data['manufacturer'] === 'string' || data['manufacturer'] instanceof String)) {
            throw new Error("Expected the field `manufacturer` to be a primitive type in the JSON string but got " + data['manufacturer']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['options'] && !(typeof data['options'] === 'string' || data['options'] instanceof String)) {
            throw new Error("Expected the field `options` to be a primitive type in the JSON string but got " + data['options']);
        }
        // ensure the json data is a string
        if (data['size'] && !(typeof data['size'] === 'string' || data['size'] instanceof String)) {
            throw new Error("Expected the field `size` to be a primitive type in the JSON string but got " + data['size']);
        }
        // ensure the json data is a string
        if (data['sku'] && !(typeof data['sku'] === 'string' || data['sku'] instanceof String)) {
            throw new Error("Expected the field `sku` to be a primitive type in the JSON string but got " + data['sku']);
        }
        // validate the optional field `tax_amount`
        if (data['tax_amount']) { // data not null
          MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTaxAmount.validateJSON(data['tax_amount']);
        }
        // validate the optional field `total_amount`
        if (data['total_amount']) { // data not null
          MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTotalAmount.validateJSON(data['total_amount']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `unit_price`
        if (data['unit_price']) { // data not null
          MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTaxAmount.validateJSON(data['unit_price']);
        }
        // ensure the json data is a string
        if (data['uom'] && !(typeof data['uom'] === 'string' || data['uom'] instanceof String)) {
            throw new Error("Expected the field `uom` to be a primitive type in the JSON string but got " + data['uom']);
        }
        // ensure the json data is a string
        if (data['upc'] && !(typeof data['upc'] === 'string' || data['upc'] instanceof String)) {
            throw new Error("Expected the field `upc` to be a primitive type in the JSON string but got " + data['upc']);
        }
        // validate the optional field `weight`
        if (data['weight']) { // data not null
          MerchantsExternalOrdersOrderTokenCouponsPost200ResponseOrderItemsInnerWeight.validateJSON(data['weight']);
        }

        return true;
    }


}

MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.RequiredProperties = ["brand", "category", "color", "description", "details_url", "id", "image_url", "isbn", "manufacturer", "name", "options", "quantity", "size", "sku", "taxable", "type", "uom", "upc"];

/**
 * @member {String} brand
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['brand'] = undefined;

/**
 * @member {String} category
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['category'] = undefined;

/**
 * @member {String} color
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['color'] = undefined;

/**
 * @member {String} description
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['description'] = undefined;

/**
 * @member {String} details_url
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['details_url'] = undefined;

/**
 * @member {String} id
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['id'] = undefined;

/**
 * @member {String} image_url
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['image_url'] = undefined;

/**
 * @member {String} isbn
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['isbn'] = undefined;

/**
 * @member {String} manufacturer
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['manufacturer'] = undefined;

/**
 * @member {String} name
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['name'] = undefined;

/**
 * @member {String} options
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['options'] = undefined;

/**
 * @member {Number} quantity
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['quantity'] = undefined;

/**
 * @member {String} size
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['size'] = undefined;

/**
 * @member {String} sku
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['sku'] = undefined;

/**
 * @member {module:model/MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTaxAmount} tax_amount
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['tax_amount'] = undefined;

/**
 * @member {Boolean} taxable
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['taxable'] = undefined;

/**
 * @member {module:model/MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTotalAmount} total_amount
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['total_amount'] = undefined;

/**
 * @member {String} type
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['type'] = undefined;

/**
 * @member {module:model/MerchantsTransactionsPurchasePost200ResponseOrderItemsInnerTaxAmount} unit_price
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['unit_price'] = undefined;

/**
 * @member {String} uom
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['uom'] = undefined;

/**
 * @member {String} upc
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['upc'] = undefined;

/**
 * @member {module:model/MerchantsExternalOrdersOrderTokenCouponsPost200ResponseOrderItemsInnerWeight} weight
 */
MerchantsTransactionsPurchasePost200ResponseOrderItemsInner.prototype['weight'] = undefined;






export default MerchantsTransactionsPurchasePost200ResponseOrderItemsInner;

