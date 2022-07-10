import { store } from "../store";
import { ActionTypes } from "../store/actions";
import { EventsTypes } from "./pubsub";

const routes = [
  {
    path: '/authenticate',
    template: '<app-authenticate></app-authenticate>',
  },
  {
    path: '/login',
    template: '<app-login></app-login>',
  },
  {
    path: '/rooms',
    template: '<app-rooms></app-rooms>',
  },
  {
    path: '/room-settings',
    template: '<app-room-settings></app-room-settings>',
  },
];

function dispatchNavigationOnRouteChange() {
  const route = routes.find(route => route.path == window.location.pathname);

  if (route?.template) {
    store.dispatch<string>(ActionTypes.Navigate, route.template, EventsTypes.RouteChange);
  } else {
    store.dispatch<string>(ActionTypes.Navigate, '<app-404></app-404>', EventsTypes.RouteChange);
  }
}

export function initRouter() {
  window.addEventListener('popstate', dispatchNavigationOnRouteChange);
  window.addEventListener('DOMContentLoaded', dispatchNavigationOnRouteChange);
}

export function navigateTo(data: string | object, url: string | URL | null) {
  history.pushState(data, '', url);
  dispatchEvent(new PopStateEvent('popstate'));
}
