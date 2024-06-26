/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UnifiedEngagementOutputFieldMappings = {};

export type UnifiedEngagementOutputRemoteData = {};

export type UnifiedEngagementOutput = {
    /**
     * The content of the engagement
     */
    content?: string | undefined;
    /**
     * The direction of the engagement. Authorized values are INBOUND or OUTBOUND
     */
    direction?: string | undefined;
    /**
     * The subject of the engagement
     */
    subject?: string | undefined;
    /**
     * The start time of the engagement
     */
    startAt?: Date | undefined;
    /**
     * The end time of the engagement
     */
    endTime?: Date | undefined;
    /**
     * The type of the engagement. Authorized values are EMAIL, CALL or MEETING
     */
    type: string;
    /**
     * The uuid of the user tied to the engagement
     */
    userId?: string | undefined;
    /**
     * The uuid of the company tied to the engagement
     */
    companyId?: string | undefined;
    /**
     * The uuids of contacts tied to the engagement object
     */
    contacts?: Array<string> | undefined;
    fieldMappings: UnifiedEngagementOutputFieldMappings;
    /**
     * The uuid of the engagement
     */
    id?: string | undefined;
    /**
     * The id of the engagement in the context of the Crm 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedEngagementOutputRemoteData;
};

/** @internal */
export namespace UnifiedEngagementOutputFieldMappings$ {
    export const inboundSchema: z.ZodType<
        UnifiedEngagementOutputFieldMappings,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedEngagementOutputFieldMappings
    > = z.object({});
}

/** @internal */
export namespace UnifiedEngagementOutputRemoteData$ {
    export const inboundSchema: z.ZodType<
        UnifiedEngagementOutputRemoteData,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedEngagementOutputRemoteData
    > = z.object({});
}

/** @internal */
export namespace UnifiedEngagementOutput$ {
    export const inboundSchema: z.ZodType<UnifiedEngagementOutput, z.ZodTypeDef, unknown> = z
        .object({
            content: z.string().optional(),
            direction: z.string().optional(),
            subject: z.string().optional(),
            start_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            end_time: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
            type: z.string(),
            user_id: z.string().optional(),
            company_id: z.string().optional(),
            contacts: z.array(z.string()).optional(),
            field_mappings: z.lazy(() => UnifiedEngagementOutputFieldMappings$.inboundSchema),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedEngagementOutputRemoteData$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                start_at: "startAt",
                end_time: "endTime",
                user_id: "userId",
                company_id: "companyId",
                field_mappings: "fieldMappings",
                remote_id: "remoteId",
                remote_data: "remoteData",
            });
        });

    export type Outbound = {
        content?: string | undefined;
        direction?: string | undefined;
        subject?: string | undefined;
        start_at?: string | undefined;
        end_time?: string | undefined;
        type: string;
        user_id?: string | undefined;
        company_id?: string | undefined;
        contacts?: Array<string> | undefined;
        field_mappings: UnifiedEngagementOutputFieldMappings$.Outbound;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedEngagementOutputRemoteData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedEngagementOutput> = z
        .object({
            content: z.string().optional(),
            direction: z.string().optional(),
            subject: z.string().optional(),
            startAt: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            endTime: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
            type: z.string(),
            userId: z.string().optional(),
            companyId: z.string().optional(),
            contacts: z.array(z.string()).optional(),
            fieldMappings: z.lazy(() => UnifiedEngagementOutputFieldMappings$.outboundSchema),
            id: z.string().optional(),
            remoteId: z.string().optional(),
            remoteData: z.lazy(() => UnifiedEngagementOutputRemoteData$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                startAt: "start_at",
                endTime: "end_time",
                userId: "user_id",
                companyId: "company_id",
                fieldMappings: "field_mappings",
                remoteId: "remote_id",
                remoteData: "remote_data",
            });
        });
}
