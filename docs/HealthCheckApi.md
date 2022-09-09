# JsApiBlogClient.HealthCheckApi

All URIs are relative to *{server}*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthCheck**](HealthCheckApi.md#healthCheck) | **GET** / | Health check

<a name="healthCheck"></a>
# **healthCheck**
> healthCheck()

Health check

This requests is for health check purpose.

### Example
```javascript
import {JsApiBlogClient} from 'js-api-blog-client';

let apiInstance = new JsApiBlogClient.HealthCheckApi();
apiInstance.healthCheck((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined
