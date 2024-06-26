/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddMessageRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
    unifiedMessageInput: components.UnifiedMessageInput;
};

export type AddMessageResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedMessageOutput | undefined;
};

export type AddMessageResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddMessageResponseBody | undefined;
    unifiedMessageOutput?: components.UnifiedMessageOutput | undefined;
};

/** @internal */
export namespace AddMessageRequest$ {
    export const inboundSchema: z.ZodType<AddMessageRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedMessageInput: components.UnifiedMessageInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedMessageInput: "unifiedMessageInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedMessageInput: components.UnifiedMessageInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddMessageRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedMessageInput: components.UnifiedMessageInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedMessageInput: "UnifiedMessageInput",
            });
        });
}

/** @internal */
export namespace AddMessageResponseBody$ {
    export const inboundSchema: z.ZodType<AddMessageResponseBody, z.ZodTypeDef, unknown> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedMessageOutput$.inboundSchema.optional(),
        }
    );

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedMessageOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddMessageResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedMessageOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddMessageResponse$ {
    export const inboundSchema: z.ZodType<AddMessageResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddMessageResponseBody$.inboundSchema).optional(),
            UnifiedMessageOutput: components.UnifiedMessageOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedMessageOutput: "unifiedMessageOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddMessageResponseBody$.Outbound | undefined;
        UnifiedMessageOutput?: components.UnifiedMessageOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddMessageResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddMessageResponseBody$.outboundSchema).optional(),
            unifiedMessageOutput: components.UnifiedMessageOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedMessageOutput: "UnifiedMessageOutput",
            });
        });
}
