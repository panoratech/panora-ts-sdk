/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetItemsRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type GetItemsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedItemOutput | undefined;
};

export type GetItemsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: GetItemsResponseBody | undefined;
};

/** @internal */
export namespace GetItemsRequest$ {
    export const inboundSchema: z.ZodType<GetItemsRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetItemsRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
            });
        });
}

/** @internal */
export namespace GetItemsResponseBody$ {
    export const inboundSchema: z.ZodType<GetItemsResponseBody, z.ZodTypeDef, unknown> = z.object({
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetItemsResponseBody> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedItemOutput$.outboundSchema.optional(),
        }
    );
}

/** @internal */
export namespace GetItemsResponse$ {
    export const inboundSchema: z.ZodType<GetItemsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetItemsResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetItemsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetItemsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetItemsResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}