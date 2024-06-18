/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as components from "../components";
import * as z from "zod";

export type UpdateConnectionStrategyResponse = {
    httpMeta: components.HTTPMetadata;
};

/** @internal */
export namespace UpdateConnectionStrategyResponse$ {
    export const inboundSchema: z.ZodType<UpdateConnectionStrategyResponse, z.ZodTypeDef, unknown> =
        z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UpdateConnectionStrategyResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
        })
        .transform((v) => {
            return remap$(v, {
                httpMeta: "HttpMeta",
            });
        });
}
