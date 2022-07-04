import { BaseComponent } from "../../lib/core";
import styles from "./_container.component.scss";

export class ContainerComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <h1 class="${styles.container}">
      HELLO WORLD
    </h1>
    `;
  }
}