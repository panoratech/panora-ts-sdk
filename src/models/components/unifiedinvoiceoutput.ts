/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedInvoiceOutput = {};

/** @internal */
export namespace UnifiedInvoiceOutput$ {
    export const inboundSchema: z.ZodType<UnifiedInvoiceOutput, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedInvoiceOutput> = z.object(
        {}
    );
}