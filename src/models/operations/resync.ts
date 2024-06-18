/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type ResyncRequest = {
    vertical: string;
};

export type ResyncResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace ResyncRequest$ {
    export const inboundSchema: z.ZodType<ResyncRequest, z.ZodTypeDef, unknown> = z.object({
        vertical: z.string(),
    });

    export type Outbound = {
        vertical: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResyncRequest> = z.object({
        vertical: z.string(),
    });
}

/** @internal */
export namespace ResyncResponse$ {
    export const inboundSchema: z.ZodType<ResyncResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ResyncResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}