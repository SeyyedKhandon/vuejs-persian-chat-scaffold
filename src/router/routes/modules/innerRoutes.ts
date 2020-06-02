import AppLayout from "@/views/layout/AppLayout.vue";
import { RoleAccessLevel } from "@/types/auth";
import { i18n_t } from "@/hooks/locales/useLocale";
import { CustomRouteConfig } from "@/types/router";
const innerRoutes = (): CustomRouteConfig => ({
  path: "/",
  redirect: "/home",
  component: AppLayout,
  children: [
    {
      path: "/home",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/pages/Home.vue"),

      meta: {
        requiresAuth: true,
        requiredLevel: RoleAccessLevel.User,
        hidden: false,
        breadcrumb: [{ title: i18n_t("data.menu.home.title"), url: "/" }],
        icon: "Home",
        title: i18n_t("data.menu.home.title"),
        pageTitle: i18n_t("data.menu.home.pageTitle")
      }
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/pages/About.vue"),
      meta: {
        requiresAuth: true,
        requiredLevel: RoleAccessLevel.User,
        hidden: false,
        breadcrumb: [{ title: i18n_t("data.menu.about.title"), url: "/about" }],
        icon: "About",
        title: i18n_t("data.menu.about.title"),
        pageTitle: i18n_t("data.menu.about.pageTitle")
      }
    }
  ]
});

export { innerRoutes };
