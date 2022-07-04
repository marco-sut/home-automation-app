import { HomeAutomationApp } from "../../app";
import { 
  ContainerComponent
} from "../../components";

interface ComponentRegistry {
  tagName: string;
  component: any;
}

const components: ComponentRegistry[] = [
  {
    tagName: 'home-automation-app',
    component: HomeAutomationApp
  },
  {
    tagName: 'app-container',
    component: ContainerComponent
  }
]

export const bootstrap = () => {
  components.forEach(component => {
    window.customElements.define(component.tagName, component.component);
  });
}
