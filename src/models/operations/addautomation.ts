/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddAutomationRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
    unifiedAutomationInput: components.UnifiedAutomationInput;
};

export type AddAutomationResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedAutomationOutput | undefined;
};

export type AddAutomationResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddAutomationResponseBody | undefined;
    unifiedAutomationOutput?: components.UnifiedAutomationOutput | undefined;
};

/** @internal */
export namespace AddAutomationRequest$ {
    export const inboundSchema: z.ZodType<AddAutomationRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedAutomationInput: components.UnifiedAutomationInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedAutomationInput: "unifiedAutomationInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedAutomationInput: components.UnifiedAutomationInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddAutomationRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedAutomationInput: components.UnifiedAutomationInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedAutomationInput: "UnifiedAutomationInput",
            });
        });
}

/** @internal */
export namespace AddAutomationResponseBody$ {
    export const inboundSchema: z.ZodType<AddAutomationResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedAutomationOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedAutomationOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddAutomationResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedAutomationOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddAutomationResponse$ {
    export const inboundSchema: z.ZodType<AddAutomationResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddAutomationResponseBody$.inboundSchema).optional(),
            UnifiedAutomationOutput: components.UnifiedAutomationOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedAutomationOutput: "unifiedAutomationOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddAutomationResponseBody$.Outbound | undefined;
        UnifiedAutomationOutput?: components.UnifiedAutomationOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddAutomationResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddAutomationResponseBody$.outboundSchema).optional(),
            unifiedAutomationOutput: components.UnifiedAutomationOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedAutomationOutput: "UnifiedAutomationOutput",
            });
        });
}
