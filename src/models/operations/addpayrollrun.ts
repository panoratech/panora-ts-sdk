/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddPayrollRunRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
    unifiedPayrollRunInput: components.UnifiedPayrollRunInput;
};

export type AddPayrollRunResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedPayrollRunOutput | undefined;
};

export type AddPayrollRunResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddPayrollRunResponseBody | undefined;
    unifiedPayrollRunOutput?: components.UnifiedPayrollRunOutput | undefined;
};

/** @internal */
export namespace AddPayrollRunRequest$ {
    export const inboundSchema: z.ZodType<AddPayrollRunRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedPayrollRunInput: components.UnifiedPayrollRunInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedPayrollRunInput: "unifiedPayrollRunInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedPayrollRunInput: components.UnifiedPayrollRunInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPayrollRunRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedPayrollRunInput: components.UnifiedPayrollRunInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedPayrollRunInput: "UnifiedPayrollRunInput",
            });
        });
}

/** @internal */
export namespace AddPayrollRunResponseBody$ {
    export const inboundSchema: z.ZodType<AddPayrollRunResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPayrollRunOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedPayrollRunOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPayrollRunResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPayrollRunOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddPayrollRunResponse$ {
    export const inboundSchema: z.ZodType<AddPayrollRunResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddPayrollRunResponseBody$.inboundSchema).optional(),
            UnifiedPayrollRunOutput: components.UnifiedPayrollRunOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedPayrollRunOutput: "unifiedPayrollRunOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddPayrollRunResponseBody$.Outbound | undefined;
        UnifiedPayrollRunOutput?: components.UnifiedPayrollRunOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPayrollRunResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddPayrollRunResponseBody$.outboundSchema).optional(),
            unifiedPayrollRunOutput: components.UnifiedPayrollRunOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedPayrollRunOutput: "UnifiedPayrollRunOutput",
            });
        });
}
