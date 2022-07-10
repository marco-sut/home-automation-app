import { EventsTypes } from "../core";
import { Device, DevicesData, User } from "./model";
import { Store } from "./store";

export enum ActionTypes {
  Navigate = 'navigate',
  SetUser = 'setUser',
  SyncDevices = 'syncDevices',
  Query = 'query',
}

export const actions = {
  [ActionTypes.Navigate](context: Store, payload: string, eventType: EventsTypes) {
    context.commit(ActionTypes.Navigate, payload, eventType);
  },
  [ActionTypes.SetUser](context: Store, payload: User, eventType: EventsTypes) {
    context.commit(ActionTypes.SetUser, payload, eventType);
  },
  [ActionTypes.SyncDevices](context: Store, payload: Device[], eventType: EventsTypes) {
    context.commit(ActionTypes.SyncDevices, payload, eventType);
  },
  [ActionTypes.Query](context: Store, payload: DevicesData, eventType: EventsTypes) {
    context.commit(ActionTypes.Query, payload, eventType);
  },
};
