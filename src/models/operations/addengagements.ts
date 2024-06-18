/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddEngagementsRequest = {
    /**
     * The connection token
     */
    xConnectionToken: string;
    /**
     * Set to true to include data from the original Crm software.
     */
    remoteData?: boolean | undefined;
    requestBody: Array<components.UnifiedEngagementInput>;
};

export type AddEngagementsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedEngagementOutput | undefined;
};

export type AddEngagementsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddEngagementsResponseBody | undefined;
    unifiedEngagementOutputs?: Array<components.UnifiedEngagementOutput> | undefined;
};

/** @internal */
export namespace AddEngagementsRequest$ {
    export const inboundSchema: z.ZodType<AddEngagementsRequest, z.ZodTypeDef, unknown> = z
        .object({
            "x-connection-token": z.string(),
            remote_data: z.boolean().optional(),
            RequestBody: z.array(components.UnifiedEngagementInput$.inboundSchema),
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
        RequestBody: Array<components.UnifiedEngagementInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEngagementsRequest> = z
        .object({
            xConnectionToken: z.string(),
            remoteData: z.boolean().optional(),
            requestBody: z.array(components.UnifiedEngagementInput$.outboundSchema),
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
export namespace AddEngagementsResponseBody$ {
    export const inboundSchema: z.ZodType<AddEngagementsResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedEngagementOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedEngagementOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEngagementsResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedEngagementOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddEngagementsResponse$ {
    export const inboundSchema: z.ZodType<AddEngagementsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddEngagementsResponseBody$.inboundSchema).optional(),
            UnifiedEngagementOutputs: z
                .array(components.UnifiedEngagementOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedEngagementOutputs: "unifiedEngagementOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddEngagementsResponseBody$.Outbound | undefined;
        UnifiedEngagementOutputs?: Array<components.UnifiedEngagementOutput$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEngagementsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddEngagementsResponseBody$.outboundSchema).optional(),
            unifiedEngagementOutputs: z
                .array(components.UnifiedEngagementOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedEngagementOutputs: "UnifiedEngagementOutputs",
            });
        });
}