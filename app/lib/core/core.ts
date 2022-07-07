import { HomeAutomationApp } from "../../app";
import {
  HomeComponent,
  LightsComponent,
  LoginComponent, NotFoundComponent, RoomsComponent, RoomSettingsComponent, RoomsListComponent, ThermostatComponent
} from "../../components";
import { HeaderComponent, LayoutComponent, InputComponent, ButtonComponent, BedroomIconComponent, KidsBedroomIconComponent, KitchenIconComponent, LivingRoomIconComponent, ThermostatIconComponent, LightBulbIconComponent, PlusIconComponent, MinusIconComponent } from "../ui";

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
    tagName: 'app-rooms-list',
    component: RoomsListComponent,
  },
  {
    tagName: 'app-room-settings',
    component: RoomSettingsComponent,
  },
  {
    tagName: 'app-room-settings-thermostat',
    component: ThermostatComponent,
  },
  {
    tagName: 'app-room-settings-lights',
    component: LightsComponent,
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
  {
    tagName: 'app-icon-kitchen',
    component: KitchenIconComponent,
  },
  {
    tagName: 'app-icon-living-room',
    component: LivingRoomIconComponent,
  },
  {
    tagName: 'app-icon-bedroom',
    component: BedroomIconComponent,
  },
  {
    tagName: 'app-icon-kids-bedroom',
    component: KidsBedroomIconComponent,
  },
  {
    tagName: 'app-icon-thermostat',
    component: ThermostatIconComponent,
  },
  {
    tagName: 'app-icon-light-bulb',
    component: LightBulbIconComponent,
  },
  {
    tagName: 'app-icon-plus',
    component: PlusIconComponent,
  },
  {
    tagName: 'app-icon-minus',
    component: MinusIconComponent,
  },
]

export const registerComponents = () => {
  components.forEach(component => {
    window.customElements.define(component.tagName, component.component);
  });
}
