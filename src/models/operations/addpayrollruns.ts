/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type AddPayrollRunsRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedPayrollRunInput>;
};

export type AddPayrollRunsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedPayrollRunOutput | undefined;
};

export type AddPayrollRunsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddPayrollRunsResponseBody | undefined;
    unifiedPayrollRunOutputs?: Array<components.UnifiedPayrollRunOutput> | undefined;
};

/** @internal */
export namespace AddPayrollRunsRequest$ {
    export const inboundSchema: z.ZodType<AddPayrollRunsRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedPayrollRunInput$.inboundSchema),
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
        RequestBody: Array<components.UnifiedPayrollRunInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPayrollRunsRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedPayrollRunInput$.outboundSchema),
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
export namespace AddPayrollRunsResponseBody$ {
    export const inboundSchema: z.ZodType<AddPayrollRunsResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPayrollRunOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedPayrollRunOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPayrollRunsResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedPayrollRunOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace AddPayrollRunsResponse$ {
    export const inboundSchema: z.ZodType<AddPayrollRunsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddPayrollRunsResponseBody$.inboundSchema).optional(),
            UnifiedPayrollRunOutputs: z
                .array(components.UnifiedPayrollRunOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedPayrollRunOutputs: "unifiedPayrollRunOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddPayrollRunsResponseBody$.Outbound | undefined;
        UnifiedPayrollRunOutputs?: Array<components.UnifiedPayrollRunOutput$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddPayrollRunsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddPayrollRunsResponseBody$.outboundSchema).optional(),
            unifiedPayrollRunOutputs: z
                .array(components.UnifiedPayrollRunOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedPayrollRunOutputs: "UnifiedPayrollRunOutputs",
            });
        });
}
