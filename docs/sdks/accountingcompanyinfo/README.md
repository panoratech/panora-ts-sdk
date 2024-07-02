# AccountingCompanyinfo
(*accountingCompanyinfo*)

### Available Operations

* [getCompanyInfos](#getcompanyinfos) - List a batch of CompanyInfos
* [addCompanyInfo](#addcompanyinfo) - Create a CompanyInfo
* [getCompanyInfo](#getcompanyinfo) - Retrieve a CompanyInfo

## getCompanyInfos

List a batch of CompanyInfos

### Example Usage

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
  jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await panora.accountingCompanyinfo.getCompanyInfos("<value>", false);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The connection token                                                                                                                                                           |
| `remoteData`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Set to true to include data from the original Accounting software.                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetCompanyInfosResponse](../../models/operations/getcompanyinfosresponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## addCompanyInfo

Create a companyinfo in any supported Accounting software

### Example Usage

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
  jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await panora.accountingCompanyinfo.addCompanyInfo("<value>", {}, false);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `xConnectionToken`                                                                                                                                                             | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The connection token                                                                                                                                                           |
| `unifiedCompanyInfoInput`                                                                                                                                                      | [components.UnifiedCompanyInfoInput](../../models/components/unifiedcompanyinfoinput.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `remoteData`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Set to true to include data from the original Accounting software.                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.AddCompanyInfoResponse](../../models/operations/addcompanyinforesponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getCompanyInfo

Retrieve a companyinfo from any connected Accounting software

### Example Usage

```typescript
import { Panora } from "panora-ts";

const panora = new Panora({
  jwt: "<YOUR_BEARER_TOKEN_HERE>",
});

async function run() {
  const result = await panora.accountingCompanyinfo.getCompanyInfo("<value>", false);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                                                           | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | id of the companyinfo you want to retrieve.                                                                                                                                    |
| `remoteData`                                                                                                                                                                   | *boolean*                                                                                                                                                                      | :heavy_minus_sign:                                                                                                                                                             | Set to true to include data from the original Accounting software.                                                                                                             |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise\<[operations.GetCompanyInfoResponse](../../models/operations/getcompanyinforesponse.md)\>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
