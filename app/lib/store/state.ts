import { Device, DevicesData, User } from "./model";

export interface AppState {
  activatedRoute: string;
  devices: Device[];
  rooms: string[];
  devicesData?: DevicesData;
  user?: User;
}

export const initialState: AppState = {
  activatedRoute: '/',
  devices: [],
  rooms: [],
};
