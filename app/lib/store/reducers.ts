import { AppState } from "./state";
import { ActionTypes } from "./actions";
import { Device, DevicesData, User } from "./model";
import { distinct } from "../core";

export const reducers = {
  [ActionTypes.Navigate](state: AppState, payload: string): AppState {
    return { ...state, activatedRoute: payload };
  },
  [ActionTypes.SetUser](state: AppState, payload: User): AppState {
    return { ...state, user: payload };
  },
  [ActionTypes.SyncDevices](state: AppState, payload: Device[]): AppState {
    return { ...state, devices: payload, rooms: distinct<Device>(payload, 'room', 'ALL') };
  },
  [ActionTypes.Query](state: AppState, payload: DevicesData): AppState {
    return { ...state, devicesData: payload };
  }
};
