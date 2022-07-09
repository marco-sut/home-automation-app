import { BaseComponent, navigateTo } from "../../lib";
import styles from "./_login.component.scss";

export class LoginComponent extends BaseComponent {
  private queryParams = new URLSearchParams(window.location.search);
  private signInForm: HTMLFormElement | null;
  private emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  private passwordMinLength = 4;

  protected connectedCallback(): void {
    this.innerHTML = this.render();
    this.attachHandlers();
  }

  protected disconnectedCallback() {
    this.detachHandlers();
  }

  private attachHandlers() {
    this.signInForm = document.querySelector('#signInForm');
    this.signInForm?.addEventListener('submit', this.handleSignIn.bind(this));
  }

  private detachHandlers() {
    this.signInForm?.removeEventListener('submit', this.handleSignIn.bind(this));
  }

  private handleSignIn(event: SubmitEvent) {
    event.preventDefault();
    let hasError = false;

    const email: string = (this.signInForm?.querySelector('#email') as HTMLFormElement).value;
    const password: string = (this.signInForm?.querySelector('#password') as HTMLFormElement).value;

    const emailError = this.signInForm?.querySelector('#emailError') as Element;
    const passwordError = this.signInForm?.querySelector('#passwordError') as Element;
    emailError.innerHTML = '';
    passwordError.innerHTML = '';

    if (!email || !email.match(this.emailRegEx)) {
      hasError = true;
      emailError.innerHTML = 'Please insert a valid email';
    }

    if (!password || password.length < this.passwordMinLength) {
      hasError = true;
      passwordError.innerHTML = 'Your password needs to be at least of 4 characters';
    }

    if (hasError) {
      return;
    }

    const redirectUri = decodeURIComponent(this.queryParams.get('redirect_uri') ?? '');
    const state = decodeURIComponent(this.queryParams.get('state') ?? '');

    navigateTo({}, `${redirectUri}?code=123456&state=${state}`);
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
        <form id="signInForm">
          <p>
            <app-input inputId="email" inputLabel="Email"></app-input>
            <span id="emailError" class="${styles['error']}"></span>
          </p>
          <p>
            <app-input inputId="password" inputLabel="Password"></app-input>
            <span id="passwordError" class="${styles['error']}"></span>
          </p>
          <div class="${styles['button-wrapper']}">
            <app-button id="signInButton" type="submit" label="Sign in"></app-button>
          </div>
        </form>
      </article>
    </div>
    `;
  }
}
