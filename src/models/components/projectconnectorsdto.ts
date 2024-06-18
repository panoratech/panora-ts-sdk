/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ProjectConnectorsDto = {
    column: string;
    status: boolean;
};

/** @internal */
export namespace ProjectConnectorsDto$ {
    export const inboundSchema: z.ZodType<ProjectConnectorsDto, z.ZodTypeDef, unknown> = z.object({
        column: z.string(),
        status: z.boolean(),
    });

    export type Outbound = {
        column: string;
        status: boolean;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ProjectConnectorsDto> = z.object(
        {
            column: z.string(),
            status: z.boolean(),
        }
    );
}