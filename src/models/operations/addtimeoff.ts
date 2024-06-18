/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddTimeoffRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
    unifiedTimeoffInput: components.UnifiedTimeoffInput;
};

export type AddTimeoffResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedTimeoffOutput | undefined;
};

export type AddTimeoffResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddTimeoffResponseBody | undefined;
    unifiedTimeoffOutput?: components.UnifiedTimeoffOutput | undefined;
};

/** @internal */
export namespace AddTimeoffRequest$ {
    export const inboundSchema: z.ZodType<AddTimeoffRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedTimeoffInput: components.UnifiedTimeoffInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedTimeoffInput: "unifiedTimeoffInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedTimeoffInput: components.UnifiedTimeoffInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTimeoffRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedTimeoffInput: components.UnifiedTimeoffInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedTimeoffInput: "UnifiedTimeoffInput",
            });
        });
}

/** @internal */
export namespace AddTimeoffResponseBody$ {
    export const inboundSchema: z.ZodType<AddTimeoffResponseBody, z.ZodTypeDef, unknown> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTimeoffOutput$.inboundSchema.optional(),
        }
    );

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedTimeoffOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTimeoffResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTimeoffOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddTimeoffResponse$ {
    export const inboundSchema: z.ZodType<AddTimeoffResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddTimeoffResponseBody$.inboundSchema).optional(),
            UnifiedTimeoffOutput: components.UnifiedTimeoffOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedTimeoffOutput: "unifiedTimeoffOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddTimeoffResponseBody$.Outbound | undefined;
        UnifiedTimeoffOutput?: components.UnifiedTimeoffOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTimeoffResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddTimeoffResponseBody$.outboundSchema).optional(),
            unifiedTimeoffOutput: components.UnifiedTimeoffOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedTimeoffOutput: "UnifiedTimeoffOutput",
            });
        });
}