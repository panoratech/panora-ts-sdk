/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedEmployeeOutput = {};

/** @internal */
export namespace UnifiedEmployeeOutput$ {
    export const inboundSchema: z.ZodType<UnifiedEmployeeOutput, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedEmployeeOutput> =
        z.object({});
}