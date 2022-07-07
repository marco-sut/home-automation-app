export enum EventsTypes {
  StateChange = 'stateChange'
}

export class PubSub {
  events = {};

  subscribe(event: EventsTypes, callback: () => void) {
    if (!Object.prototype.hasOwnProperty.call(this.events, event)) {
      this.events[event] = [];
    }

    return this.events[event].push(callback);
  }

  publish(event: EventsTypes, payload = {}) {
    if (!Object.prototype.hasOwnProperty.call(this.events, event)) {
      return [];
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return this.events[event].map((callback: (payload: any) => void) => callback(payload));
  }
}
