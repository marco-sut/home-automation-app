import { BaseComponent } from "../../lib";

export class NotFoundComponent extends BaseComponent {
  protected connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h1>
      404
    </h1>
    `;
  }
}