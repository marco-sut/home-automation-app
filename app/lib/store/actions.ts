import { User } from "./model";
import { Store } from "./store";

export enum ActionTypes {
  Navigate = 'navigate',
  SetUser = 'setUser'
}

export const actions = {
  navigate(context: Store, payload: string) {
    context.commit(ActionTypes.Navigate, payload);
  },
  setUser(context: Store, payload: User) {
    context.commit(ActionTypes.SetUser, payload);
  },
};
