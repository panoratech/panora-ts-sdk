/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type CreateMagicLinkDto = {
    linkedUserOriginId: string;
    email: string;
    alias: string;
    idProject: string;
};

/** @internal */
export namespace CreateMagicLinkDto$ {
    export const inboundSchema: z.ZodType<CreateMagicLinkDto, z.ZodTypeDef, unknown> = z
        .object({
            linked_user_origin_id: z.string(),
            email: z.string(),
            alias: z.string(),
            id_project: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                linked_user_origin_id: "linkedUserOriginId",
                id_project: "idProject",
            });
        });

    export type Outbound = {
        linked_user_origin_id: string;
        email: string;
        alias: string;
        id_project: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateMagicLinkDto> = z
        .object({
            linkedUserOriginId: z.string(),
            email: z.string(),
            alias: z.string(),
            idProject: z.string(),
        })
        .transform((v) => {
            return remap$(v, {
                linkedUserOriginId: "linked_user_origin_id",
                idProject: "id_project",
            });
        });
}
