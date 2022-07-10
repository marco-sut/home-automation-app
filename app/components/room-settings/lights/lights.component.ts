import { BaseComponent } from "../../../lib";
import styles from "./_lights.component.scss";

export class LightsComponent extends BaseComponent {
  private room = decodeURIComponent(new URLSearchParams(window.location.search).get('room') ?? '');

  protected connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <ul class="${styles['lights-list']}">
        <li class="${styles['lights-list__item']}">
          <p class="${styles['lights-list__title']}">Ceiling</p>
          <div class="${styles['lights-list__btn-group']}">
            <app-button type="button" label="Off" theme="secondary"></app-button>
            <app-button type="button" label="On"></app-button>
          </div>
        </li>
        <li class="${styles['lights-list__item']}">
          <p class="${styles['lights-list__title']}">Lamp</p>
          <div class="${styles['lights-list__btn-group']}">
            <app-button type="button" label="Off" theme="secondary"></app-button>
            <app-button type="button" label="On"></app-button>
          </div>
        </li>
        <li class="${styles['lights-list__item']}">
          <p class="${styles['lights-list__title']}">Service light</p>
          <div class="${styles['lights-list__btn-group']}">
            <app-button type="button" label="Off" theme="secondary"></app-button>
            <app-button type="button" label="On"></app-button>
          </div>
        </li>
        <li class="${styles['lights-list__item']}">
          <p class="${styles['lights-list__title']}">Additional light</p>
          <div class="${styles['lights-list__btn-group']}">
            <app-button type="button" label="Off" theme="secondary"></app-button>
            <app-button type="button" label="On"></app-button>
          </div>
        </li>
        <li class="${styles['lights-list__item']}">
          <p class="${styles['lights-list__title']}">Night light</p>
          <div class="${styles['lights-list__btn-group']}">
            <app-button type="button" label="Off" theme="secondary"></app-button>
            <app-button type="button" label="On"></app-button>
          </div>
        </li>
      </ul>
    `;
  }
}
