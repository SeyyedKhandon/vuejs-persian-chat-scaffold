// import { CustomRouteConfig } from "@/types/router";
import { errorRoutes } from "./modules/errorRoutes";
import { outerRoutes } from "./modules/outerRoutes";
import { innerRoutes } from "./modules/innerRoutes";
const routes = (): Array<any> => [
  innerRoutes(),
  ...outerRoutes(),
  ...errorRoutes
];

export { routes };
