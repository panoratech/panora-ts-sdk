/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type AddEmployerBenefitsRequest = {
    connectionToken: string;
    /**
     * Set to true to include data from the original Hris software.
     */
    remoteData?: boolean | undefined;
    /**
     * The connection token
     */
    xConnectionToken: string;
    requestBody: Array<components.UnifiedEmployerBenefitInput>;
};

export type AddEmployerBenefitsResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedEmployerBenefitOutput | undefined;
};

export type AddEmployerBenefitsResponse = {
    httpMeta: components.HTTPMetadata;
    object?: AddEmployerBenefitsResponseBody | undefined;
    unifiedEmployerBenefitOutputs?: Array<components.UnifiedEmployerBenefitOutput> | undefined;
};

/** @internal */
export namespace AddEmployerBenefitsRequest$ {
    export const inboundSchema: z.ZodType<AddEmployerBenefitsRequest, z.ZodTypeDef, unknown> = z
        .object({
            connection_token: z.string(),
            remote_data: z.boolean().optional(),
            "x-connection-token": z.string(),
            RequestBody: z.array(components.UnifiedEmployerBenefitInput$.inboundSchema),
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
        RequestBody: Array<components.UnifiedEmployerBenefitInput$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEmployerBenefitsRequest> = z
        .object({
            connectionToken: z.string(),
            remoteData: z.boolean().optional(),
            xConnectionToken: z.string(),
            requestBody: z.array(components.UnifiedEmployerBenefitInput$.outboundSchema),
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
export namespace AddEmployerBenefitsResponseBody$ {
    export const inboundSchema: z.ZodType<AddEmployerBenefitsResponseBody, z.ZodTypeDef, unknown> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedEmployerBenefitOutput$.inboundSchema.optional(),
        });

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedEmployerBenefitOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        AddEmployerBenefitsResponseBody
    > = z.object({
        message: z.string().optional(),
        error: z.string().optional(),
        statusCode: z.number(),
        data: components.UnifiedEmployerBenefitOutput$.outboundSchema.optional(),
    });
}

/** @internal */
export namespace AddEmployerBenefitsResponse$ {
    export const inboundSchema: z.ZodType<AddEmployerBenefitsResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AddEmployerBenefitsResponseBody$.inboundSchema).optional(),
            UnifiedEmployerBenefitOutputs: z
                .array(components.UnifiedEmployerBenefitOutput$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
                UnifiedEmployerBenefitOutputs: "unifiedEmployerBenefitOutputs",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AddEmployerBenefitsResponseBody$.Outbound | undefined;
        UnifiedEmployerBenefitOutputs?:
            | Array<components.UnifiedEmployerBenefitOutput$.Outbound>
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AddEmployerBenefitsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AddEmployerBenefitsResponseBody$.outboundSchema).optional(),
            unifiedEmployerBenefitOutputs: z
                .array(components.UnifiedEmployerBenefitOutput$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
                unifiedEmployerBenefitOutputs: "UnifiedEmployerBenefitOutputs",
            });
        });
}