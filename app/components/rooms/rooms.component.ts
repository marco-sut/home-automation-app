import { BaseComponent } from "../../lib/core";

export class RoomsComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <h1>
      ROOMS
    </h1>
    `;
  }
}