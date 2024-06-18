/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetPermissionRequest = {
    /**
     * id of the permission you want to retrieve.
     */
    id: string;
    /**
     * Set to true to include data from the original Filestorage software.
     */
    remoteData?: boolean | undefined;
};

export type GetPermissionResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedPermissionOutput | undefined;
};

export type GetPermissionResponse = {
    httpMeta: components.HTTPMetadata;
    object?: GetPermissionResponseBody | undefined;
};

/** @internal */
export namespace GetPermissionRequest$ {
    export const inboundSchema: z.ZodType<GetPermissionRequest, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPermissionRequest> = z
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
export namespace GetPermissionResponseBody$ {
    export const inboundSchema: z.ZodType<GetPermissionResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPermissionOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedPermissionOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPermissionResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPermissionOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace GetPermissionResponse$ {
    export const inboundSchema: z.ZodType<GetPermissionResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetPermissionResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetPermissionResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetPermissionResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetPermissionResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}
