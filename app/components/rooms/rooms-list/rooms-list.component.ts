import { BaseComponent } from "../../../lib/core";

export class RoomsListComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
      <p>Rooms list</p>
    `;
  }
}