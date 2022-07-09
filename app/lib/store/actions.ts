import { Device, User } from "./model";
import { Store } from "./store";

export enum ActionTypes {
  Navigate = 'navigate',
  SetUser = 'setUser',
  SyncDevices = 'syncDevices',
}

export const actions = {
  navigate(context: Store, payload: string) {
    context.commit(ActionTypes.Navigate, payload);
  },
  setUser(context: Store, payload: User) {
    context.commit(ActionTypes.SetUser, payload);
  },
  syncDevices(context: Store, payload: Device[]) {
    context.commit(ActionTypes.SyncDevices, payload);
  },
};
