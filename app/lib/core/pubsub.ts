export enum EventsTypes {
  StateChange = 'stateChange'
}

export class PubSub {
  events = {};

  subscribe(event: EventsTypes, callback: () => void) {
    if (!this.events.hasOwnProperty(event)) {
      this.events[event] = [];
    }

    return this.events[event].push(callback);
  }

  publish(event: EventsTypes, payload = {}) {
    if (!this.events.hasOwnProperty(event)) {
      return [];
    }

    return this.events[event].map((callback: (payload: any) => void) => callback(payload));
  }
}
