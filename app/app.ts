import { BaseComponent, Store, apiService, Device, authService, EventsTypes, syncDevicesAction } from "./lib";

export class HomeAutomationApp extends BaseComponent {
  private store: Store;
  private callback = this.connectedCallback.bind(this);

  constructor() {
    super();
    this.store = this.connectToStore(this.callback, EventsTypes.RouteChange);

    if (!this.store.state.user) {
      authService.initPkce();
    }
  }

  async connectedCallback() {
    if (this.store.state.user?.loggedIn && !this.store.state.devices.length) {
      this.innerHTML = this.loading();

      try {
        const { devices } = await apiService.sync();
        this.store.dispatch<Device[]>(syncDevicesAction(devices));
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
