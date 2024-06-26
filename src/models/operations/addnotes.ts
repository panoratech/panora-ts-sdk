/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddNotesRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean | undefined;
    requestBody: Array<components.UnifiedNoteInput>;
};

export type AddNotesResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedNoteOutput | undefined;
};

export type AddNotesResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddNotesResponseBody | undefined;
    unifiedNoteOutputs?: Array<components.UnifiedNoteOutput> | undefined;
};

/** @internal */
export namespace AddNotesRequest$ {
    export const inboundSchema: z.ZodType<AddNotesRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            RequestBody: z.array(components.UnifiedNoteInput$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        RequestBody: Array<components.UnifiedNoteInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddNotesRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            requestBody: z.array(components.UnifiedNoteInput$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace AddNotesResponseBody$ {
    export const inboundSchema: z.ZodType<AddNotesResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedNoteOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedNoteOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddNotesResponseBody> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedNoteOutput$.outboundSchema.optional(),
        }
    );
}

/** @internal */
export namespace AddNotesResponse$ {
    export const inboundSchema: z.ZodType<AddNotesResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddNotesResponseBody$.inboundSchema).optional(),
            UnifiedNoteOutputs: z.array(components.UnifiedNoteOutput$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedNoteOutputs: "unifiedNoteOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddNotesResponseBody$.Outbound | undefined;
        UnifiedNoteOutputs?: Array<components.UnifiedNoteOutput$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddNotesResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddNotesResponseBody$.outboundSchema).optional(),
            unifiedNoteOutputs: z.array(components.UnifiedNoteOutput$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedNoteOutputs: "UnifiedNoteOutputs",
            });
        });
}
