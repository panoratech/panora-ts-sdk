/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddBalanceSheetsRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Accounting software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedBalanceSheetInput>;
};

export type AddBalanceSheetsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedBalanceSheetOutput | undefined;
};

export type AddBalanceSheetsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddBalanceSheetsResponseBody | undefined;
    unifiedBalanceSheetOutputs?: Array<components.UnifiedBalanceSheetOutput> | undefined;
};

/** @internal */
export namespace AddBalanceSheetsRequest$ {
    export const inboundSchema: z.ZodType<AddBalanceSheetsRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedBalanceSheetInput$.inboundSchema),
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
        RequestBody: Array<components.UnifiedBalanceSheetInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddBalanceSheetsRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedBalanceSheetInput$.outboundSchema),
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
export namespace AddBalanceSheetsResponseBody$ {
    export const inboundSchema: z.ZodType<AddBalanceSheetsResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedBalanceSheetOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedBalanceSheetOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddBalanceSheetsResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedBalanceSheetOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddBalanceSheetsResponse$ {
    export const inboundSchema: z.ZodType<AddBalanceSheetsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddBalanceSheetsResponseBody$.inboundSchema).optional(),
            UnifiedBalanceSheetOutputs: z
                .array(components.UnifiedBalanceSheetOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedBalanceSheetOutputs: "unifiedBalanceSheetOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddBalanceSheetsResponseBody$.Outbound | undefined;
        UnifiedBalanceSheetOutputs?:
            | Array<components.UnifiedBalanceSheetOutput$.Outbound>
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddBalanceSheetsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddBalanceSheetsResponseBody$.outboundSchema).optional(),
            unifiedBalanceSheetOutputs: z
                .array(components.UnifiedBalanceSheetOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedBalanceSheetOutputs: "UnifiedBalanceSheetOutputs",
            });
        });
}