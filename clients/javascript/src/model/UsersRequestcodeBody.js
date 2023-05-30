/*
 * API Gateway
 * API Gateway
 *
 * OpenAPI spec version: 1.0
 * Contact: checkout@deuna.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.44
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The UsersRequestcodeBody model module.
 * @module model/UsersRequestcodeBody
 * @version 1.0
 */
export class UsersRequestcodeBody {
  /**
   * Constructs a new <code>UsersRequestcodeBody</code>.
   * @alias module:model/UsersRequestcodeBody
   * @class
   * @param email {String} 
   */
  constructor(email) {
    this.email = email;
  }

  /**
   * Constructs a <code>UsersRequestcodeBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UsersRequestcodeBody} obj Optional instance to populate.
   * @return {module:model/UsersRequestcodeBody} The populated <code>UsersRequestcodeBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new UsersRequestcodeBody();
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} email
 */
UsersRequestcodeBody.prototype.email = undefined;

