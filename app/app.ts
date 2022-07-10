import { BaseComponent, Store, apiService, Device, authService, EventsTypes } from "./lib";
import { ActionTypes } from "./lib/store/actions";

export class HomeAutomationApp extends BaseComponent {
  private store: Store;

  constructor() {
    super();
    this.store = this.connectToStore(this.connectedCallback.bind(this), EventsTypes.RouteChange);

    if (!this.store.state.user) {
      authService.initPkce();
    }
  }

  async connectedCallback() {
    if (this.store.state.user?.loggedIn && !this.store.state.devices.length) {
      this.innerHTML = this.loading();

      try {
        const { devices } = await apiService.sync();
        this.store.dispatch<Device[]>(ActionTypes.SyncDevices, devices);
      } catch (err) {
        throw new Error(`Something went wrong syncing the devices: ${err}`);
      }
    }

    this.innerHTML = this.render();
  }

  loading() {
    return `<h3>Loading...</h3>`;
  }

  render() {
    return this.store.state.activatedRoute;
  }
}
