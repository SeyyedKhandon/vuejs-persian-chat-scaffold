import { RouteConfig } from "vue-router/types/router";

export interface CustomRouteConfig extends RouteConfig {
  meta?: any | RouteMeta;
}
export interface RouteMeta {
  requiresAuth?: boolean;
  requiredLevel?: boolean;
  hidden?: boolean;
  breadcrumb?: RouteBreadcrumb[];
  pageTitle?: string;
}
export interface RouteBreadcrumb {
  title?: string;
  url?: string;
}
