import { PubSub, EventsTypes } from "../core/pubsub";
import { AppState } from "./state";
import { ActionTypes } from "./actions";
import { MutationTypes } from "./reducers";

export class Store {
  actions = {};
  reducers = {};
  events = new PubSub();

  get state(): AppState {
    return this._state;
  }
  set state(s: AppState) {
    this._state = s;
    this.events.publish(EventsTypes.StateChange, s);
  }
  private _state: AppState;

  constructor({ actions, reducers, state }) {
    this.actions = actions;
    this.reducers = reducers;
    this.state = state;
  }

  dispatch<T>(actionKey: ActionTypes, payload: T) {
    this.actions[actionKey](this, payload);
  }

  commit(mutationKey: MutationTypes, payload: unknown) {
    this.state = this.reducers[mutationKey](this.state, payload);
  }
}
