/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedCandidateInput = {};

/** @internal */
export namespace UnifiedCandidateInput$ {
    export const inboundSchema: z.ZodType<UnifiedCandidateInput, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedCandidateInput> =
        z.object({});
}