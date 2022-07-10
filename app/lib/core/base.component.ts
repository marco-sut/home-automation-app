import { store, EventsTypes } from "../store";

export abstract class BaseComponent extends HTMLElement {
  protected abstract connectedCallback(): void;
  abstract render(): string;

  protected connectToStore(callback?: () => undefined, eventType?: EventsTypes) {
    if (typeof callback !== 'undefined') {
      store.subscribe(eventType ?? EventsTypes.StateChange, callback);
    }

    return store;
  }
}