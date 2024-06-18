/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddItemsRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedItemInput>;
};

export type AddItemsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedItemOutput | undefined;
};

export type AddItemsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddItemsResponseBody | undefined;
    unifiedItemOutputs?: Array<components.UnifiedItemOutput> | undefined;
};

/** @internal */
export namespace AddItemsRequest$ {
    export const inboundSchema: z.ZodType<AddItemsRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedItemInput$.inboundSchema),
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
        RequestBody: Array<components.UnifiedItemInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddItemsRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedItemInput$.outboundSchema),
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
export namespace AddItemsResponseBody$ {
    export const inboundSchema: z.ZodType<AddItemsResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedItemOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedItemOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddItemsResponseBody> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedItemOutput$.outboundSchema.optional(),
        }
    );
}

/** @internal */
export namespace AddItemsResponse$ {
    export const inboundSchema: z.ZodType<AddItemsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddItemsResponseBody$.inboundSchema).optional(),
            UnifiedItemOutputs: z.array(components.UnifiedItemOutput$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedItemOutputs: "unifiedItemOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddItemsResponseBody$.Outbound | undefined;
        UnifiedItemOutputs?: Array<components.UnifiedItemOutput$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddItemsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddItemsResponseBody$.outboundSchema).optional(),
            unifiedItemOutputs: z.array(components.UnifiedItemOutput$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedItemOutputs: "UnifiedItemOutputs",
            });
        });
}
