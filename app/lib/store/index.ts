import { reducers } from "./reducers";
import { initialState } from "./state";
import { Store } from "./store";

export * from "./model";
export * from "./actions";
export { Store, EventsTypes } from "./store";
export const store = new Store({ reducers, initialState });
