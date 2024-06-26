/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddFileRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Filestorage software.
     */
    remoteData?: boolean | undefined;
    unifiedFileInput: components.UnifiedFileInput;
};

export type AddFileResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedFileOutput | undefined;
};

export type AddFileResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddFileResponseBody | undefined;
    unifiedFileOutput?: components.UnifiedFileOutput | undefined;
};

/** @internal */
export namespace AddFileRequest$ {
    export const inboundSchema: z.ZodType<AddFileRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedFileInput: components.UnifiedFileInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedFileInput: "unifiedFileInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedFileInput: components.UnifiedFileInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddFileRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedFileInput: components.UnifiedFileInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedFileInput: "UnifiedFileInput",
            });
        });
}

/** @internal */
export namespace AddFileResponseBody$ {
    export const inboundSchema: z.ZodType<AddFileResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedFileOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedFileOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddFileResponseBody> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedFileOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AddFileResponse$ {
    export const inboundSchema: z.ZodType<AddFileResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddFileResponseBody$.inboundSchema).optional(),
            UnifiedFileOutput: components.UnifiedFileOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedFileOutput: "unifiedFileOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddFileResponseBody$.Outbound | undefined;
        UnifiedFileOutput?: components.UnifiedFileOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddFileResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddFileResponseBody$.outboundSchema).optional(),
            unifiedFileOutput: components.UnifiedFileOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedFileOutput: "UnifiedFileOutput",
            });
        });
}
