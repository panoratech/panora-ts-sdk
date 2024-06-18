/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddEventRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
    unifiedEventInput: components.UnifiedEventInput;
};

export type AddEventResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedEventOutput | undefined;
};

export type AddEventResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddEventResponseBody | undefined;
    unifiedEventOutput?: components.UnifiedEventOutput | undefined;
};

/** @internal */
export namespace AddEventRequest$ {
    export const inboundSchema: z.ZodType<AddEventRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedEventInput: components.UnifiedEventInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedEventInput: "unifiedEventInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedEventInput: components.UnifiedEventInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEventRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedEventInput: components.UnifiedEventInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedEventInput: "UnifiedEventInput",
            });
        });
}

/** @internal */
export namespace AddEventResponseBody$ {
    export const inboundSchema: z.ZodType<AddEventResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedEventOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedEventOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEventResponseBody> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedEventOutput$.outboundSchema.optional(),
        }
    );
}

/** @internal */
export namespace AddEventResponse$ {
    export const inboundSchema: z.ZodType<AddEventResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddEventResponseBody$.inboundSchema).optional(),
            UnifiedEventOutput: components.UnifiedEventOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedEventOutput: "unifiedEventOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddEventResponseBody$.Outbound | undefined;
        UnifiedEventOutput?: components.UnifiedEventOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEventResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddEventResponseBody$.outboundSchema).optional(),
            unifiedEventOutput: components.UnifiedEventOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedEventOutput: "UnifiedEventOutput",
            });
        });
}