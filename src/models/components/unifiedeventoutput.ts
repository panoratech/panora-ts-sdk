/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedEventOutput = {};

/** @internal */
export namespace UnifiedEventOutput$ {
    export const inboundSchema: z.ZodType<UnifiedEventOutput, z.ZodTypeDef, unknown> = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedEventOutput> = z.object(
        {}
    );
}
