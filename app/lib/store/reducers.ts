import { AppState } from "./state";
import { ActionTypes } from "./actions";
import { Device, User } from "./model";
import { distinct } from "../core";

export type MutationTypes = ActionTypes;

export const reducers = {
  navigate(state: AppState, payload: string): AppState {
    return { ...state, activatedRoute: payload };
  },
  setUser(state: AppState, payload: User): AppState {
    return { ...state, user: payload };
  },
  syncDevices(state: AppState, payload: Device[]): AppState {
    return { ...state, devices: payload, rooms: distinct<Device>(payload, 'room', 'ALL') };
  }
};
