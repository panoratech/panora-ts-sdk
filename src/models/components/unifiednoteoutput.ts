/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type UnifiedNoteOutputFieldMappings = {};

export type UnifiedNoteOutputRemoteData = {};

export type UnifiedNoteOutput = {
    /**
     * The content of the note
     */
    content: string;
    /**
     * The uuid of the user tied the note
     */
    userId?: string | undefined;
    /**
     * The uuid of the company tied to the note
     */
    companyId?: string | undefined;
    /**
     * The uuid fo the contact tied to the note
     */
    contactId?: string | undefined;
    /**
     * The uuid of the deal tied to the note
     */
    dealId?: string | undefined;
    fieldMappings: UnifiedNoteOutputFieldMappings;
    /**
     * The uuid of the note
     */
    id?: string | undefined;
    /**
     * The id of the note in the context of the Crm 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedNoteOutputRemoteData;
};

/** @internal */
export namespace UnifiedNoteOutputFieldMappings$ {
    export const inboundSchema: z.ZodType<UnifiedNoteOutputFieldMappings, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedNoteOutputFieldMappings> =
        z.object({});
}

/** @internal */
export namespace UnifiedNoteOutputRemoteData$ {
    export const inboundSchema: z.ZodType<UnifiedNoteOutputRemoteData, z.ZodTypeDef, unknown> =
        z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedNoteOutputRemoteData> =
        z.object({});
}

/** @internal */
export namespace UnifiedNoteOutput$ {
    export const inboundSchema: z.ZodType<UnifiedNoteOutput, z.ZodTypeDef, unknown> = z
        .object({
            content: z.string(),
            user_id: z.string().optional(),
            company_id: z.string().optional(),
            contact_id: z.string().optional(),
            deal_id: z.string().optional(),
            field_mappings: z.lazy(() => UnifiedNoteOutputFieldMappings$.inboundSchema),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedNoteOutputRemoteData$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                user_id: "userId",
                company_id: "companyId",
                contact_id: "contactId",
                deal_id: "dealId",
                field_mappings: "fieldMappings",
                remote_id: "remoteId",
                remote_data: "remoteData",
            });
        });

    export type Outbound = {
        content: string;
        user_id?: string | undefined;
        company_id?: string | undefined;
        contact_id?: string | undefined;
        deal_id?: string | undefined;
        field_mappings: UnifiedNoteOutputFieldMappings$.Outbound;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedNoteOutputRemoteData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedNoteOutput> = z
        .object({
            content: z.string(),
            userId: z.string().optional(),
            companyId: z.string().optional(),
            contactId: z.string().optional(),
            dealId: z.string().optional(),
            fieldMappings: z.lazy(() => UnifiedNoteOutputFieldMappings$.outboundSchema),
            id: z.string().optional(),
            remoteId: z.string().optional(),
            remoteData: z.lazy(() => UnifiedNoteOutputRemoteData$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                userId: "user_id",
                companyId: "company_id",
                contactId: "contact_id",
                dealId: "deal_id",
                fieldMappings: "field_mappings",
                remoteId: "remote_id",
                remoteData: "remote_data",
            });
        });
}