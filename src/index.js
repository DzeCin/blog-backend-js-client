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
import {ApiClient} from './ApiClient';
import {Post} from './model/Post';
import {HealthCheckApi} from './clientAPIBlog/HealthCheckApi';
import {PostsApi} from './clientAPIBlog/PostsApi';

/**
* This_is_a_blog_API.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var JsApiBlogClient = require('index'); // See note below*.
* var xxxSvc = new JsApiBlogClient.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new JsApiBlogClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new JsApiBlogClient.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new JsApiBlogClient.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Post model constructor.
     * @property {module:model/Post}
     */
    Post,

    /**
    * The HealthCheckApi service constructor.
    * @property {module:clientAPIBlog/HealthCheckApi}
    */
    HealthCheckApi,

    /**
    * The PostsApi service constructor.
    * @property {module:clientAPIBlog/PostsApi}
    */
    PostsApi
};