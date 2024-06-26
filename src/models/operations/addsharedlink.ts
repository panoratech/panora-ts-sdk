/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddSharedlinkRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Filestorage software.
     */
    remoteData?: boolean | undefined;
    unifiedSharedLinkInput: components.UnifiedSharedLinkInput;
};

export type AddSharedlinkResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedSharedLinkOutput | undefined;
};

export type AddSharedlinkResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddSharedlinkResponseBody | undefined;
    unifiedSharedLinkOutput?: components.UnifiedSharedLinkOutput | undefined;
};

/** @internal */
export namespace AddSharedlinkRequest$ {
    export const inboundSchema: z.ZodType<AddSharedlinkRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            UnifiedSharedLinkInput: components.UnifiedSharedLinkInput$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                "x-connection-token": "xConnectionToken",
                remote_data: "remoteData",
                UnifiedSharedLinkInput: "unifiedSharedLinkInput",
            });
        });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
        UnifiedSharedLinkInput: components.UnifiedSharedLinkInput$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddSharedlinkRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            unifiedSharedLinkInput: components.UnifiedSharedLinkInput$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
                unifiedSharedLinkInput: "UnifiedSharedLinkInput",
            });
        });
}

/** @internal */
export namespace AddSharedlinkResponseBody$ {
    export const inboundSchema: z.ZodType<AddSharedlinkResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedSharedLinkOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedSharedLinkOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddSharedlinkResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedSharedLinkOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddSharedlinkResponse$ {
    export const inboundSchema: z.ZodType<AddSharedlinkResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddSharedlinkResponseBody$.inboundSchema).optional(),
            UnifiedSharedLinkOutput: components.UnifiedSharedLinkOutput$.inboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedSharedLinkOutput: "unifiedSharedLinkOutput",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddSharedlinkResponseBody$.Outbound | undefined;
        UnifiedSharedLinkOutput?: components.UnifiedSharedLinkOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddSharedlinkResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddSharedlinkResponseBody$.outboundSchema).optional(),
            unifiedSharedLinkOutput: components.UnifiedSharedLinkOutput$.outboundSchema.optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedSharedLinkOutput: "UnifiedSharedLinkOutput",
            });
        });
}
