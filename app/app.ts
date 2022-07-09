import { BaseComponent, Store, apiService } from "./lib";

export class HomeAutomationApp extends BaseComponent {
  private store: Store;

  constructor() {
    super();
    this.store = this.connectToStore(this.connectedCallback.bind(this));
  }

  async connectedCallback() {
    if (this.store.state.user?.loggedIn) {
      this.innerHTML = this.loading();
      try {
        await apiService.sync();
      } catch (err) {
        throw new Error(`Something went wrong syncing the devices: ${err}`);
      }
      this.innerHTML = this.render();
    } else {
      this.innerHTML = this.render();
    }
  }

  loading() {
    return `<h3>Loading...</h3>`;
  }

  render() {
    return this.store.state.activatedRoute;
  }
}
