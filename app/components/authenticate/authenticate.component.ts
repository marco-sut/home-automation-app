import { BaseComponent, navigateTo, authService, Store } from "../../lib";

export class AuthenticateComponent extends BaseComponent {
  private store: Store;

  constructor() {
    super();
    this.store = this.connectToStore();
  }

  protected async connectedCallback() {
    this.innerHTML = this.render();

    if (!this.store.state.user && authService.codeChallenge) {
      await authService.fetchAccessAndIdToken();
    }

    navigateTo({}, '/rooms');
  }

  render(): string {
    return '';
  }
}