/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { HTTPClient } from "./http";
import { RetryConfig } from "./retries";
import { Params, pathToFunc } from "./url";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production server
     */
    "https://api.panora.dev",
    /**
     * Sandbox server
     */
    "https://api-sandbox.panora.dev",
] as const;

export type SDKOptions = {
    jwt?: string | (() => Promise<string>);

    httpClient?: HTTPClient;
    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: RetryConfig;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
    let serverURL = options.serverURL;

    const params: Params = {};

    if (!serverURL) {
        const serverIdx = options.serverIdx ?? 0;
        if (serverIdx < 0 || serverIdx >= ServerList.length) {
            throw new Error(`Invalid server index ${serverIdx}`);
        }
        serverURL = ServerList[serverIdx] || "";
    }

    const u = pathToFunc(serverURL)(params);
    return new URL(u);
}

export const SDK_METADATA = {
    language: "typescript",
    openapiDocVersion: "1.0",
    sdkVersion: "0.0.1",
    genVersion: "2.342.6",
    userAgent: "speakeasy-sdk/typescript 0.0.1 2.342.6 1.0 panora-ts",
} as const;