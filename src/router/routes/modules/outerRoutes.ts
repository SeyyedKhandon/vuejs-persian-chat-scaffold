import Login from "@/views/pages/Login.vue";
import { i18n_t } from "@/hooks/locales/useLocale";

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
  }
];

export { outerRoutes };
