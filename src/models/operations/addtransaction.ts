/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddTransactionRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedTransactionInput: components.UnifiedTransactionInput;
};

export type AddTransactionResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedTransactionOutput | undefined;
};

export type AddTransactionResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddTransactionResponseBody | undefined;
    unifiedTransactionOutput?: components.UnifiedTransactionOutput | undefined;
};

/** @internal */
export namespace AddTransactionRequest$ {
    export const inboundSchema: z.ZodType<AddTransactionRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedTransactionInput: components.UnifiedTransactionInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedTransactionInput: "unifiedTransactionInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedTransactionInput: components.UnifiedTransactionInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTransactionRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedTransactionInput: components.UnifiedTransactionInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedTransactionInput: "UnifiedTransactionInput",
            });
        });
}

/** @internal */
export namespace AddTransactionResponseBody$ {
    export const inboundSchema: z.ZodType<AddTransactionResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTransactionOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedTransactionOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTransactionResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTransactionOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddTransactionResponse$ {
    export const inboundSchema: z.ZodType<AddTransactionResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddTransactionResponseBody$.inboundSchema).optional(),
            UnifiedTransactionOutput: components.UnifiedTransactionOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedTransactionOutput: "unifiedTransactionOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddTransactionResponseBody$.Outbound | undefined;
        UnifiedTransactionOutput?: components.UnifiedTransactionOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTransactionResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddTransactionResponseBody$.outboundSchema).optional(),
            unifiedTransactionOutput:
                components.UnifiedTransactionOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedTransactionOutput: "UnifiedTransactionOutput",
            });
        });
}