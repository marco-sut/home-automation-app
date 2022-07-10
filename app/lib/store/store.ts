import { AppState } from "./state";
import { Action } from "./actions";

export enum EventsTypes {
  StateChange = 'stateChange',
  RouteChange = 'routeChange',
}

export class Store {
  private reducers = {};
  private events = {};

  state: AppState;

  constructor({ reducers, initialState }) {
    this.reducers = reducers;
    this.state = initialState;
  }

  subscribe(callback: () => void, eventType?: EventsTypes) {
    const event = eventType ?? EventsTypes.StateChange;

    if (!(event in this.events)) {
      this.events[event] = [];
    }

    return this.events[event].push(callback);
  }

  unsubscribe(callback: () => void, eventType?: EventsTypes) {
    const event = eventType ?? EventsTypes.StateChange;

    if (event in this.events) {
      this.events[event] = this.events[event].filter((cb: () => void) => cb !== callback);
    }
  }

  dispatch<T>(action: Action<T>) {
    const { type, payload } = action;
    this.setState(payload.eventType, this.reducers[type](this.state, payload.data));
  }

  private publish(event: EventsTypes, payload = {}) {
    if (!(event in this.events)) {
      return [];
    }

    return this.events[event].forEach((callback: (payload: unknown) => void) => callback(payload));
  }

  private setState(eventType: EventsTypes, state: AppState) {
    this.state = state;
    this.publish(eventType, this.state);
  }
}
