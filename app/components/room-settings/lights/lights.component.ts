import { apiService, BaseComponent, DeviceRef, DeviceType, executeAction, queryAction, Store, TraitCommand } from "../../../lib";
import styles from "./_lights.component.scss";

export class LightsComponent extends BaseComponent {
  private store: Store;
  private room = decodeURIComponent(new URLSearchParams(window.location.search).get('room') ?? '');
  private lightsRef: DeviceRef[];

  private lightsList: Element | null;

  private handleLightSwitchRef = this.handleLightSwitch.bind(this);
  private connectedToStoreCallback = this.render.bind(this);

  get lightsData() {
    return this.store.state.devicesData;
  }

  constructor() {
    super();
    this.store = this.connectToStore(this.connectedToStoreCallback);
    this.lightsRef = this.store.state.devices.filter((device) => device.type === DeviceType.LIGHT && device.room === this.room);
  }

  protected async connectedCallback() {
    if (!this.lightsRef.length) {
      this.renderNotFound();
      return;
    }

    this.renderLoading();

    try {
      const { devices } = await apiService.query({ devices: this.lightsRef.map((light) => ({ id: light.id })) });
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
    this.lightsList = document.querySelector('#lights-list');
    this.lightsList?.addEventListener('click', this.handleLightSwitchRef);
  }

  private detachHandlers() {
    this.lightsList?.removeEventListener('click', this.handleLightSwitchRef);
  }

  private async handleLightSwitch(event: Event) {
    const target = (event.target as HTMLElement);
    const lightId = target.id;
    const on = (target.closest('[data-on]') as HTMLElement).dataset.on === 'true';
    const prevOn = this.lightsData[lightId].on;

    if (on === prevOn) {
      return;
    }

    // Optimistic update
    this.store.dispatch(executeAction({ [lightId]: { on } }));

    try {
      const resp = await apiService.execute({ deviceId: lightId, command: TraitCommand.ON_OFF, params: { on } });

      if (resp.status === 'ERROR') {
        throw new Error(resp.errorDesc);
      }
    } catch (err) {
      // rollback value on error
      this.store.dispatch(executeAction({ [lightId]: { on: prevOn } }));
      this.renderError(err);
      throw new Error(`Error: ${err}`);
    }
  }

  render() {
    this.detachHandlers();
    this.innerHTML = `
      <ul id="lights-list" class="${styles['lights-list']}">
        ${this.lightsRef.map((lightRef) => `
          <li class="${styles['lights-list__item']}">
            <p class="${styles['lights-list__title']}">${lightRef.name}</p>
            <div class="${styles['lights-list__btn-group']}">
              <app-button buttonId="${lightRef.id}" data-on="false" type="button" label="Off" ${this.lightsData[lightRef.id].on ? "theme='secondary'" : ""} ></app-button>
              <app-button buttonId="${lightRef.id}" data-on="true" type="button" label="On" ${this.lightsData[lightRef.id].on ? "" : "theme='secondary'"}></app-button>
            </div>
          </li>
        `).join('')}
      </ul>
    `;
    this.attachHandlers();
  }

  renderLoading() {
    this.innerHTML = `<h3>Loading...</h3>`;
  }

  renderNotFound() {
    this.innerHTML = '<h3>No lights found</h3>';
  }

  renderError(errorMessage?: string) {
    this.render();
    this.innerHTML = this.innerHTML + `<h4 style="color: red; margin-top: 1em; text-align: center;">Something went wrong. ${errorMessage}</h4>`;
  }
}
