/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedExpenseOutput = {};

/** @internal */
export namespace UnifiedExpenseOutput$ {
    export const inboundSchema: z.ZodType<UnifiedExpenseOutput, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedExpenseOutput> = z.object(
        {}
    );
}