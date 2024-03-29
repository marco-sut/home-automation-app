import { BaseComponent } from "../../../core";
import styles from "./_light-bulb.component.scss";

export class LightBulbIconComponent extends BaseComponent {
  protected connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="${styles['icon']}">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 43.15q-1.55 0-2.65-1.05-1.1-1.05-1.2-2.6h7.7q-.1 1.55-1.2 2.6-1.1 1.05-2.65 1.05Zm-7.6-7.2v-2.3h15.2v2.3Zm.15-5.8q-3.05-2.05-4.8-5.05T10 18.4q0-5.75 4.125-9.875T24 4.4q5.75 0 9.875 4.125T38 18.4q0 3.7-1.75 6.7t-4.8 5.05Zm.8-2.3h13.3q2.4-1.6 3.75-4.1 1.35-2.5 1.35-5.35 0-4.85-3.45-8.3-3.45-3.45-8.3-3.45-4.85 0-8.3 3.45-3.45 3.45-3.45 8.3 0 2.85 1.35 5.35 1.35 2.5 3.75 4.1Zm6.65 0Z"/></svg>
      </div>
    `;
  }
}
