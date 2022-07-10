import { Device, DevicesData, User } from "./model";
import { EventsTypes } from "./store";

export enum ActionTypes {
  Navigate = 'navigate',
  SetUser = 'setUser',
  SyncDevices = 'syncDevices',
  Query = 'query',
}

export type Action<T> = {
  type: ActionTypes;
  payload: {
    data: T;
    eventType: EventsTypes;
  }
};

export const navigateAction = (actionPayload: string): Action<string> => ({
  type: ActionTypes.Navigate,
  payload: {
    data: actionPayload,
    eventType: EventsTypes.RouteChange
  }
});

export const setUserAction = (actionPayload: User): Action<User> => ({
  type: ActionTypes.SetUser,
  payload: {
    data: actionPayload,
    eventType: EventsTypes.StateChange
  }
});

export const syncDevicesAction = (actionPayload: Device[]): Action<Device[]> => ({
  type: ActionTypes.SyncDevices,
  payload: {
    data: actionPayload,
    eventType: EventsTypes.StateChange
  }
});

export const queryAction = (actionPayload: DevicesData): Action<DevicesData> => ({
  type: ActionTypes.Query,
  payload: {
    data: actionPayload,
    eventType: EventsTypes.StateChange
  }
});

