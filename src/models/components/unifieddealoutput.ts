/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type UnifiedDealOutputFieldMappings = {};

export type UnifiedDealOutputRemoteData = {};

export type UnifiedDealOutput = {
    /**
     * The name of the deal
     */
    name: string;
    /**
     * The description of the deal
     */
    description: string;
    /**
     * The amount of the deal
     */
    amount: number;
    /**
     * The uuid of the user who is on the deal
     */
    userId?: string | undefined;
    /**
     * The uuid of the stage of the deal
     */
    stageId?: string | undefined;
    /**
     * The uuid of the company tied to the deal
     */
    companyId?: string | undefined;
    fieldMappings: UnifiedDealOutputFieldMappings;
    /**
     * The uuid of the deal
     */
    id?: string | undefined;
    /**
     * The id of the deal in the context of the Crm 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedDealOutputRemoteData;
};

/** @internal */
export namespace UnifiedDealOutputFieldMappings$ {
    export const inboundSchema: z.ZodType<UnifiedDealOutputFieldMappings, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedDealOutputFieldMappings> =
        z.object({});
}

/** @internal */
export namespace UnifiedDealOutputRemoteData$ {
    export const inboundSchema: z.ZodType<UnifiedDealOutputRemoteData, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedDealOutputRemoteData> =
        z.object({});
}

/** @internal */
export namespace UnifiedDealOutput$ {
    export const inboundSchema: z.ZodType<UnifiedDealOutput, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            description: z.string(),
            amount: z.number(),
            user_id: z.string().optional(),
            stage_id: z.string().optional(),
            company_id: z.string().optional(),
            field_mappings: z.lazy(() => UnifiedDealOutputFieldMappings$.inboundSchema),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedDealOutputRemoteData$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                user_id: "userId",
                stage_id: "stageId",
                company_id: "companyId",
                field_mappings: "fieldMappings",
                remote_id: "remoteId",
                remote_data: "remoteData",
            });
        });

    export type Outbound = {
        name: string;
        description: string;
        amount: number;
        user_id?: string | undefined;
        stage_id?: string | undefined;
        company_id?: string | undefined;
        field_mappings: UnifiedDealOutputFieldMappings$.Outbound;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedDealOutputRemoteData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedDealOutput> = z
        .object({
            name: z.string(),
            description: z.string(),
            amount: z.number(),
            userId: z.string().optional(),
            stageId: z.string().optional(),
            companyId: z.string().optional(),
            fieldMappings: z.lazy(() => UnifiedDealOutputFieldMappings$.outboundSchema),
            id: z.string().optional(),
            remoteId: z.string().optional(),
            remoteData: z.lazy(() => UnifiedDealOutputRemoteData$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                userId: "user_id",
                stageId: "stage_id",
                companyId: "company_id",
                fieldMappings: "field_mappings",
                remoteId: "remote_id",
                remoteData: "remote_data",
            });
        });
}