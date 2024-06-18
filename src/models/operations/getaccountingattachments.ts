/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetAccountingAttachmentsRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
};

export type GetAccountingAttachmentsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedAttachmentOutput | undefined;
};

export type GetAccountingAttachmentsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: GetAccountingAttachmentsResponseBody | undefined;
};

/** @internal */
export namespace GetAccountingAttachmentsRequest$ {
    export const inboundSchema: z.ZodType<GetAccountingAttachmentsRequest, z.ZodTypeDef, unknown> =
        z
            .object({
                "x-connection-token": z.string(),
                remote_data: z.boolean().optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    "x-connection-token": "xConnectionToken",
                    remote_data: "remoteData",
                });
            });

    export type Outbound = {
        "x-connection-token": string;
        remote_data?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingAttachmentsRequest
    > = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                xConnectionToken: "x-connection-token",
                remoteData: "remote_data",
            });
        });
}

/** @internal */
export namespace GetAccountingAttachmentsResponseBody$ {
    export const inboundSchema: z.ZodType<
        GetAccountingAttachmentsResponseBody,
        z.ZodTypeDef,
        unknown
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedAttachmentOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedAttachmentOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingAttachmentsResponseBody
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedAttachmentOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace GetAccountingAttachmentsResponse$ {
    export const inboundSchema: z.ZodType<GetAccountingAttachmentsResponse, z.ZodTypeDef, unknown> =
        z
            .object({
                HttpMeta: components.HTTPMetadata$.inboundSchema,
                object: z
                    .lazy(() => GetAccountingAttachmentsResponseBody$.inboundSchema)
                    .optional(),
            })
            .transform((v) => {
                return remap$(v, {
                    HttpMeta: "httpMeta",
                });
            });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetAccountingAttachmentsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetAccountingAttachmentsResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetAccountingAttachmentsResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}