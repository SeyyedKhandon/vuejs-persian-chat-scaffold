import AppLayout from "@/views/layout/AppLayout.vue";
import { RoleAccessLevel } from "@/types/auth";
import { i18n_t } from "@/views/components/langSwitch/useLocale";
import { CustomRouteConfig } from "@/types/router";
const innerRoutes = (): CustomRouteConfig => ({
  path: "/",
  component: AppLayout,
  children: [
    {
      path: "/",
      name: "chat",
      component: () =>
        import(/* webpackChunkName: "about" */ "@/views/pages/chat/Chat.vue"),
      meta: {
        requiresAuth: true,
        requiredLevel: RoleAccessLevel.User,
        hidden: false,
        breadcrumb: [{ title: i18n_t("data.menu.home.title"), url: "/" }],
        icon: "chat",
        title: i18n_t("data.menu.home.title"),
        pageTitle: i18n_t("data.menu.home.pageTitle")
      }
    }
  ]
});

export { innerRoutes };
