import { BaseComponent } from "./lib/core";

export class HomeAutomationApp extends BaseComponent {

  connectedCallback() {
    this.innerHTML = this.render();
  }

  render() {
    return '<app-container></app-container>';
  };

}