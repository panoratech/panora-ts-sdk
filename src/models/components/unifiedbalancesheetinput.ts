/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedBalanceSheetInput = {};

/** @internal */
export namespace UnifiedBalanceSheetInput$ {
    export const inboundSchema: z.ZodType<UnifiedBalanceSheetInput, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedBalanceSheetInput> =
        z.object({});
}
