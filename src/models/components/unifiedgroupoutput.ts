/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedGroupOutput = {};

/** @internal */
export namespace UnifiedGroupOutput$ {
    export const inboundSchema: z.ZodType<UnifiedGroupOutput, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedGroupOutput> = z.object(
        {}
    );
}
