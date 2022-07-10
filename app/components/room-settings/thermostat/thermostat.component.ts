import { BaseComponent, Device, DeviceType, Store, apiService, queryAction } from "../../../lib";
import styles from "./_thermostat.component.scss";

export class ThermostatComponent extends BaseComponent {
  private store: Store;
  private thermostat?: Device;

  constructor() {
    super();
    this.store = this.connectToStore();
    this.thermostat = this.store.state.devices.find((device) => device.type === DeviceType.THERMOSTAT);
  }

  protected async connectedCallback() {
    if (!this.thermostat) {
      this.innerHTML = '<h3>No thermostat found</h3>';
      return;
    }

    this.innerHTML = this.loading();

    const { devices } = await apiService.query([{ id: this.thermostat.id }]);
    this.store.dispatch(queryAction(devices));

    this.innerHTML = this.render();
  }

  loading() {
    return `<h3>Loading...</h3>`;
  }

  render(): string {
    const thermostatData = this.thermostat?.id ? this.store.state.devicesData?.[this.thermostat.id] : null;

    return `
    <article class="${styles['thermostat']}">
      <svg viewBox="-1 -1 102 102" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="60" r="50" fill="#ffffff" stroke="rgb(150, 150, 150)" stroke-width="0.3"></circle>
      </svg>
      <h3 class="${styles['thermostat__label']}" aria-label="current room temperature 22 degrees">${thermostatData ? thermostatData.temperatureSetpoint : 'NA'}</h3>
      <div class="${styles['thermostat__controls']}">
        <button type="button">
          <app-icon-minus></app-icon-minus> <span class="sr-only">Turn down the temperature</span>
        </button>
        <button type="button">
          <app-icon-plus></app-icon-plus> <span class="sr-only">Turn up the temperature</span>
        </button>
      </div>
    </article>
    `;
  }
}
