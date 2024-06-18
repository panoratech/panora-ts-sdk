/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type Security = {
    jwt?: string | undefined;
};

/** @internal */
export namespace Security$ {
    export const inboundSchema: z.ZodType<Security, z.ZodTypeDef, unknown> = z
        .object({
            JWT: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                JWT: "jwt",
            });
        });

    export type Outbound = {
        JWT?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Security> = z
        .object({
            jwt: z.string().optional(),
        })
        .transform((v) => {
            return remap$(v, {
                jwt: "JWT",
            });
        });
}