/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedBenefitOutput = {};

/** @internal */
export namespace UnifiedBenefitOutput$ {
    export const inboundSchema: z.ZodType<UnifiedBenefitOutput, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedBenefitOutput> = z.object(
        {}
    );
}