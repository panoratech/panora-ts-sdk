/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddEeocsRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
    unifiedEeocsInput: components.UnifiedEeocsInput;
};

export type AddEeocsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedEeocsOutput | undefined;
};

export type AddEeocsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddEeocsResponseBody | undefined;
    unifiedEeocsOutput?: components.UnifiedEeocsOutput | undefined;
};

/** @internal */
export namespace AddEeocsRequest$ {
    export const inboundSchema: z.ZodType<AddEeocsRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedEeocsInput: components.UnifiedEeocsInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedEeocsInput: "unifiedEeocsInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedEeocsInput: components.UnifiedEeocsInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEeocsRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedEeocsInput: components.UnifiedEeocsInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedEeocsInput: "UnifiedEeocsInput",
            });
        });
}

/** @internal */
export namespace AddEeocsResponseBody$ {
    export const inboundSchema: z.ZodType<AddEeocsResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedEeocsOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedEeocsOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEeocsResponseBody> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedEeocsOutput$.outboundSchema.optional(),
        }
    );
}

/** @internal */
export namespace AddEeocsResponse$ {
    export const inboundSchema: z.ZodType<AddEeocsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddEeocsResponseBody$.inboundSchema).optional(),
            UnifiedEeocsOutput: components.UnifiedEeocsOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedEeocsOutput: "unifiedEeocsOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddEeocsResponseBody$.Outbound | undefined;
        UnifiedEeocsOutput?: components.UnifiedEeocsOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEeocsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddEeocsResponseBody$.outboundSchema).optional(),
            unifiedEeocsOutput: components.UnifiedEeocsOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedEeocsOutput: "UnifiedEeocsOutput",
            });
        });
}
