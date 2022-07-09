import { store } from "../store";
import { EventsTypes } from "./pubsub";

export abstract class BaseComponent extends HTMLElement {
  protected abstract connectedCallback(): void;
  abstract render(): string;

  protected connectToStore(callback?: () => undefined) {
    if (typeof callback !== 'undefined') {
      store.events.subscribe(EventsTypes.StateChange, () => callback());
    }

    return store;
  }

}