/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetEmailRequest = {
    /**
     * id of the email you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Marketingautomation software.
     */
    remoteData?: boolean | undefined;
};

export type GetEmailResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedEmailOutput | undefined;
};

export type GetEmailResponse = {
    httpMeta: components.HTTPMetadata;
    object?: GetEmailResponseBody | undefined;
};

/** @internal */
export namespace GetEmailRequest$ {
    export const inboundSchema: z.ZodType<GetEmailRequest, z.ZodTypeDef, unknown> = z
        .object({
            id: z.string(),
            remote_data: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                remote_data: "remoteData",
            });
        });

    export type Outbound = {
        id: string;
        remote_data?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEmailRequest> = z
        .object({
            id: z.string(),
            remoteData: z.boolean().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                remoteData: "remote_data",
            });
        });
}

/** @internal */
export namespace GetEmailResponseBody$ {
    export const inboundSchema: z.ZodType<GetEmailResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedEmailOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedEmailOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEmailResponseBody> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedEmailOutput$.outboundSchema.optional(),
        }
    );
}

/** @internal */
export namespace GetEmailResponse$ {
    export const inboundSchema: z.ZodType<GetEmailResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetEmailResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetEmailResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEmailResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetEmailResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}