import { BaseComponent, DeviceRef, DeviceType, Store, apiService, queryAction, DeviceData, executeAction, TraitCommand } from "../../../lib";
import { THERMOSTAT_DEFAULT_TEMP, THERMOSTAT_HIGHEST_TEMP, THERMOSTAT_LOWEST_TEMP } from "../../../lib/core/constants";
import styles from "./_thermostat.component.scss";

export class ThermostatComponent extends BaseComponent {
  private store: Store;
  private thermostatRef?: DeviceRef;

  private increaseTempButton: Element | null;
  private decreaseTempButton: Element | null;

  private handleTempSetPointRef = this.handleTemperatureSetPoint.bind(this);
  private connectedToStoreCallback = this.render.bind(this);

  get thermostat(): DeviceData {
    return this.store.state.devicesData[this.thermostatRef?.id ?? -1];
  }

  constructor() {
    super();
    this.store = this.connectToStore(this.connectedToStoreCallback);
    this.thermostatRef = this.store.state.devices.find((device) => device.type === DeviceType.THERMOSTAT);
  }

  protected async connectedCallback() {
    if (!this.thermostatRef) {
      this.renderNotFound();
      return;
    }

    this.renderLoading();

    try {
      const { devices } = await apiService.query({ devices: [{ id: this.thermostatRef.id }] });
      this.store.dispatch(queryAction(devices));
    } catch (err) {
      this.renderError();
      throw new Error(`Error: ${err}`);
    }

    this.render();
  }

  protected disconnectedCallback() {
    this.detachHandlers();
    this.disconnectFromStore(this.connectedToStoreCallback);
  }

  private attachHandlers() {
    this.increaseTempButton = document.querySelector('#increase-temp-button');
    this.decreaseTempButton = document.querySelector('#decrease-temp-button');

    this.increaseTempButton?.addEventListener('click', this.handleTempSetPointRef);
    this.decreaseTempButton?.addEventListener('click', this.handleTempSetPointRef);
  }

  private detachHandlers() {
    this.increaseTempButton?.removeEventListener('click', this.handleTempSetPointRef);
    this.decreaseTempButton?.removeEventListener('click', this.handleTempSetPointRef);
  }

  private async handleTemperatureSetPoint(event: Event) {
    event.preventDefault();

    const buttonId = (event.target as HTMLElement).closest('button')?.id;
    const currentTemp = this.thermostat.temperatureSetpoint ?? THERMOSTAT_DEFAULT_TEMP;

    switch (buttonId) {
      case 'increase-temp-button':
        this.setTemp(currentTemp, currentTemp + 1);
        break;
      case 'decrease-temp-button':
        this.setTemp(currentTemp, currentTemp - 1);
        break;
    }
  }

  private async setTemp(currentTemp: number, nextTemp: number) {
    if (!this.thermostatRef?.id || (nextTemp < THERMOSTAT_LOWEST_TEMP || nextTemp > THERMOSTAT_HIGHEST_TEMP)) {
      return;
    }

    // Optimistic update
    this.store.dispatch(executeAction({ [this.thermostatRef.id]: { ...this.thermostat, temperatureSetpoint: nextTemp } }));

    try {
      const resp = await apiService.execute({ deviceId: this.thermostatRef.id, command: TraitCommand.TEMPERATURE_SETTING, params: { temperatureSetpoint: nextTemp } });

      if (resp.status === 'ERROR') {
        throw new Error(resp.errorDesc);
      }
    } catch (err) {
      // rollback value on error
      this.store.dispatch(executeAction({ [this.thermostatRef.id]: { ...this.thermostat, temperatureSetpoint: currentTemp } }));
      this.renderError(err);
      throw new Error(`Error: ${err}`);
    }
  }

  render() {
    this.detachHandlers();
    this.innerHTML = `
      <article class="${styles['thermostat']}">
        <svg viewBox="-1 -1 102 102" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="60" r="50" fill="#ffffff" stroke="rgb(150, 150, 150)" stroke-width="0.3"></circle>
        </svg>
        <h3 class="${styles['thermostat__label']}" aria-label="current room temperature 22 degrees">${this.thermostat.temperatureSetpoint ?? 'NA'}</h3>
        <div class="${styles['thermostat__controls']}">
          <button type="button" id="decrease-temp-button">
            <app-icon-minus></app-icon-minus> <span class="sr-only">Turn down the temperature</span>
          </button>
          <button type="button" id="increase-temp-button">
            <app-icon-plus></app-icon-plus> <span class="sr-only">Turn up the temperature</span>
          </button>
        </div>
      </article>
    `;
    this.attachHandlers();
  }

  renderLoading() {
    this.innerHTML = `<h3>Loading...</h3>`;
  }

  renderError(errorMessage?: string) {
    this.render();
    this.innerHTML = this.innerHTML + `<h4 style="color: red; margin-top: 1em; text-align: center;">Something went wrong. ${errorMessage}</h4>`;
  }

  renderNotFound() {
    this.innerHTML = '<h3>No thermostat found</h3>';
  }
}
