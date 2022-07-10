import { authService } from "../core";
import { ExecuteRequest, ExecuteRequestPayload, ExecuteResponsePayload, Intent, QueryRequest, QueryRequestPayload, QueryResponsePayload, SyncRequest, SyncResponsePayload } from "./model";

const apiUrl = 'https://adobe.home-central-hub.com/v1';

const getHeaders = (body?: unknown, method = 'POST') => ({
  method,
  headers: {
    'Content-Type': 'application/json',
    'Cache-Control': 'max-age=3600',
    authorization: `Bearer ${authService.accessToken}`
  },
  ...(body ? { body: JSON.stringify(body) } : {}),
});

export async function fetchApi<T, U>({ endpoint, body }: { endpoint: string, body: T }): Promise<U> {
  return fetch(`${apiUrl}/${endpoint}`, getHeaders(body))
    .then((resp) => resp.json())
    .then((resp) => resp.payload);
}

export async function sync(): Promise<SyncResponsePayload> {
  const body: SyncRequest = { requestId: '123', intent: Intent.SYNC };

  return fetchApi<SyncRequest, SyncResponsePayload>({ endpoint: 'sync', body });
}

export async function query(payload: QueryRequestPayload): Promise<QueryResponsePayload> {
  const body: QueryRequest = { requestId: '123', intent: Intent.QUERY, payload };

  return fetchApi<QueryRequest, QueryResponsePayload>({ endpoint: 'query', body });
}

export async function execute({ deviceId, command, params: { on, temperatureSetpoint } }: ExecuteRequestPayload): Promise<ExecuteResponsePayload> {
  const body: ExecuteRequest = {
    requestId: '123',
    intent: Intent.EXECUTE,
    payload: {
      deviceId,
      command,
      params: {
        ...(typeof on !== 'undefined' ? { on } : {}),
        ...(typeof temperatureSetpoint !== 'undefined' ? { temperatureSetpoint } : {}),
      }
    }
  };

  return fetchApi<ExecuteRequest, ExecuteResponsePayload>({ endpoint: 'execute', body });
}
