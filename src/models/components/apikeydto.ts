/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ApiKeyDto = {
    projectId: string;
    userId: string;
    keyName: string;
};

/** @internal */
export namespace ApiKeyDto$ {
    export const inboundSchema: z.ZodType<ApiKeyDto, z.ZodTypeDef, unknown> = z.object({
        projectId: z.string(),
        userId: z.string(),
        keyName: z.string(),
    });

    export type Outbound = {
        projectId: string;
        userId: string;
        keyName: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ApiKeyDto> = z.object({
        projectId: z.string(),
        userId: z.string(),
        keyName: z.string(),
    });
}
