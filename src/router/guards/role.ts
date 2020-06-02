import store from "@/store/";
import { Route } from "vue-router";

export default function checkRole(to: Route, from: Route, next: Function) {
  const fakeLogin = store.getters.getFakeLogin;
  const requiredRole = to.meta.requiredLevel;
  if (requiredRole === undefined) {
    next();
  } else {
    if (fakeLogin.accessToken === "") {
      next("/login");
    } else {
      const role = fakeLogin.role;
      if (role <= requiredRole) {
        next();
      } else {
        next("/403");
      }
    }
  }
}
