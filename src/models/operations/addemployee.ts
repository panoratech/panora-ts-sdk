/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddEmployeeRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
    unifiedEmployeeInput: components.UnifiedEmployeeInput;
};

export type AddEmployeeResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedEmployeeOutput | undefined;
};

export type AddEmployeeResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddEmployeeResponseBody | undefined;
    unifiedEmployeeOutput?: components.UnifiedEmployeeOutput | undefined;
};

/** @internal */
export namespace AddEmployeeRequest$ {
    export const inboundSchema: z.ZodType<AddEmployeeRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedEmployeeInput: components.UnifiedEmployeeInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedEmployeeInput: "unifiedEmployeeInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedEmployeeInput: components.UnifiedEmployeeInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEmployeeRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedEmployeeInput: components.UnifiedEmployeeInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedEmployeeInput: "UnifiedEmployeeInput",
            });
        });
}

/** @internal */
export namespace AddEmployeeResponseBody$ {
    export const inboundSchema: z.ZodType<AddEmployeeResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedEmployeeOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedEmployeeOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEmployeeResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedEmployeeOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddEmployeeResponse$ {
    export const inboundSchema: z.ZodType<AddEmployeeResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddEmployeeResponseBody$.inboundSchema).optional(),
            UnifiedEmployeeOutput: components.UnifiedEmployeeOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedEmployeeOutput: "unifiedEmployeeOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddEmployeeResponseBody$.Outbound | undefined;
        UnifiedEmployeeOutput?: components.UnifiedEmployeeOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEmployeeResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddEmployeeResponseBody$.outboundSchema).optional(),
            unifiedEmployeeOutput: components.UnifiedEmployeeOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedEmployeeOutput: "UnifiedEmployeeOutput",
            });
        });
}
