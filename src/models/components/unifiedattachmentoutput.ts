/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type UnifiedAttachmentOutputFieldMappings = {};

export type UnifiedAttachmentOutputRemoteData = {};

export type UnifiedAttachmentOutput = {
    /**
     * The file name of the attachment
     */
    fileName: string;
    /**
     * The file url of the attachment
     */
    fileUrl: string;
    /**
     * The uploader's uuid of the attachment
     */
    uploader: string;
    fieldMappings: UnifiedAttachmentOutputFieldMappings;
    /**
     * The uuid of the attachment
     */
    id?: string | undefined;
    /**
     * The id of the attachment in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedAttachmentOutputRemoteData;
};

/** @internal */
export namespace UnifiedAttachmentOutputFieldMappings$ {
    export const inboundSchema: z.ZodType<
        UnifiedAttachmentOutputFieldMappings,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAttachmentOutputFieldMappings
    > = z.object({});
}

/** @internal */
export namespace UnifiedAttachmentOutputRemoteData$ {
    export const inboundSchema: z.ZodType<
        UnifiedAttachmentOutputRemoteData,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedAttachmentOutputRemoteData
    > = z.object({});
}

/** @internal */
export namespace UnifiedAttachmentOutput$ {
    export const inboundSchema: z.ZodType<UnifiedAttachmentOutput, z.ZodTypeDef, unknown> = z
        .object({
            file_name: z.string(),
            file_url: z.string(),
            uploader: z.string(),
            field_mappings: z.lazy(() => UnifiedAttachmentOutputFieldMappings$.inboundSchema),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedAttachmentOutputRemoteData$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                file_name: "fileName",
                file_url: "fileUrl",
                field_mappings: "fieldMappings",
                remote_id: "remoteId",
                remote_data: "remoteData",
            });
        });

    export type Outbound = {
        file_name: string;
        file_url: string;
        uploader: string;
        field_mappings: UnifiedAttachmentOutputFieldMappings$.Outbound;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedAttachmentOutputRemoteData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedAttachmentOutput> = z
        .object({
            fileName: z.string(),
            fileUrl: z.string(),
            uploader: z.string(),
            fieldMappings: z.lazy(() => UnifiedAttachmentOutputFieldMappings$.outboundSchema),
            id: z.string().optional(),
            remoteId: z.string().optional(),
            remoteData: z.lazy(() => UnifiedAttachmentOutputRemoteData$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                fileName: "file_name",
                fileUrl: "file_url",
                fieldMappings: "field_mappings",
                remoteId: "remote_id",
                remoteData: "remote_data",
            });
        });
}