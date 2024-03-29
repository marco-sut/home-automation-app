import { BaseComponent, navigateTo, Store } from "../../../lib";
import styles from "./_rooms-list.component.scss";

export class RoomsListComponent extends BaseComponent {
  private store: Store;
  private roomsList: Element | null;

  private handleRoomClickRef = this.handleRoomClick.bind(this);

  constructor() {
    super();
    this.store = this.connectToStore();
  }

  protected connectedCallback() {
    this.render();
  }

  protected disconnectedCallback() {
    this.detachHandlers();
  }

  private attachHandlers() {
    this.roomsList = document.querySelector('#rooms-list');
    this.roomsList?.addEventListener('click', this.handleRoomClickRef);
  }

  private detachHandlers() {
    this.roomsList?.removeEventListener('click', this.handleRoomClickRef);
  }

  private handleRoomClick(event: Event) {
    event.preventDefault();

    const target = (event.target as HTMLElement).closest('.room');
    const room = (target as HTMLElement).dataset.room;

    if (room) {
      navigateTo({}, `/room-settings?room=${encodeURIComponent(room)}`);
    }
  }

  render() {
    this.detachHandlers();
    this.innerHTML = `
      <div class="${styles['rooms-list__wrapper']}">
        <ul id="rooms-list" class="${styles['rooms-list']}">
          ${this.store.state.rooms.map((room) => `
            <li>
              <a href="#" class="room" data-room="${room}">
                <figure>
                  ${getIcon(room)}
                  <figcaption>${room}</figcaption>
                </figure>
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
    this.attachHandlers();
  }
}

function getIcon(room: string) {
  switch (room) {
    case 'Kitchen':
      return '<app-icon-kitchen></app-icon-kitchen>';
    case 'Living room':
      return '<app-icon-living-room></app-icon-living-room>';
    case 'Master bedroom':
      return '<app-icon-bedroom></app-icon-bedroom>';
    case 'Children bedroom':
      return '<app-icon-kids-bedroom></app-icon-kids-bedroom>';
    default:
      return '<app-icon-default-room></app-icon-default-room>'
  }
}