import { BaseComponent } from "../../../core";
import styles from "./_thermostat.component.scss";

export class ThermostatIconComponent extends BaseComponent {
  protected connectedCallback() {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
      <div class="${styles['icon']}">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 43q-3.75 0-6.375-2.625T15 34q0-2.4 1.125-4.475Q17.25 27.45 19.4 26.45V9.6q0-1.95 1.325-3.275T24 5q1.9 0 3.25 1.325T28.6 9.6v16.85q2.15 1 3.275 3.075T33 34q0 3.75-2.625 6.375T24 43Zm-2.35-20.45h4.7V19.6H24v-1.75h2.35V13.4H24v-1.75h2.35V9.6q0-1-.675-1.675T24 7.25q-1 0-1.675.675T21.65 9.6Z"/></svg>
      </div>
    `;
  }
}
