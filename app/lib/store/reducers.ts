import { AppState } from "./state";
import { ActionTypes } from "./actions";
import { Device, DevicesData, User } from "./model";
import { distinct, EventsTypes } from "../core";

export type AppStateEvent = { eventType: EventsTypes, state: AppState };

export const reducers = {
  [ActionTypes.Navigate](state: AppState, payload: string, eventType: EventsTypes): AppStateEvent {
    return {
      eventType,
      state: { ...state, activatedRoute: payload },
    };
  },
  [ActionTypes.SetUser](state: AppState, payload: User, eventType: EventsTypes): AppStateEvent {
    return {
      eventType,
      state: { ...state, user: payload },
    };
  },
  [ActionTypes.SyncDevices](state: AppState, payload: Device[], eventType: EventsTypes): AppStateEvent {
    return {
      eventType,
      state: { ...state, devices: payload, rooms: distinct<Device>(payload, 'room', 'ALL') },
    };
  },
  [ActionTypes.Query](state: AppState, payload: DevicesData, eventType: EventsTypes): AppStateEvent {
    return {
      eventType,
      state: { ...state, devicesData: payload },
    };
  }
};
