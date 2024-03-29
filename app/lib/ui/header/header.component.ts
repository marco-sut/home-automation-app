import { BaseComponent } from "../../../lib";
import styles from "./_header.component.scss";

export class HeaderComponent extends BaseComponent {
  get pageTitle() {
    return this.getAttribute('pageTitle');
  }

  get pageSubtitle() {
    return this.getAttribute('pageSubtitle');
  }

  protected connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <img class="${styles['logo']}" src="/assets/img/Adobe_Experience_Cloud_logo.svg" height="65" alt="Adobe logo">
        <h1>${this.pageTitle}</h1>
        <h2 class="${styles['subtitle']}">${this.pageSubtitle}</h2>
      </header>
    `;
  }
}