# MarketingautomationAction
(*marketingautomationAction*)

### Available Operations

* [getActions](#getactions) - List a batch of Actions
* [addAction](#addaction) - Create a Action
* [getAction](#getaction) - Retrieve a Action
* [addActions](#addactions) - Add a batch of Actions

## getActions

List a batch of Actions

### Example Usage

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
  jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await panora.marketingautomationAction.getActions("<value>", false);

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

**Promise\<[operations.GetActionsResponse](../../models/operations/getactionsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## addAction

Create a action in any supported Marketingautomation software

### Example Usage

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
  jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await panora.marketingautomationAction.addAction("<value>", {}, false);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The connection token                                                                                                                                                           |
| `unifiedActionInput`                                                                                                                                                           | [components.UnifiedActionInput](../../models/components/unifiedactioninput.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `remoteData`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Set to true to include data from the original Marketingautomation software.                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.AddActionResponse](../../models/operations/addactionresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getAction

Retrieve a action from any connected Marketingautomation software

### Example Usage

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
  jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await panora.marketingautomationAction.getAction("<value>", false);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | id of the action you want to retrieve.                                                                                                                                         |
| `remoteData`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Set to true to include data from the original Marketingautomation software.                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetActionResponse](../../models/operations/getactionresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## addActions

Add a batch of Actions

### Example Usage

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
  jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await panora.marketingautomationAction.addActions("<value>", "<value>", [
    {},
  ], false);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `connectionToken`                                                                                                                                                              | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `xConnectionToken`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The connection token                                                                                                                                                           |
| `requestBody`                                                                                                                                                                  | [components.UnifiedActionInput](../../models/components/unifiedactioninput.md)[]                                                                                               | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `remoteData`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Set to true to include data from the original Marketingautomation software.                                                                                                    |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.AddActionsResponse](../../models/operations/addactionsresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
