/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddDealRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean | undefined;
    unifiedDealInput: components.UnifiedDealInput;
};

export type AddDealResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedDealOutput | undefined;
};

export type AddDealResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddDealResponseBody | undefined;
    unifiedDealOutput?: components.UnifiedDealOutput | undefined;
};

/** @internal */
export namespace AddDealRequest$ {
    export const inboundSchema: z.ZodType<AddDealRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedDealInput: components.UnifiedDealInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedDealInput: "unifiedDealInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedDealInput: components.UnifiedDealInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddDealRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedDealInput: components.UnifiedDealInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedDealInput: "UnifiedDealInput",
            });
        });
}

/** @internal */
export namespace AddDealResponseBody$ {
    export const inboundSchema: z.ZodType<AddDealResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedDealOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedDealOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddDealResponseBody> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedDealOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AddDealResponse$ {
    export const inboundSchema: z.ZodType<AddDealResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddDealResponseBody$.inboundSchema).optional(),
            UnifiedDealOutput: components.UnifiedDealOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedDealOutput: "unifiedDealOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddDealResponseBody$.Outbound | undefined;
        UnifiedDealOutput?: components.UnifiedDealOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddDealResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddDealResponseBody$.outboundSchema).optional(),
            unifiedDealOutput: components.UnifiedDealOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedDealOutput: "UnifiedDealOutput",
            });
        });
}
