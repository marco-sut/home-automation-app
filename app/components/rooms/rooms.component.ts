import { BaseComponent } from "../../lib/core";

export class RoomsComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  get renderLeftCol() {
    return `
      <app-header pageTitle='<div>Welcome</div> <div>Erika Mustermann</div> <div>to Adobe Home</div>' pageSubtitle='Select a room'></app-header>
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