import { authService } from "../core";
import { Intent, QueryPayload, SyncPayload } from "./model";

const apiUrl = 'https://adobe.home-central-hub.com/v1';

const getHeaders = (body?: unknown) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=3600',
    authorization: `Bearer ${authService.accessToken}`
  },
  ...(body ? { body: JSON.stringify(body) } : {}),
});

export async function sync() {
  return fetch(`${apiUrl}/sync`, getHeaders({ requestId: '123', intent: Intent.SYNC } as SyncPayload))
    .then((resp) => resp.json())
    .then((resp) => resp.payload);
}

export async function query(ids: { id: string }[]) {
  return fetch(`${apiUrl}/query`, getHeaders({ requestId: '123', intent: Intent.QUERY, payload: { devices: ids } } as QueryPayload))
    .then((resp) => resp.json())
    .then((resp) => resp.payload);
}
