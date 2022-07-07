import { BaseComponent } from "../../../core";
import styles from "./_input.component.scss";

export class InputComponent extends BaseComponent {
  get inputId() {
    return this.getAttribute('inputId');
  }

  get inputLabel() {
    return this.getAttribute('inputLabel');
  }

  connectedCallback() {
    this.innerHTML = this.render();
  }

  render() {
    return `
      <label class="${styles['label']}" for="${this.inputId}">${this.inputLabel}</label> 
      <input class="${styles['input']}" type="text" id="${this.inputId}" name="${this.inputId}">
    `;
  }
}
