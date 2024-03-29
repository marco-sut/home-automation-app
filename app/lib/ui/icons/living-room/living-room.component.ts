import { BaseComponent } from "../../../core";
import styles from './_living-room.component.scss';

export class LivingRoomIconComponent extends BaseComponent {
  protected connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="${styles['icon']}">
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M9.8 40.35q-.5 0-.825-.325-.325-.325-.325-.825v-2.05h-1q-1.95 0-3.3-1.35Q3 34.45 3 32.5V20.9q0-2.25 1.375-3.325Q5.75 16.5 7.4 16.5v-3.85q0-1.95 1.25-3.175Q9.9 8.25 11.8 8.25h24.4q1.95 0 3.175 1.225Q40.6 10.7 40.6 12.65v3.85q1.75 0 3.075 1.1Q45 18.7 45 20.9v11.6q0 1.95-1.35 3.3-1.35 1.35-3.3 1.35h-1v2.05q0 .5-.325.825-.325.325-.775.325t-.8-.325q-.35-.325-.35-.825v-2.05H10.9v2.05q0 .5-.325.825-.325.325-.775.325Zm-2.15-5.5h32.7q1 0 1.7-.7t.7-1.65V20.9q0-.95-.6-1.55-.6-.6-1.55-.6-.95 0-1.55.6-.6.6-.6 1.55V29H9.55v-8.1q0-.95-.6-1.55-.6-.6-1.55-.6-.95 0-1.55.6-.6.6-.6 1.55v11.6q0 .95.7 1.65t1.7.7Zm4.15-8.15h24.4v-5.8q0-1.35.65-2.3.65-.95 1.45-1.45v-4.5q0-.95-.6-1.55-.6-.6-1.5-.6H11.8q-.9 0-1.5.6t-.6 1.55v4.5q.8.5 1.45 1.45.65.95.65 2.3Zm12.2 0Zm0 8.15ZM24 29Z"/></svg>
      </div>    
    `;
  }
}
