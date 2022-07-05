import { BaseComponent } from "../../../lib/core";

export class HeaderComponent extends BaseComponent {
  get pageTitle() {
    return this.getAttribute('pageTitle');
  }

  get pageSubtitle() {
    return this.getAttribute('pageSubtitle');
  }

  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
      <header>
        <img src="/assets/img/Adobe_Experience_Cloud_logo.svg" alt="Adobe logo">
        <h1>${this.pageTitle}</h1>
        <h2>${this.pageSubtitle}</h2>
      </header>
    `;
  }
}