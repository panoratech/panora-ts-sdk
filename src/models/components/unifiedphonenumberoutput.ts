/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedPhoneNumberOutput = {};

/** @internal */
export namespace UnifiedPhoneNumberOutput$ {
    export const inboundSchema: z.ZodType<UnifiedPhoneNumberOutput, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedPhoneNumberOutput> =
        z.object({});
}
