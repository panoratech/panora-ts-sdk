/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddPayGroupRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
    unifiedPayGroupInput: components.UnifiedPayGroupInput;
};

export type AddPayGroupResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedPayGroupOutput | undefined;
};

export type AddPayGroupResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddPayGroupResponseBody | undefined;
    unifiedPayGroupOutput?: components.UnifiedPayGroupOutput | undefined;
};

/** @internal */
export namespace AddPayGroupRequest$ {
    export const inboundSchema: z.ZodType<AddPayGroupRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedPayGroupInput: components.UnifiedPayGroupInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedPayGroupInput: "unifiedPayGroupInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedPayGroupInput: components.UnifiedPayGroupInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPayGroupRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedPayGroupInput: components.UnifiedPayGroupInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedPayGroupInput: "UnifiedPayGroupInput",
            });
        });
}

/** @internal */
export namespace AddPayGroupResponseBody$ {
    export const inboundSchema: z.ZodType<AddPayGroupResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPayGroupOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedPayGroupOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPayGroupResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPayGroupOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddPayGroupResponse$ {
    export const inboundSchema: z.ZodType<AddPayGroupResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddPayGroupResponseBody$.inboundSchema).optional(),
            UnifiedPayGroupOutput: components.UnifiedPayGroupOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedPayGroupOutput: "unifiedPayGroupOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddPayGroupResponseBody$.Outbound | undefined;
        UnifiedPayGroupOutput?: components.UnifiedPayGroupOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPayGroupResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddPayGroupResponseBody$.outboundSchema).optional(),
            unifiedPayGroupOutput: components.UnifiedPayGroupOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedPayGroupOutput: "UnifiedPayGroupOutput",
            });
        });
}