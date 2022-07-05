import { store } from "./lib/store";
import { ActionTypes } from "./lib/store/actions";

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
];

function dispatchNavigationOnRouteChange() {
  let route = routes.find(route => route.path == window.location.pathname);

  if (route?.template) {
    store.dispatch(ActionTypes.Navigate, route.template);
  } else {
    store.dispatch(ActionTypes.Navigate, '<app-404></app-404>');
  }
}

export function init() {
  window.addEventListener('popstate', dispatchNavigationOnRouteChange);
  window.addEventListener('DOMContentLoaded', dispatchNavigationOnRouteChange);
}


// history.pushState(null, null, '/rooms');
// dispatchEvent(new PopStateEvent('popstate'));