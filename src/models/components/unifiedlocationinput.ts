/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedLocationInput = {};

/** @internal */
export namespace UnifiedLocationInput$ {
    export const inboundSchema: z.ZodType<UnifiedLocationInput, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedLocationInput> = z.object(
        {}
    );
}