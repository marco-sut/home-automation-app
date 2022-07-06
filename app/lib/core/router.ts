import { store } from "../store";
import { ActionTypes } from "../store/actions";

const routes = [
  {
    path: '/',
    template: '<app-home></app-home>',
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
  {
    path: '**',
    template: '<app-404></app-404>',
  },
];

function dispatchNavigationOnRouteChange() {
  let route = routes.find(route => route.path == window.location.pathname);

  if (route?.template) {
    store.dispatch(ActionTypes.Navigate, route.template);
  } else {
    store.dispatch(ActionTypes.Navigate, routes[routes.length - 1].template);
  }
}

export function initRouter() {
  window.addEventListener('popstate', dispatchNavigationOnRouteChange);
  window.addEventListener('DOMContentLoaded', dispatchNavigationOnRouteChange);
}

export function navigateTo({data, url}: { data: any, url?: string | URL | null }) {
  history.pushState(data, '', url);
  dispatchEvent(new PopStateEvent('popstate'));
}