import { authService } from "../core";
import { Intent, SyncPayload, SyncResponse } from "./model";

const getHeaders = (body?: unknown) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=3600',
    authorization: `Bearer ${authService.accessToken}`
  },
  ...(body ? { body: JSON.stringify(body) } : {}),
});

const apiUrl = 'https://adobe.home-central-hub.com/v1';

export async function sync(): Promise<SyncResponse> {
  return fetch(`${apiUrl}/sync`, getHeaders({ requestId: '123', intent: Intent.SYNC } as SyncPayload))
    .then((resp) => resp.json());
}
