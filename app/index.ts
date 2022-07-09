import "./styles/base";
import * as core from "./lib/core";
import { store } from "./lib/store";

if (process.env.NODE_ENV === 'development') {
  import('../mocks/browser').then(({ worker }) => {
    worker.start();
  });
}

core.registerComponents();
core.initRouter();

if (!store.state.user) {
  core.authService.initPkce();
}
