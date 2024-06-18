/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type GetMagicLinkRequest = {
    id: string;
};

export type GetMagicLinkResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace GetMagicLinkRequest$ {
    export const inboundSchema: z.ZodType<GetMagicLinkRequest, z.ZodTypeDef, unknown> = z.object({
        id: z.string(),
    });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMagicLinkRequest> = z.object({
        id: z.string(),
    });
}

/** @internal */
export namespace GetMagicLinkResponse$ {
    export const inboundSchema: z.ZodType<GetMagicLinkResponse, z.ZodTypeDef, unknown> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMagicLinkResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}