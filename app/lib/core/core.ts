import { HomeAutomationApp } from "../../app";
import {
  LoginComponent, NotFoundComponent, RoomsComponent, RoomSettingsComponent, RoomsListComponent
} from "../../components";
import { HeaderComponent, LayoutComponent, InputComponent, ButtonComponent } from "../ui";

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
    tagName: 'app-login',
    component: LoginComponent,
  },
  {
    tagName: 'app-rooms',
    component: RoomsComponent,
  },
  {
    tagName: 'app-rooms-list',
    component: RoomsListComponent,
  },
  {
    tagName: 'app-room-settings',
    component: RoomSettingsComponent,
  },
  {
    tagName: 'app-404',
    component: NotFoundComponent,
  },
  {
    tagName: 'app-header',
    component: HeaderComponent,
  },
  {
    tagName: 'app-layout',
    component: LayoutComponent,
  },
  {
    tagName: 'app-input',
    component: InputComponent,
  },
  {
    tagName: 'app-button',
    component: ButtonComponent,
  },
]

export const registerComponents = () => {
  components.forEach(component => {
    window.customElements.define(component.tagName, component.component);
  });
}
