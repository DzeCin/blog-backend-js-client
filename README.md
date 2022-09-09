# js-api-blog-client

JsApiBlogClient - JavaScript client for js-api-blog-client (DzeCin/blog-backend)
This is a blog API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install js-api-blog-client --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
    rules: [
        {
            parser: {
                amd: false
            }
        }
    ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var JsApiBlogClient = require('js-api-blog-client');

var api = new JsApiBlogClient.HealthCheckApi()
var callback = function(error, data, response) {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully.');
    }
};
api.healthCheck(callback);
```

## Documentation for API Endpoints

All URIs are relative to *{server}*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*JsApiBlogClient.HealthCheckApi* | [**healthCheck**](docs/HealthCheckApi.md#healthCheck) | **GET** / | Health check
*JsApiBlogClient.PostsApi* | [**addPost**](docs/PostsApi.md#addPost) | **POST** /posts | Add a post
*JsApiBlogClient.PostsApi* | [**deletePost**](docs/PostsApi.md#deletePost) | **DELETE** /posts/{postId} | Delete a post by ID
*JsApiBlogClient.PostsApi* | [**getPost**](docs/PostsApi.md#getPost) | **GET** /posts/{postId} | Get a post by ID
*JsApiBlogClient.PostsApi* | [**getPosts**](docs/PostsApi.md#getPosts) | **GET** /posts | Get all posts
*JsApiBlogClient.PostsApi* | [**updatePost**](docs/PostsApi.md#updatePost) | **PATCH** /posts/{postId} | Update a post by ID

## Documentation for Models

- [JsApiBlogClient.Post](docs/Post.md)

## Documentation for Authorization


### oAuth

- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: https://api.example.com/oauth2/authorize
- **Scopes**:
    - :
