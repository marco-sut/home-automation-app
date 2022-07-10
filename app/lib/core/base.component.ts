import { store, EventsTypes } from "../store";

export abstract class BaseComponent extends HTMLElement {
  protected abstract connectedCallback(): void;
  abstract render(): void;

  protected connectToStore(callback?: () => undefined, eventType?: EventsTypes) {
    if (typeof callback !== 'undefined') {
      store.subscribe(callback, eventType);
    }

    return store;
  }
}