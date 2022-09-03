/*
 * Blog API
 * This is a blog API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: dzenancindrak@gmail.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
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
    factory(root.expect, root.JsApiBlogClient);
  }
}(this, function(expect, JsApiBlogClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new JsApiBlogClient.HealthCheckApi();
  });

  describe('(package)', function() {
    describe('HealthCheckApi', function() {
      describe('healthCheck', function() {
        it('should call healthCheck successfully', function(done) {
          // TODO: uncomment healthCheck call
          /*

          instance.healthCheck(function(error, data, response) {
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