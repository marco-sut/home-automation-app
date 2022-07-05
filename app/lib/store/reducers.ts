import { AppState } from "./state";
import { ActionTypes } from "./actions";

export type MutationTypes = ActionTypes;

export const reducers = {
  navigate(state: AppState, payload: string): AppState {
    return { ...state, activatedRoute: payload };
  }
};
