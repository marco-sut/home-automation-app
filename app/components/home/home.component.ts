import { BaseComponent } from "../../lib/core";

export class HomeComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <h1>
      HOME
    </h1>
    `;
  }
}