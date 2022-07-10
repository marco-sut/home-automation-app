import { BaseComponent, navigateTo } from "../../lib";
import styles from './_room-settings.component.scss';

export class RoomSettingsComponent extends BaseComponent {
  private room = decodeURIComponent(new URLSearchParams(window.location.search).get('room') ?? '');

  private devicesTypesList: Element | null;
  private backCta: Element | null;
  
  private activeDeviceType: 'thermostat' | 'lights' = 'thermostat';

  private handleDeviceTypeClickRef = this.handleDeviceTypeClick.bind(this);
  private handleBackCtaClickRef = this.handleBackCtaClick.bind(this);

  protected connectedCallback() {
    this.render();
  }

  protected disconnectedCallback() {
    this.detachHandlers();
  }

  private attachHandlers() {
    this.devicesTypesList = document.querySelector('#devicesTypesList');
    this.backCta = document.querySelector('#back-cta');

    this.devicesTypesList?.addEventListener('click', this.handleDeviceTypeClickRef);
    this.backCta?.addEventListener('click', this.handleBackCtaClickRef);
  }

  private detachHandlers() {
    this.devicesTypesList?.removeEventListener('click', this.handleDeviceTypeClickRef);
    this.backCta?.removeEventListener('click', this.handleBackCtaClickRef);
  }

  private handleDeviceTypeClick(event: Event) {
    event.preventDefault();

    const thermostatCta = (event.target as HTMLElement).closest('#thermostat-cta');
    const lightsCta = (event.target as HTMLElement).closest('#lights-cta');

    if (thermostatCta) {
      this.activeDeviceType = 'thermostat';
    } else if (lightsCta) {
      this.activeDeviceType = 'lights';
    }

    this.connectedCallback();
  }

  private handleBackCtaClick(event: Event) {
    event.preventDefault();
    navigateTo({}, '/rooms');
  }

  get renderLeftCol() {
    return `
      <app-header pageTitle='${this.room}' pageSubtitle='${this.linksList}'></app-header>
    `;
  }

  get renderRightCol() {
    return `
      ${this.activeDeviceType === 'thermostat' ? '<app-room-settings-thermostat></app-room-settings-thermostat>' : ''}
      ${this.activeDeviceType === 'lights' ? '<app-room-settings-lights></app-room-settings-lights>': ''}
    `;
  }

  get linksList() {
    return `
      <ul id=devicesTypesList class=${styles['links-list']}>
        <li>
          <a id=thermostat-cta href=# class=${this.activeDeviceType === 'thermostat' && styles['active']}>
            <app-icon-thermostat></app-icon-thermostat> <span class=${styles['links-list__item-text']}>Thermostat</span>
          </a>
        </li>
        <li>
          <a id=lights-cta href=# class=${this.activeDeviceType === 'lights' && styles['active']}>
            <app-icon-light-bulb></app-icon-light-bulb> <span class=${styles['links-list__item-text']}>Lights</span>
          </a>
        </li>
      </ul>
      <div class=${styles['back-button']}>
        <app-button buttonId=back-cta type=button label=Back></app-button>
      </div>
    `;
  }

  render() {
    this.detachHandlers();
    this.innerHTML = `
      <app-layout 
        leftCol="${this.renderLeftCol}" 
        rightCol="${this.renderRightCol}">
      </app-layout>
    `;
    this.attachHandlers();
  }
}