import { BaseComponent } from "../../../core";
import styles from "./_minus.component.scss";

export class MinusIconComponent extends BaseComponent {
  protected connectedCallback() {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
      <div class="${styles['icon']}">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M10.5 25.15v-2.3h27v2.3Z"/></svg>
      </div>
    `;
  }
}
