import { BaseComponent } from "../../../lib";
import styles from './_layout.component.scss';

export class LayoutComponent extends BaseComponent {
  get leftCol() {
    return this.getAttribute('leftCol');
  }

  get rightCol() {
    return this.getAttribute('rightCol');
  }

  protected connectedCallback() {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
      <div class="${styles['wrapper']}">
        <main class="${styles['container']}">
          <section class="${styles['col']}">
            ${this.leftCol}
          </section>
          <section class="${styles['col']}">
            ${this.rightCol}
          </section>
        </main>
      </div>
    `;
  }
}