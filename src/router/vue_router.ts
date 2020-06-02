import VueRouter, { RawLocation } from "vue-router";
import { Route } from "vue-router/types/router";
// fix vue-router NavigationDuplicated
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location: RawLocation) {
  return ((VueRouterPush.call(this, location) as unknown) as Promise<
    Route
  >).catch(err => err);
};
const VueRouterReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function push(location: RawLocation) {
  return ((VueRouterReplace.call(this, location) as unknown) as Promise<
    Route
  >).catch(err => err);
};
export default VueRouter;
