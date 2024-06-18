/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives";
import * as z from "zod";

export type UnifiedCollectionOutputRemoteData = {};

export type UnifiedCollectionOutput = {
    /**
     * The name of the collection
     */
    name: string;
    /**
     * The description of the collection
     */
    description?: string | undefined;
    /**
     * The type of the collection. Authorized values are either PROJECT or LIST
     */
    collectionType?: string | undefined;
    /**
     * The uuid of the collection
     */
    id?: string | undefined;
    /**
     * The id of the collection in the context of the 3rd Party
     */
    remoteId?: string | undefined;
    remoteData: UnifiedCollectionOutputRemoteData;
};

/** @internal */
export namespace UnifiedCollectionOutputRemoteData$ {
    export const inboundSchema: z.ZodType<
        UnifiedCollectionOutputRemoteData,
        z.ZodTypeDef,
        unknown
    > = z.object({});

    export type Outbound = {};

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        UnifiedCollectionOutputRemoteData
    > = z.object({});
}

/** @internal */
export namespace UnifiedCollectionOutput$ {
    export const inboundSchema: z.ZodType<UnifiedCollectionOutput, z.ZodTypeDef, unknown> = z
        .object({
            name: z.string(),
            description: z.string().optional(),
            collection_type: z.string().optional(),
            id: z.string().optional(),
            remote_id: z.string().optional(),
            remote_data: z.lazy(() => UnifiedCollectionOutputRemoteData$.inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                collection_type: "collectionType",
                remote_id: "remoteId",
                remote_data: "remoteData",
            });
        });

    export type Outbound = {
        name: string;
        description?: string | undefined;
        collection_type?: string | undefined;
        id?: string | undefined;
        remote_id?: string | undefined;
        remote_data: UnifiedCollectionOutputRemoteData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, UnifiedCollectionOutput> = z
        .object({
            name: z.string(),
            description: z.string().optional(),
            collectionType: z.string().optional(),
            id: z.string().optional(),
            remoteId: z.string().optional(),
            remoteData: z.lazy(() => UnifiedCollectionOutputRemoteData$.outboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                collectionType: "collection_type",
                remoteId: "remote_id",
                remoteData: "remote_data",
            });
        });
}
