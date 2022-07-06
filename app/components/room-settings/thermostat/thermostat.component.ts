import { BaseComponent } from "../../../lib/core";
import styles from "./_thermostat.component.scss";

export class ThermostatComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <article class="${styles['thermostat']}">
      <svg viewBox="-1 -1 102 102" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="60" r="50" fill="#ffffff" stroke="rgb(150, 150, 150)" stroke-width="0.3"></circle>
      </svg>
      <h3 class="${styles['thermostat__label']}" aria-label="current room temperature 22 degrees">22</h3>
      <div class="${styles['thermostat__controls']}">
        <button type="button"><app-icon-minus></app-icon-minus> <span class="sr-only">Turn down the temperature</span></button>
        <button type="button"><app-icon-plus></app-icon-plus> <span class="sr-only">Turn up the temperature</span></button>
      </div>
    </article>
    `;
  }
}