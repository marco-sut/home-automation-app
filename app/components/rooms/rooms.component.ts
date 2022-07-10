import { BaseComponent, Store } from "../../lib";

export class RoomsComponent extends BaseComponent {
  private store: Store;

  constructor() {
    super();
    this.store = this.connectToStore();
  }

  protected connectedCallback() {
    this.render();
  }

  get renderLeftCol() {
    return `
      <app-header pageTitle='<div>Welcome</div> <div>${this.store.state.user?.name}</div> <div>to Adobe Home</div>' pageSubtitle='Select a room'></app-header>
    `;
  }

  get renderRightCol() {
    return `<app-rooms-list></app-rooms-list>`;
  }

  render() {
    this.innerHTML = `
      <app-layout 
        leftCol="${this.renderLeftCol}" 
        rightCol="${this.renderRightCol}">
      </app-layout>
    `;
  }
}