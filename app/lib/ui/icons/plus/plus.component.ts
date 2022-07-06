import { BaseComponent } from "../../../core";
import styles from "./_plus.component.scss";

export class PlusIconComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
      <div class="${styles['icon']}">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.85 37.5V25.15H10.5v-2.3h12.35V10.5h2.3v12.35H37.5v2.3H25.15V37.5Z"/></svg>
      </div>
    `;
  }
}
