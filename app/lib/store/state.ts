import { User } from "./model";

export interface AppState {
  activatedRoute: string;
  user?: User;
}

export const state: AppState = {
  activatedRoute: '/',
};
