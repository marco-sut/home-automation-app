import { HomeAutomationApp } from "../../app";
import {
  HomeComponent, LoginComponent, NotFoundComponent, RoomsComponent, RoomSettingsComponent
} from "../../components";

interface ComponentRegistry {
  tagName: string;
  component: any;
}

const components: ComponentRegistry[] = [
  {
    tagName: 'home-automation-app',
    component: HomeAutomationApp,
  },
  {
    tagName: 'app-home',
    component: HomeComponent,
  },
  {
    tagName: 'app-login',
    component: LoginComponent,
  },
  {
    tagName: 'app-rooms',
    component: RoomsComponent,
  },
  {
    tagName: 'app-room-settings',
    component: RoomSettingsComponent,
  },
  {
    tagName: 'app-404',
    component: NotFoundComponent,
  }
]

export const bootstrap = () => {
  components.forEach(component => {
    window.customElements.define(component.tagName, component.component);
  });
}
