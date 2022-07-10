import { DeviceRef, Devices, User } from "./model";

export interface AppState {
  activatedRoute: string;
  devices: DeviceRef[];
  devicesData: Devices;
  rooms: string[];
  user?: User;
}

export const initialState: AppState = {
  activatedRoute: '/',
  devices: [],
  rooms: [],
  devicesData: {},
};
