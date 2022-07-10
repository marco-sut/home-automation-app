import { Device, DevicesQueriedData, TraitCommand } from "../store/model";

export enum Intent {
  SYNC = 'action.devices.SYNC',
  QUERY = 'action.devices.query',
  EXECUTE = 'action.devices.execute',
}

export type SyncPayload = {
  requestId: string;
  intent: Intent.SYNC;
};

export type SyncResponse = {
  requestId: string;
  payload: {
    agentUserId: string;
    devices: Device[],
  }
};

export type QueryPayload = {
  requestId: string;
  intent: Intent.QUERY;
  payload: {
    devices: {
      id: string
    }[]
  }
};

export type QueryResponse = {
  requestId: string;
  payload: {
    devices: DevicesQueriedData;
  }
};

export type ExecutePayload = {
  requestId: string;
  intent: Intent.EXECUTE;
  payload: {
    deviceId: string;
    command: TraitCommand;
    params: {
      on?: boolean;
      temperatureSetpoint?: number;
    }
  }
};

export type ResponseStatus = 'SUCCESS' | 'ERROR';

export type ExecuteResponse = {
  requestId: string;
  payload: {
    status: ResponseStatus;
    state: {
      on?: boolean;
      temperatureSetpoint?: number;
      online: boolean;
    },
    errorDesc?: string;
  }
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
