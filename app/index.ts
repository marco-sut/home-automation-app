import "./styles/base";
import * as core from "./lib/core";

core.registerComponents();
core.initRouter();

if (process.env.NODE_ENV === 'development') {
  import('../mocks/browser').then(({ worker }) => {
    worker.start();
  });
}
