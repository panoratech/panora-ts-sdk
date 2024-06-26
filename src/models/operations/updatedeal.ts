/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UpdateDealRequest = {
    id: string;
};

export type UpdateDealResponseBody = {
    message?: string | undefined;
    error?: string | undefined;
    statusCode: number;
    data?: components.UnifiedDealOutput | undefined;
};

export type UpdateDealResponse = {
    httpMeta: components.HTTPMetadata;
    object?: UpdateDealResponseBody | undefined;
};

/** @internal */
export namespace UpdateDealRequest$ {
    export const inboundSchema: z.ZodType<UpdateDealRequest, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
    });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateDealRequest> = z.object({
        id: z.string(),
    });
}

/** @internal */
export namespace UpdateDealResponseBody$ {
    export const inboundSchema: z.ZodType<UpdateDealResponseBody, z.ZodTypeDef, unknown> = z.object(
        {
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedDealOutput$.inboundSchema.optional(),
        }
    );

    export type Outbound = {
        message?: string | undefined;
        error?: string | undefined;
        statusCode: number;
        data?: components.UnifiedDealOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateDealResponseBody> =
        z.object({
            message: z.string().optional(),
            error: z.string().optional(),
            statusCode: z.number(),
            data: components.UnifiedDealOutput$.outboundSchema.optional(),
        });
}

/** @internal */
export namespace UpdateDealResponse$ {
    export const inboundSchema: z.ZodType<UpdateDealResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => UpdateDealResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: UpdateDealResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UpdateDealResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => UpdateDealResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}
