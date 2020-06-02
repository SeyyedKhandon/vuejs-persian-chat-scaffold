import { CustomRouteConfig } from "@/types/router";
import { errorRoutes } from "./modules/errorRoutes";
import { outerRoutes } from "./modules/outerRoutes";
import { innerRoutes } from "./modules/innerRoutes";
const routes = (): Array<CustomRouteConfig> => [
  innerRoutes(),
  ...outerRoutes(),
  ...errorRoutes
];

export { routes };
