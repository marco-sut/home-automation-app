import "./styles/base";
import * as core from "./lib/core";

if (process.env.NODE_ENV === 'development') {
  import('../mocks/browser').then(({ worker }) => {
    worker.start();
  });
}

core.registerComponents();
core.initRouter();

