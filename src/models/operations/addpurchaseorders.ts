/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddPurchaseOrdersRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedPurchaseOrderInput>;
};

export type AddPurchaseOrdersResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedPurchaseOrderOutput | undefined;
};

export type AddPurchaseOrdersResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddPurchaseOrdersResponseBody | undefined;
    unifiedPurchaseOrderOutputs?: Array<components.UnifiedPurchaseOrderOutput> | undefined;
};

/** @internal */
export namespace AddPurchaseOrdersRequest$ {
    export const inboundSchema: z.ZodType<AddPurchaseOrdersRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedPurchaseOrderInput$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                connection_token: "connectionToken",
                remote_data: "remoteData",
                "x-connection-token": "xConnectionToken",
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        connection_token: string;
        remote_data?: boolean | undefined;
        "x-connection-token": string;
        RequestBody: Array<components.UnifiedPurchaseOrderInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPurchaseOrdersRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedPurchaseOrderInput$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                connectionToken: "connection_token",
                remoteData: "remote_data",
                xConnectionToken: "x-connection-token",
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace AddPurchaseOrdersResponseBody$ {
    export const inboundSchema: z.ZodType<AddPurchaseOrdersResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPurchaseOrderOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedPurchaseOrderOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPurchaseOrdersResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPurchaseOrderOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddPurchaseOrdersResponse$ {
    export const inboundSchema: z.ZodType<AddPurchaseOrdersResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddPurchaseOrdersResponseBody$.inboundSchema).optional(),
            UnifiedPurchaseOrderOutputs: z
                .array(components.UnifiedPurchaseOrderOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedPurchaseOrderOutputs: "unifiedPurchaseOrderOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddPurchaseOrdersResponseBody$.Outbound | undefined;
        UnifiedPurchaseOrderOutputs?:
            | Array<components.UnifiedPurchaseOrderOutput$.Outbound>
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPurchaseOrdersResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddPurchaseOrdersResponseBody$.outboundSchema).optional(),
            unifiedPurchaseOrderOutputs: z
                .array(components.UnifiedPurchaseOrderOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedPurchaseOrderOutputs: "UnifiedPurchaseOrderOutputs",
            });
        });
}
