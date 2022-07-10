import { BaseComponent, navigateTo, authService, Store } from "../../lib";

export class AuthenticateComponent extends BaseComponent {
  private store: Store;

  constructor() {
    super();
    this.store = this.connectToStore();
  }

  protected async connectedCallback() {
    if (!this.store.state.user && authService.codeChallenge) {
      await authService.fetchAccessAndIdToken();
    }

    navigateTo({}, '/rooms');
  }

  render() { return undefined; }
}