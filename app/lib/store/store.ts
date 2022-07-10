import { PubSub, EventsTypes } from "../core/pubsub";
import { AppState } from "./state";
import { ActionTypes } from "./actions";
import { AppStateEvent } from "./reducers";

export class Store {
  private actions = {};
  private reducers = {};
  private events = new PubSub();

  state: AppState;

  constructor({ actions, reducers, state }) {
    this.actions = actions;
    this.reducers = reducers;
    this.state = state;
  }

  private setState(appStateEvent: AppStateEvent) {
    this.state = appStateEvent.state;
    this.events.publish(appStateEvent.eventType, this.state);
  }

  dispatch<T>(actionKey: ActionTypes, payload: T, eventType?: EventsTypes) {
    this.actions[actionKey](this, payload, eventType ?? EventsTypes.StateChange);
  }

  commit(mutationKey: ActionTypes, payload: unknown, eventType: EventsTypes) {
    this.setState(this.reducers[mutationKey](this.state, payload, eventType));
  }
}
