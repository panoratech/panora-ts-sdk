/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedTaxRateInput = {};

/** @internal */
export namespace UnifiedTaxRateInput$ {
    export const inboundSchema: z.ZodType<UnifiedTaxRateInput, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedTaxRateInput> = z.object(
        {}
    );
}