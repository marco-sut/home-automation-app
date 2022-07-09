import { BaseComponent } from "../../../core";
import styles from './_bedroom.component.scss';

export class BedroomIconComponent extends BaseComponent {
  protected connectedCallback() {
    this.innerHTML = this.render();
  }

  render(): string {
    return `
      <div class="${styles['icon']}">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M5 37V25.45q0-1.05.5-2.1t1.5-1.6V16.5q0-1.9 1.3-3.2Q9.6 12 11.5 12h9.2q1.05 0 1.9.475.85.475 1.4 1.275.55-.8 1.375-1.275Q26.2 12 27.25 12h9.25q1.9 0 3.2 1.3 1.3 1.3 1.3 3.2v5.25q1 .55 1.5 1.6t.5 2.1V37h-2.25v-4H7.25v4Zm20.15-15.85h13.6V16.5q0-.95-.675-1.6-.675-.65-1.575-.65h-9.35q-.85 0-1.425.675-.575.675-.575 1.575Zm-15.9 0h13.6V16.5q0-.9-.575-1.575-.575-.675-1.425-.675H11.5q-.9 0-1.575.675-.675.675-.675 1.575Zm-2 9.6h33.5v-5.3q0-.85-.575-1.425-.575-.575-1.425-.575H9.25q-.85 0-1.425.575-.575.575-.575 1.425Zm33.5 0H7.25h33.5Z"/></svg>
      </div>    
    `;
  }
}
