/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddTimeoffBalancesRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedTimeoffBalanceInput>;
};

export type AddTimeoffBalancesResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedTimeoffBalanceOutput | undefined;
};

export type AddTimeoffBalancesResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddTimeoffBalancesResponseBody | undefined;
    unifiedTimeoffBalanceOutputs?: Array<components.UnifiedTimeoffBalanceOutput> | undefined;
};

/** @internal */
export namespace AddTimeoffBalancesRequest$ {
    export const inboundSchema: z.ZodType<AddTimeoffBalancesRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedTimeoffBalanceInput$.inboundSchema),
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
        RequestBody: Array<components.UnifiedTimeoffBalanceInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTimeoffBalancesRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedTimeoffBalanceInput$.outboundSchema),
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
export namespace AddTimeoffBalancesResponseBody$ {
    export const inboundSchema: z.ZodType<AddTimeoffBalancesResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTimeoffBalanceOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedTimeoffBalanceOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTimeoffBalancesResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedTimeoffBalanceOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddTimeoffBalancesResponse$ {
    export const inboundSchema: z.ZodType<AddTimeoffBalancesResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddTimeoffBalancesResponseBody$.inboundSchema).optional(),
            UnifiedTimeoffBalanceOutputs: z
                .array(components.UnifiedTimeoffBalanceOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedTimeoffBalanceOutputs: "unifiedTimeoffBalanceOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddTimeoffBalancesResponseBody$.Outbound | undefined;
        UnifiedTimeoffBalanceOutputs?:
            | Array<components.UnifiedTimeoffBalanceOutput$.Outbound>
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddTimeoffBalancesResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddTimeoffBalancesResponseBody$.outboundSchema).optional(),
            unifiedTimeoffBalanceOutputs: z
                .array(components.UnifiedTimeoffBalanceOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedTimeoffBalanceOutputs: "UnifiedTimeoffBalanceOutputs",
            });
        });
}
