import { BaseComponent, Store, apiService, DeviceRef, authService, EventsTypes, syncDevicesAction } from "./lib";

export class HomeAutomationApp extends BaseComponent {
  private store: Store;
  private connectedToStoreCallback = this.connectedCallback.bind(this);

  constructor() {
    super();
    this.store = this.connectToStore(this.connectedToStoreCallback, EventsTypes.RouteChange);

    if (!this.store.state.user) {
      authService.initPkce();
    }
  }

  async connectedCallback() {
    if (this.store.state.user?.loggedIn && !this.store.state.devices.length) {
      this.loading();

      try {
        const { devices } = await apiService.sync();
        this.store.dispatch<DeviceRef[]>(syncDevicesAction(devices));
      } catch (err) {
        throw new Error(`Something went wrong syncing the devices: ${err}`);
      }
    }

    this.render();
  }

  loading() {
    this.innerHTML = `<h3>Loading...</h3>`;
  }

  render() {
    this.innerHTML = this.store.state.activatedRoute;
  }
}
