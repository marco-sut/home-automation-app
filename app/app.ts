import { BaseComponent } from "./lib/core";
import { Store } from "./lib/store/store";

export class HomeAutomationApp extends BaseComponent {
  private store: Store;

  constructor() {
    super();
    this.store = this.connectToStore(this.connectedCallback.bind(this));
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }

  render() {
    return this.store.state.activatedRoute;
  };
}
