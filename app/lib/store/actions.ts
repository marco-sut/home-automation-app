import { Store } from "./store";

export enum ActionTypes {
  Navigate = 'navigate',
}

export const actions = {
  navigate(context: Store, payload: string) {
    context.commit(ActionTypes.Navigate, payload);
  }
};
