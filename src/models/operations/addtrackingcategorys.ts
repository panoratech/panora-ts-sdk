/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddTrackingCategorysRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedTrackingCategoryInput>;
};

export type AddTrackingCategorysResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedTrackingCategoryOutput | undefined;
};

export type AddTrackingCategorysResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddTrackingCategorysResponseBody | undefined;
    unifiedTrackingCategoryOutputs?: Array<components.UnifiedTrackingCategoryOutput> | undefined;
};

/** @internal */
export namespace AddTrackingCategorysRequest$ {
    export const inboundSchema: z.ZodType<AddTrackingCategorysRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedTrackingCategoryInput$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                connection_token: "connectionToken",
                remote_data: "remoteData",
                "x-connection-token": "xConnectionToken",
                RequestBody: "requestBody",
            });
        });

    export type Outbound = {
        connection_token: string;
        remote_data?: boolean | undefined;
        "x-connection-token": string;
        RequestBody: Array<components.UnifiedTrackingCategoryInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTrackingCategorysRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedTrackingCategoryInput$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                connectionToken: "connection_token",
                remoteData: "remote_data",
                xConnectionToken: "x-connection-token",
                requestBody: "RequestBody",
            });
        });
}

/** @internal */
export namespace AddTrackingCategorysResponseBody$ {
    export const inboundSchema: z.ZodType<AddTrackingCategorysResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTrackingCategoryOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedTrackingCategoryOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddTrackingCategorysResponseBody
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedTrackingCategoryOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AddTrackingCategorysResponse$ {
    export const inboundSchema: z.ZodType<AddTrackingCategorysResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddTrackingCategorysResponseBody$.inboundSchema).optional(),
            UnifiedTrackingCategoryOutputs: z
                .array(components.UnifiedTrackingCategoryOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedTrackingCategoryOutputs: "unifiedTrackingCategoryOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddTrackingCategorysResponseBody$.Outbound | undefined;
        UnifiedTrackingCategoryOutputs?:
            | Array<components.UnifiedTrackingCategoryOutput$.Outbound>
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTrackingCategorysResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddTrackingCategorysResponseBody$.outboundSchema).optional(),
            unifiedTrackingCategoryOutputs: z
                .array(components.UnifiedTrackingCategoryOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedTrackingCategoryOutputs: "UnifiedTrackingCategoryOutputs",
            });
        });
}
