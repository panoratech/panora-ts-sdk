/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddActivitysRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedActivityInput>;
};

export type AddActivitysResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedActivityOutput | undefined;
};

export type AddActivitysResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddActivitysResponseBody | undefined;
    unifiedActivityOutputs?: Array<components.UnifiedActivityOutput> | undefined;
};

/** @internal */
export namespace AddActivitysRequest$ {
    export const inboundSchema: z.ZodType<AddActivitysRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedActivityInput$.inboundSchema),
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
        RequestBody: Array<components.UnifiedActivityInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddActivitysRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedActivityInput$.outboundSchema),
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
export namespace AddActivitysResponseBody$ {
    export const inboundSchema: z.ZodType<AddActivitysResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedActivityOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedActivityOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddActivitysResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedActivityOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddActivitysResponse$ {
    export const inboundSchema: z.ZodType<AddActivitysResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddActivitysResponseBody$.inboundSchema).optional(),
            UnifiedActivityOutputs: z
                .array(components.UnifiedActivityOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedActivityOutputs: "unifiedActivityOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddActivitysResponseBody$.Outbound | undefined;
        UnifiedActivityOutputs?: Array<components.UnifiedActivityOutput$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddActivitysResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddActivitysResponseBody$.outboundSchema).optional(),
            unifiedActivityOutputs: z
                .array(components.UnifiedActivityOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedActivityOutputs: "UnifiedActivityOutputs",
            });
        });
}