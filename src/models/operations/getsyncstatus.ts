/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetSyncStatusRequest = {
    vertical: string;
};

export type GetSyncStatusResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace GetSyncStatusRequest$ {
    export const inboundSchema: z.ZodType<GetSyncStatusRequest, z.ZodTypeDef, unknown> = z.object({
        vertical: z.string(),
    });

    export type Outbound = {
        vertical: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSyncStatusRequest> = z.object(
        {
            vertical: z.string(),
        }
    );
}

/** @internal */
export namespace GetSyncStatusResponse$ {
    export const inboundSchema: z.ZodType<GetSyncStatusResponse, z.ZodTypeDef, unknown> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                HttpMeta: "httpMeta",
            });
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSyncStatusResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}
