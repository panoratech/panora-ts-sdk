# AddAccountingAttachmentsRequest


## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `connectionToken`                                                                        | *string*                                                                                 | :heavy_check_mark:                                                                       | N/A                                                                                      |
| `remoteData`                                                                             | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Set to true to include data from the original Accounting software.                       |
| `xConnectionToken`                                                                       | *string*                                                                                 | :heavy_check_mark:                                                                       | The connection token                                                                     |
| `requestBody`                                                                            | [components.UnifiedAttachmentInput](../../models/components/unifiedattachmentinput.md)[] | :heavy_check_mark:                                                                       | N/A                                                                                      |