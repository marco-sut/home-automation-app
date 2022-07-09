export enum EventsTypes {
  StateChange = 'stateChange',
}

export class PubSub {
  events = {};

  subscribe(event: EventsTypes, callback: () => void) {
    if (!(event in this.events)) {
      this.events[event] = [];
    }

    return this.events[event].push(callback);
  }

  publish(event: EventsTypes, payload = {}) {
    if (!(event in this.events)) {
      return [];
    }

    return this.events[event].forEach((callback: (payload: unknown) => void) => callback(payload));
  }
}
