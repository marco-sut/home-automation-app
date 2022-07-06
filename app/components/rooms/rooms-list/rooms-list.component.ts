import { BaseComponent } from "../../../lib/core";
import styles from "./_rooms-list.component.scss";

export class RoomsListComponent extends BaseComponent {
  protected connectedCallback(): void {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
    <div class="${styles['rooms-list__wrapper']}">
      <ul class="${styles['rooms-list']}">
        <li>
          <a href="#">
            <figure>
              <app-icon-kitchen></app-icon-kitchen>
              <figcaption>Kitchen</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <app-icon-living-room></app-icon-living-room>
              <figcaption>Living room</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <app-icon-bedroom></app-icon-bedroom>
              <figcaption>Bedroom</figcaption>
            </figure>
          </a>
        </li>
        <li>
          <a href="#">
            <figure>
              <app-icon-kids-bedroom></app-icon-kids-bedroom>
              <figcaption>Kid's bedroom</figcaption>
            </figure>
          </a>
        </li>
      </ul>
    </div>
    `;
  }
}