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

  beforeEach(function() {
    instance = new ApiGateway.UsersApi();
  });

  describe('(package)', function() {
    describe('UsersApi', function() {
      describe('paymentsCardsUsersUserIdCardsCardIdDelete', function() {
        it('should call paymentsCardsUsersUserIdCardsCardIdDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentsCardsUsersUserIdCardsCardIdDelete call
          /*
          var opts = {};

          instance.paymentsCardsUsersUserIdCardsCardIdDelete(userId, cardId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentsCardsUsersUserIdCardsCardIdGet', function() {
        it('should call paymentsCardsUsersUserIdCardsCardIdGet successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentsCardsUsersUserIdCardsCardIdGet call and complete the assertions
          /*
          var opts = {};

          instance.paymentsCardsUsersUserIdCardsCardIdGet(userId, cardId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ApiGateway.InlineResponse2004);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentsCardsUsersUserIdCardsGet', function() {
        it('should call paymentsCardsUsersUserIdCardsGet successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentsCardsUsersUserIdCardsGet call and complete the assertions
          /*
          var opts = {};

          instance.paymentsCardsUsersUserIdCardsGet(userId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(ApiGateway.InlineResponse2003);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('paymentsCardsUsersUserIdCardsPost', function() {
        it('should call paymentsCardsUsersUserIdCardsPost successfully', function(done) {
          // TODO: uncomment, update parameter values for paymentsCardsUsersUserIdCardsPost call and complete the assertions
          /*
          var opts = {};

          instance.paymentsCardsUsersUserIdCardsPost(userId, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ApiGateway.InlineResponse2004);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersLoginDeviceFingerprintPost', function() {
        it('should call usersLoginDeviceFingerprintPost successfully', function(done) {
          // TODO: uncomment, update parameter values for usersLoginDeviceFingerprintPost call and complete the assertions
          /*
          var opts = {};

          instance.usersLoginDeviceFingerprintPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ApiGateway.InlineResponse2006);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersLoginPost', function() {
        it('should call usersLoginPost successfully', function(done) {
          // TODO: uncomment, update parameter values for usersLoginPost call and complete the assertions
          /*
          var opts = {};

          instance.usersLoginPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ApiGateway.InlineResponse2005);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersMeGet', function() {
        it('should call usersMeGet successfully', function(done) {
          // TODO: uncomment, update parameter values for usersMeGet call and complete the assertions
          /*
          var opts = {};

          instance.usersMeGet(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ApiGateway.InlineResponse2007);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersRegisterPost', function() {
        it('should call usersRegisterPost successfully', function(done) {
          // TODO: uncomment, update parameter values for usersRegisterPost call and complete the assertions
          /*
          var opts = {};

          instance.usersRegisterPost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(ApiGateway.InlineResponse2008);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('usersRequestCodePost', function() {
        it('should call usersRequestCodePost successfully', function(done) {
          // TODO: uncomment, update parameter values for usersRequestCodePost call
          /*
          var opts = {};

          instance.usersRequestCodePost(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
