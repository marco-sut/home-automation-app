import { BaseComponent } from "../../../core";
import styles from "./_kids-room.component.scss";

export class KidsBedroomIconComponent extends BaseComponent {
  protected connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="${styles['icon']}">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M12.9 37h-1.2l-.8-4H9v-8.9q0-1.25.825-2.1.825-.85 2.075-.85h1.3V14.9q0-1.2.85-2.05.85-.85 2.05-.85h15.75q1.2 0 2.05.85.85.85.85 2.05v6.25h1.35q1.2 0 2.05.85.85.85.85 2.05V33h-1.9l-.8 4h-1.2l-.8-4H13.75Zm12.25-15.85h7.35V14.9q0-.3-.2-.475t-.45-.175h-6.7Zm-9.65 0h7.35v-6.9H16.1q-.25 0-.425.175t-.175.475Zm-4.25 9.6h25.5v-6.7q0-.25-.175-.45t-.475-.2H11.9q-.3 0-.475.2t-.175.45Zm25.5 0h-25.5 25.5Z"/></svg>
      </div>
    `;
  }
}
