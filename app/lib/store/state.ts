import { Device, DevicesData, User } from "./model";

export interface AppState {
  activatedRoute: string;
  devices: Device[];
  rooms: string[];
  devicesData?: DevicesData;
  user?: User;
}

export const state: AppState = {
  activatedRoute: '/',
  devices: [],
  rooms: [],
};
