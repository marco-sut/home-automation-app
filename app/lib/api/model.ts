import { DeviceRef, Devices, TraitCommand } from "../store/model";

export enum Intent {
  SYNC = 'action.devices.SYNC',
  QUERY = 'action.devices.query',
  EXECUTE = 'action.devices.execute',
}

export type SyncRequest = {
  requestId: string;
  intent: Intent.SYNC;
};

export type SyncResponsePayload = {
  agentUserId: string;
  devices: DeviceRef[],
};

export type SyncResponse = {
  requestId: string;
  payload: SyncResponsePayload;
};

export type QueryRequestPayload = {
  devices: {
    id: string
  }[]
};

export type QueryRequest = {
  requestId: string;
  intent: Intent.QUERY;
  payload: QueryRequestPayload;
};

export type QueryResponsePayload = {
  devices: Devices;
};

export type QueryResponse = {
  requestId: string;
  payload: QueryResponsePayload;
};

export type ExecuteParams = {
  on?: boolean;
  temperatureSetpoint?: number;
};

export type ExecuteState = ExecuteParams & {
  online: boolean;
};

export type ExecuteRequestPayload = {
  deviceId: string;
  command: TraitCommand;
  params: ExecuteParams;
};

export type ExecuteRequest = {
  requestId: string;
  intent: Intent.EXECUTE;
  payload: ExecuteRequestPayload;
};

export type ResponseStatus = 'SUCCESS' | 'ERROR';

export type ExecuteResponsePayload = {
  status: ResponseStatus;
  state: ExecuteState,
  errorDesc?: string;
};

export type ExecuteResponse = {
  requestId: string;
  payload: ExecuteResponsePayload;
};

export type TokenPayload = {
  grant_type: 'authorization_code';
  client_id: string;
  code_verifier: string;
  code: string;
  redirect_uri: string;
};

export type TokenResponse = {
  access_token: string;
  refresh_token: string;
  id_token: string;
  token_type: 'Bearer';
  expires_in: number;
};
