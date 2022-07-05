import { BaseComponent } from "../../lib/core";

export class RoomsComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  get renderLeftCol() {
    return `
      <app-header pageTitle='Welcome Erika Mustermann to your Adobe Home' pageSubtitle='Select a room'></app-header>
    `;
  }

  get renderRightCol() {
    return `<app-rooms-list></app-rooms-list>`;
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