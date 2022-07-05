import { BaseComponent } from "../../lib/core";

export class LoginComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <h1>
      LOGIN
    </h1>
    `;
  }
}