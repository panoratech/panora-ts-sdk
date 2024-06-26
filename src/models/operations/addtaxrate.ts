/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddTaxRateRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    unifiedTaxRateInput: components.UnifiedTaxRateInput;
};

export type AddTaxRateResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedTaxRateOutput | undefined;
};

export type AddTaxRateResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddTaxRateResponseBody | undefined;
    unifiedTaxRateOutput?: components.UnifiedTaxRateOutput | undefined;
};

/** @internal */
export namespace AddTaxRateRequest$ {
    export const inboundSchema: z.ZodType<AddTaxRateRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedTaxRateInput: components.UnifiedTaxRateInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedTaxRateInput: "unifiedTaxRateInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedTaxRateInput: components.UnifiedTaxRateInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTaxRateRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedTaxRateInput: components.UnifiedTaxRateInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedTaxRateInput: "UnifiedTaxRateInput",
            });
        });
}

/** @internal */
export namespace AddTaxRateResponseBody$ {
    export const inboundSchema: z.ZodType<AddTaxRateResponseBody, z.ZodTypeDef, unknown> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTaxRateOutput$.inboundSchema.optional(),
        }
    );

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedTaxRateOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTaxRateResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTaxRateOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddTaxRateResponse$ {
    export const inboundSchema: z.ZodType<AddTaxRateResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddTaxRateResponseBody$.inboundSchema).optional(),
            UnifiedTaxRateOutput: components.UnifiedTaxRateOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedTaxRateOutput: "unifiedTaxRateOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddTaxRateResponseBody$.Outbound | undefined;
        UnifiedTaxRateOutput?: components.UnifiedTaxRateOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTaxRateResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddTaxRateResponseBody$.outboundSchema).optional(),
            unifiedTaxRateOutput: components.UnifiedTaxRateOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedTaxRateOutput: "UnifiedTaxRateOutput",
            });
        });
}
