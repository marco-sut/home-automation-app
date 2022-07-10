import { AppState } from "./state";
import { ActionTypes } from "./actions";
import { DeviceRef, Devices, User } from "./model";
import { distinct } from "../core";

export const reducers = {
  [ActionTypes.Navigate](state: AppState, payload: string): AppState {
    return { ...state, activatedRoute: payload };
  },
  [ActionTypes.SetUser](state: AppState, payload: User): AppState {
    return { ...state, user: payload };
  },
  [ActionTypes.SyncDevices](state: AppState, payload: DeviceRef[]): AppState {
    return { ...state, devices: payload, rooms: distinct<DeviceRef>(payload, 'room', 'ALL') };
  },
  [ActionTypes.Query](state: AppState, payload: Devices): AppState {
    return { ...state, devicesData: payload };
  },
  [ActionTypes.Execute](state: AppState, payload: Devices): AppState {
    const newDevicesData: Devices = Object.keys(state.devicesData).reduce((acc: object, key: string) => {
      if (key in payload) {
        acc[key] = payload[key];
      } else {
        acc[key] = state.devicesData[key];
      }

      return acc;
    }, {});

    return { ...state, devicesData: newDevicesData };
  }
};
