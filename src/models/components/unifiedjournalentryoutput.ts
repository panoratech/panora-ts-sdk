/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedJournalEntryOutput = {};

/** @internal */
export namespace UnifiedJournalEntryOutput$ {
    export const inboundSchema: z.ZodType<UnifiedJournalEntryOutput, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedJournalEntryOutput> =
        z.object({});
}