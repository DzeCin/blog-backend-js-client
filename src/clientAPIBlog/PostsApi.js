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
import {ApiClient} from "../ApiClient";
import {Post} from '../model/Post';

/**
 * Posts service.
 * @module clientAPIBlog/PostsApi
 * @version 1.0.0
 */
export class PostsApi {

    /**
     * Constructs a new PostsApi.
     * @alias module:clientAPIBlog/PostsApi
     * @class
     * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
     * default to {@link module:ApiClient#instanc
    e} if unspecified.
     */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the addPost operation.
     * @callback moduleclientAPIBlog/PostsApi~addPostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a post
     * Adds a post
     * @param {Object} opts Optional parameters
     * @param {module:model/Post} opts.body Post to add in json format
     * @param {module:clientAPIBlog/PostsApi~addPostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    addPost(opts, callback) {
        opts = opts || {};
        let postBody = opts['body'];

        let pathParams = {

        };
        let queryParams = {

        };
        let headerParams = {

        };
        let formParams = {

        };

        let authNames = ['oAuth'];
        let contentTypes = ['application/json'];
        let accepts = [];
        let returnType = null;

        return this.apiClient.callApi(
            '/posts', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the deletePost operation.
     * @callback moduleclientAPIBlog/PostsApi~deletePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a post by ID
     * @param {String} postId ID of the post to delete
     * @param {module:clientAPIBlog/PostsApi~deletePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletePost(postId, callback) {

        let postBody = null;
        // verify the required parameter 'postId' is set
        if (postId === undefined || postId === null) {
            throw new Error("Missing the required parameter 'postId' when calling deletePost");
        }

        let pathParams = {
            'postId': postId
        };
        let queryParams = {

        };
        let headerParams = {

        };
        let formParams = {

        };

        let authNames = ['oAuth'];
        let contentTypes = [];
        let accepts = [];
        let returnType = null;

        return this.apiClient.callApi(
            '/posts/{postId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the getPost operation.
     * @callback moduleclientAPIBlog/PostsApi~getPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Post{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a post by ID
     * @param {String} postId ID of the post to get
     * @param {module:clientAPIBlog/PostsApi~getPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getPost(postId, callback) {

        let postBody = null;
        // verify the required parameter 'postId' is set
        if (postId === undefined || postId === null) {
            throw new Error("Missing the required parameter 'postId' when calling getPost");
        }

        let pathParams = {
            'postId': postId
        };
        let queryParams = {

        };
        let headerParams = {

        };
        let formParams = {

        };

        let authNames = [];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = Post;

        return this.apiClient.callApi(
            '/posts/{postId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the getPosts operation.
     * @callback moduleclientAPIBlog/PostsApi~getPostsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Post>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all posts
     * This requests get all the posts from the db.
     * @param {module:clientAPIBlog/PostsApi~getPostsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getPosts(callback) {

        let postBody = null;

        let pathParams = {

        };
        let queryParams = {

        };
        let headerParams = {

        };
        let formParams = {

        };

        let authNames = [];
        let contentTypes = [];
        let accepts = ['application/json'];
        let returnType = [Post];

        return this.apiClient.callApi(
            '/posts', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }
    /**
     * Callback function to receive the result of the updatePost operation.
     * @callback moduleclientAPIBlog/PostsApi~updatePostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a post by ID
     * @param {String} postId ID of the post to update
     * @param {Object} opts Optional parameters
     * @param {module:model/Post} opts.body Post to modify in
     * @param {module:clientAPIBlog/PostsApi~updatePostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updatePost(postId, opts, callback) {
        opts = opts || {};
        let postBody = opts['body'];
        // verify the required parameter 'postId' is set
        if (postId === undefined || postId === null) {
            throw new Error("Missing the required parameter 'postId' when calling updatePost");
        }

        let pathParams = {
            'postId': postId
        };
        let queryParams = {

        };
        let headerParams = {

        };
        let formParams = {

        };

        let authNames = ['oAuth'];
        let contentTypes = ['application/json'];
        let accepts = [];
        let returnType = null;

        return this.apiClient.callApi(
            '/posts/{postId}', 'PATCH',
            pathParams, queryParams, headerParams, formParams, postBody,
            authNames, contentTypes, accepts, returnType, callback
        );
    }

}
