import { store } from "../store";
import { EventsTypes } from "./pubsub";

export abstract class BaseComponent extends HTMLElement {
  protected abstract connectedCallback(): void;
  abstract render(): string;

  protected connectToStore(callback?: () => undefined, eventType?: EventsTypes) {
    if (typeof callback !== 'undefined') {
      store.events.subscribe(eventType ?? EventsTypes.StateChange, () => callback());
    }

    return store;
  }
}