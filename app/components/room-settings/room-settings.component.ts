import { BaseComponent } from "../../lib/core";
import styles from './_room-settings.component.scss';

export class RoomSettingsComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  get renderLeftCol() {
    return `
      <app-header pageTitle='Living room' pageSubtitle='${this.linksList}'></app-header>
    `;
  }

  get renderRightCol() {
    return `
      <app-room-settings-thermostat></app-room-settings-thermostat>
    `;
  }

  // get renderRightCol() {
  //   return `
  //     <app-room-settings-lights></app-room-settings-lights>
  //   `;
  // }

  get linksList() {
    return `
      <ul class=${styles['links-list']}>
        <li><a href=#><app-icon-thermostat></app-icon-thermostat> <span class=${styles['links-list__item-text']}>Thermostat</span></a></li>
        <li><a href=# class=${styles['active']}><app-icon-light-bulb></app-icon-light-bulb> <span class=${styles['links-list__item-text']}>Lights</span></a></li>
      </ul>
      <div class=${styles['back-button']}>
        <app-button type=button label=Back></app-button>
      </div>
    `;
  }

  render(): string {
    return `
      <app-layout 
        leftCol="${this.renderLeftCol}" 
        rightCol="${this.renderRightCol}">
      </app-layout>
    `;
  }
}