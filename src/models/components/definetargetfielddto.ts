/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type DefineTargetFieldDto = {
    objectTypeOwner: string;
    name: string;
    description: string;
    dataType: string;
};

/** @internal */
export namespace DefineTargetFieldDto$ {
    export const inboundSchema: z.ZodType<DefineTargetFieldDto, z.ZodTypeDef, unknown> = z
        .object({
            object_type_owner: z.string(),
            name: z.string(),
            description: z.string(),
            data_type: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                object_type_owner: "objectTypeOwner",
                data_type: "dataType",
            });
        });

    export type Outbound = {
        object_type_owner: string;
        name: string;
        description: string;
        data_type: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, DefineTargetFieldDto> = z
        .object({
            objectTypeOwner: z.string(),
            name: z.string(),
            description: z.string(),
            dataType: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                objectTypeOwner: "object_type_owner",
                dataType: "data_type",
            });
        });
}