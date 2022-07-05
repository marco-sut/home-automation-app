import { BaseComponent } from "../../lib/core";

export class RoomSettingsComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <h1>
      ROOM SETTINGS
    </h1>
    `;
  }
}