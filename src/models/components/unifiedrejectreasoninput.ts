/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedRejectReasonInput = {};

/** @internal */
export namespace UnifiedRejectReasonInput$ {
    export const inboundSchema: z.ZodType<UnifiedRejectReasonInput, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedRejectReasonInput> =
        z.object({});
}
