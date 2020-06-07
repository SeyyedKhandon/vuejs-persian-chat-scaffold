import Login from "@/views/pages/login/Login.vue";
import { i18n_t } from "@/views/components/langSwitch/useLocale";

const outerRoutes = () => [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false,
      icon: "Login",
      title: i18n_t("data.menu.login.title"),
      pageTitle: i18n_t("data.menu.login.pageTitle")
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
      requiresAuth: false,
      hidden: false,
      breadcrumb: [{ title: i18n_t("data.menu.about.title"), url: "/about" }],
      icon: "About",
      title: i18n_t("data.menu.about.title"),
      pageTitle: i18n_t("data.menu.about.pageTitle")
    }
  }
];

export { outerRoutes };
