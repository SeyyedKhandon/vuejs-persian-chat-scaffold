import store from "@/store/";
import { Route } from "vue-router";

export default function checkAuth(to: Route, from: Route, next: Function) {
  if (to.matched.some(record => record.meta.requiresUser)) {
    if (store.getters.getFakeLogin.accessToken) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
}
