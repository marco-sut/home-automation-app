import { AppState } from "./state";
import { ActionTypes } from "./actions";

export type MutationTypes = ActionTypes;

export const reducers = {
  action(state: AppState, payload: any): AppState {
    return { ...state };
  }
};
