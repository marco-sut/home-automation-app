import { BaseComponent } from "../../../core";
import styles from "./_button.component.scss";

export class ButtonComponent extends BaseComponent {
  get buttonId() {
    return this.getAttribute('buttonId');
  }

  get type() {
    return this.getAttribute('type');
  }

  get label() {
    return this.getAttribute('label');
  }

  get theme() {
    return this.getAttribute('theme') ?? 'primary';
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }

  render() {
    return `
      <button id="${this.buttonId}" class="${styles['button']} ${styles[this.theme]}" type="${this.type}">${this.label}</button>
    `;
  }
}
