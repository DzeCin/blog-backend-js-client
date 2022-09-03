# JsApiBlogClient.PostsApi

All URIs are relative to *{server}/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPost**](PostsApi.md#addPost) | **POST** /posts | Add a post
[**deletePost**](PostsApi.md#deletePost) | **DELETE** /posts/{postId} | Delete a post by ID
[**getPost**](PostsApi.md#getPost) | **GET** /posts/{postId} | Get a post by ID
[**getPosts**](PostsApi.md#getPosts) | **GET** /posts | Get all posts
[**updatePost**](PostsApi.md#updatePost) | **PATCH** /posts/{postId} | Update a post by ID

<a name="addPost"></a>
# **addPost**
> addPost(opts)

Add a post

Adds a post

### Example
```javascript
import {JsApiBlogClient} from 'js-api-blog-client';
let defaultClient = JsApiBlogClient.ApiClient.instance;


let apiInstance = new JsApiBlogClient.PostsApi();
let opts = { 
  'body': new JsApiBlogClient.Post() // Post | Post to add in json format
};
apiInstance.addPost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Post**](Post.md)| Post to add in json format | [optional] 

### Return type

null (empty response body)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

<a name="deletePost"></a>
# **deletePost**
> deletePost(postId)

Delete a post by ID

### Example
```javascript
import {JsApiBlogClient} from 'js-api-blog-client';

let apiInstance = new JsApiBlogClient.PostsApi();
let postId = "postId_example"; // String | ID of the post to delete

apiInstance.deletePost(postId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postId** | **String**| ID of the post to delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="getPost"></a>
# **getPost**
> Post getPost(postId)

Get a post by ID

### Example
```javascript
import {JsApiBlogClient} from 'js-api-blog-client';

let apiInstance = new JsApiBlogClient.PostsApi();
let postId = "postId_example"; // String | ID of the post to get

apiInstance.getPost(postId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postId** | **String**| ID of the post to get | 

### Return type

[**Post**](Post.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getPosts"></a>
# **getPosts**
> [Post] getPosts()

Get all posts

This requests get all the posts from the db. 

### Example
```javascript
import {JsApiBlogClient} from 'js-api-blog-client';

let apiInstance = new JsApiBlogClient.PostsApi();
apiInstance.getPosts((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Post]**](Post.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updatePost"></a>
# **updatePost**
> updatePost(postId, opts)

Update a post by ID

### Example
```javascript
import {JsApiBlogClient} from 'js-api-blog-client';

let apiInstance = new JsApiBlogClient.PostsApi();
let postId = "postId_example"; // String | ID of the post to update
let opts = { 
  'body': new JsApiBlogClient.Post() // Post | Post to modify in
};
apiInstance.updatePost(postId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **postId** | **String**| ID of the post to update | 
 **body** | [**Post**](Post.md)| Post to modify in | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

