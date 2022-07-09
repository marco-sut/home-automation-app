import { BaseComponent } from "../../lib";

export class NotFoundComponent extends BaseComponent {
  protected connectedCallback() {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <h1>
      404
    </h1>
    `;
  }
}