/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedTimeoffOutput = {};

/** @internal */
export namespace UnifiedTimeoffOutput$ {
    export const inboundSchema: z.ZodType<UnifiedTimeoffOutput, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedTimeoffOutput> = z.object(
        {}
    );
}