/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetTimeoffRequest = {
    /**
     * id of the timeoff you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
};

export type GetTimeoffResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedTimeoffOutput | undefined;
};

export type GetTimeoffResponse = {
    httpMeta: components.HTTPMetadata;
    object?: GetTimeoffResponseBody | undefined;
};

/** @internal */
export namespace GetTimeoffRequest$ {
    export const inboundSchema: z.ZodType<GetTimeoffRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTimeoffRequest> = z
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
export namespace GetTimeoffResponseBody$ {
    export const inboundSchema: z.ZodType<GetTimeoffResponseBody, z.ZodTypeDef, unknown> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTimeoffOutput$.inboundSchema.optional(),
        }
    );

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedTimeoffOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTimeoffResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTimeoffOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace GetTimeoffResponse$ {
    export const inboundSchema: z.ZodType<GetTimeoffResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetTimeoffResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetTimeoffResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetTimeoffResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetTimeoffResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}