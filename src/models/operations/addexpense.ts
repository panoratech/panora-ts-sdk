/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddExpenseRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedExpenseInput: components.UnifiedExpenseInput;
};

export type AddExpenseResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedExpenseOutput | undefined;
};

export type AddExpenseResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddExpenseResponseBody | undefined;
    unifiedExpenseOutput?: components.UnifiedExpenseOutput | undefined;
};

/** @internal */
export namespace AddExpenseRequest$ {
    export const inboundSchema: z.ZodType<AddExpenseRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedExpenseInput: components.UnifiedExpenseInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedExpenseInput: "unifiedExpenseInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedExpenseInput: components.UnifiedExpenseInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddExpenseRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedExpenseInput: components.UnifiedExpenseInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedExpenseInput: "UnifiedExpenseInput",
            });
        });
}

/** @internal */
export namespace AddExpenseResponseBody$ {
    export const inboundSchema: z.ZodType<AddExpenseResponseBody, z.ZodTypeDef, unknown> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedExpenseOutput$.inboundSchema.optional(),
        }
    );

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedExpenseOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddExpenseResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedExpenseOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddExpenseResponse$ {
    export const inboundSchema: z.ZodType<AddExpenseResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddExpenseResponseBody$.inboundSchema).optional(),
            UnifiedExpenseOutput: components.UnifiedExpenseOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedExpenseOutput: "unifiedExpenseOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddExpenseResponseBody$.Outbound | undefined;
        UnifiedExpenseOutput?: components.UnifiedExpenseOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddExpenseResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddExpenseResponseBody$.outboundSchema).optional(),
            unifiedExpenseOutput: components.UnifiedExpenseOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedExpenseOutput: "UnifiedExpenseOutput",
            });
        });
}