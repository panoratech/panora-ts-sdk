/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetEeocsRequest = {
    /**
     * id of the eeocs you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Ats software.
     */
    remoteData?: boolean | undefined;
};

export type GetEeocsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedEeocsOutput | undefined;
};

export type GetEeocsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: GetEeocsResponseBody | undefined;
};

/** @internal */
export namespace GetEeocsRequest$ {
    export const inboundSchema: z.ZodType<GetEeocsRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEeocsRequest> = z
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
export namespace GetEeocsResponseBody$ {
    export const inboundSchema: z.ZodType<GetEeocsResponseBody, z.ZodTypeDef, unknown> = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedEeocsOutput$.inboundSchema.optional(),
    });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedEeocsOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEeocsResponseBody> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedEeocsOutput$.outboundSchema.optional(),
        }
    );
}

/** @internal */
export namespace GetEeocsResponse$ {
    export const inboundSchema: z.ZodType<GetEeocsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetEeocsResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetEeocsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetEeocsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetEeocsResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}