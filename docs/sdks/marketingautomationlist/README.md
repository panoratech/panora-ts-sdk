# MarketingautomationList
(*marketingautomationList*)

### Available Operations

* [getLists](#getlists) - List a batch of Lists
* [addList](#addlist) - Create a List
* [getList](#getlist) - Retrieve a List

## getLists

List a batch of Lists

### Example Usage

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
  jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await panora.marketingautomationList.getLists("<value>", false);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The connection token                                                                                                                                                           |
| `remoteData`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Set to true to include data from the original Marketingautomation software.                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetListsResponse](../../models/operations/getlistsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## addList

Create a list in any supported Marketingautomation software

### Example Usage

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
  jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await panora.marketingautomationList.addList("<value>", {}, false);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The connection token                                                                                                                                                           |
| `unifiedListInput`                                                                                                                                                             | [components.UnifiedListInput](../../models/components/unifiedlistinput.md)                                                                                                     | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `remoteData`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Set to true to include data from the original Marketingautomation software.                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.AddListResponse](../../models/operations/addlistresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getList

Retrieve a list from any connected Marketingautomation software

### Example Usage

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
  jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await panora.marketingautomationList.getList("<value>", false);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | id of the list you want to retrieve.                                                                                                                                           |
| `remoteData`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Set to true to include data from the original Marketingautomation software.                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetListResponse](../../models/operations/getlistresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
