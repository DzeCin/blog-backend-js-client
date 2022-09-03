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
    instance = new JsApiBlogClient.PostsApi();
  });

  describe('(package)', function() {
    describe('PostsApi', function() {
      describe('addPost', function() {
        it('should call addPost successfully', function(done) {
          // TODO: uncomment, update parameter values for addPost call
          /*
          var opts = {};

          instance.addPost(opts, function(error, data, response) {
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
      describe('deletePost', function() {
        it('should call deletePost successfully', function(done) {
          // TODO: uncomment, update parameter values for deletePost call
          /*

          instance.deletePost(postId, function(error, data, response) {
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
      describe('getPost', function() {
        it('should call getPost successfully', function(done) {
          // TODO: uncomment, update parameter values for getPost call and complete the assertions
          /*

          instance.getPost(postId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(JsApiBlogClient.Post);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('getPosts', function() {
        it('should call getPosts successfully', function(done) {
          // TODO: uncomment getPosts call and complete the assertions
          /*

          instance.getPosts(function(error, data, response) {
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
              expect(data).to.be.a(JsApiBlogClient.Post);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('updatePost', function() {
        it('should call updatePost successfully', function(done) {
          // TODO: uncomment, update parameter values for updatePost call
          /*
          var opts = {};

          instance.updatePost(postId, opts, function(error, data, response) {
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
