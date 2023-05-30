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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ApiGateway);
  }
}(this, function(expect, ApiGateway) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('InlineResponse2006', function() {
      beforeEach(function() {
        instance = new ApiGateway.InlineResponse2006();
      });

      it('should create an instance of InlineResponse2006', function() {
        // TODO: update the code to test InlineResponse2006
        expect(instance).to.be.a(ApiGateway.InlineResponse2006);
      });

      it('should have the property refreshToken (base name: "refresh_token")', function() {
        // TODO: update the code to test the property refreshToken
        expect(instance).to.have.property('refreshToken');
        // expect(instance.refreshToken).to.be(expectedValueLiteral);
      });

      it('should have the property token (base name: "token")', function() {
        // TODO: update the code to test the property token
        expect(instance).to.have.property('token');
        // expect(instance.token).to.be(expectedValueLiteral);
      });

      it('should have the property userDeuna (base name: "user-deuna")', function() {
        // TODO: update the code to test the property userDeuna
        expect(instance).to.have.property('userDeuna');
        // expect(instance.userDeuna).to.be(expectedValueLiteral);
      });

    });
  });

}));
