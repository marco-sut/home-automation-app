import { Device, User } from "./model";

export interface AppState {
  activatedRoute: string;
  devices: Device[];
  rooms: string[];
  user?: User;
}

export const state: AppState = {
  activatedRoute: '/',
  devices: [],
  rooms: [],
};
