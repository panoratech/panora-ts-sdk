/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddMarketingAutomationUserRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
    unifiedUserInput: components.UnifiedUserInput;
};

export type AddMarketingAutomationUserResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedUserOutput | undefined;
};

export type AddMarketingAutomationUserResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddMarketingAutomationUserResponseBody | undefined;
    unifiedUserOutput?: components.UnifiedUserOutput | undefined;
};

/** @internal */
export namespace AddMarketingAutomationUserRequest$ {
    export const inboundSchema: z.ZodType<
        AddMarketingAutomationUserRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedUserInput: components.UnifiedUserInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedUserInput: "unifiedUserInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedUserInput: components.UnifiedUserInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddMarketingAutomationUserRequest
    > = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedUserInput: components.UnifiedUserInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedUserInput: "UnifiedUserInput",
            });
        });
}

/** @internal */
export namespace AddMarketingAutomationUserResponseBody$ {
    export const inboundSchema: z.ZodType<
        AddMarketingAutomationUserResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedUserOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedUserOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddMarketingAutomationUserResponseBody
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedUserOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AddMarketingAutomationUserResponse$ {
    export const inboundSchema: z.ZodType<
        AddMarketingAutomationUserResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddMarketingAutomationUserResponseBody$.inboundSchema).optional(),
            UnifiedUserOutput: components.UnifiedUserOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedUserOutput: "unifiedUserOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddMarketingAutomationUserResponseBody$.Outbound | undefined;
        UnifiedUserOutput?: components.UnifiedUserOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddMarketingAutomationUserResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddMarketingAutomationUserResponseBody$.outboundSchema).optional(),
            unifiedUserOutput: components.UnifiedUserOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedUserOutput: "UnifiedUserOutput",
            });
        });
}