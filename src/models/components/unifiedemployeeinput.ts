/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedEmployeeInput = {};

/** @internal */
export namespace UnifiedEmployeeInput$ {
    export const inboundSchema: z.ZodType<UnifiedEmployeeInput, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedEmployeeInput> = z.object(
        {}
    );
}
