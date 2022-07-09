import { AuthService } from "./auth.service";

export * from "./base.component";
export * from "./core";
export * from "./pubsub";
export * from "./router";
export * from "./utils";

export { authConfig } from "./auth.service";
export const authService = new AuthService();
