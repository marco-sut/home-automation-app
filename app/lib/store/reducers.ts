import { AppState } from "./state";
import { ActionTypes } from "./actions";
import { User } from "./model";

export type MutationTypes = ActionTypes;

export const reducers = {
  navigate(state: AppState, payload: string): AppState {
    return { ...state, activatedRoute: payload };
  },
  setUser(state: AppState, payload: User): AppState {
    return { ...state, user: payload };
  }
};
