/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type UnifiedMessageInput = {};

/** @internal */
export namespace UnifiedMessageInput$ {
    export const inboundSchema: z.ZodType<UnifiedMessageInput, z.ZodTypeDef, unknown> = z.object(
        {}
    );

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedMessageInput> = z.object(
        {}
    );
}
