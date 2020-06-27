import { RoleAccessLevel } from "@/types/auth";
import { Component } from "vue";

export interface CustomRouteConfig {
  path: string;
  name?: string;
  component: Component | Function;
  meta?: RouteMeta;
  children?: CustomRouteConfig[];
}
export interface RouteMeta {
  requiresAuth?: boolean;
  requiredLevel?: RoleAccessLevel;
  hidden?: boolean;
  breadcrumb?: RouteBreadcrumb[];
  pageTitle?: string;
  icon: string;
  title: string;
}
export interface RouteBreadcrumb {
  title?: string;
  url?: string;
}
