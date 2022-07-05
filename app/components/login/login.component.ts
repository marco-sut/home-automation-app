import { BaseComponent } from "../../lib/core";
import styles from "./_login.component.scss";

export class LoginComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <div class="${styles['wrapper']}">
      <div class="${styles['brand']}">
        <img src="/assets/img/adobe_logo_white.svg" alt="Adobe logo">
      </div>
      <article class="${styles['card']}">
        <img src="/assets/img/adobe_logo_black.svg" alt="Adobe logo" class="${styles['mobile-logo']}">
        <h1 class="${styles['card__title']}">Sign in</h1>
        <form>
          <p>
            <app-input inputId="email" inputLabel="Email"></app-input>
          </p>
          <p>
            <app-input inputId="password" inputLabel="Password"></app-input>
          </p>
          <div class="${styles['button-wrapper']}">
            <app-button type="submit" label="Sign in"></app-button>
          </div>
        </form>
      </article>
    </div>
    `;
  }
}
