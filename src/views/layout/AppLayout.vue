<template>
  <div class="app-layout">
    <button @click="logout" v-if="$store.getters.getFakeLogin.accessToken">
      {{ $t("data.logout.button") }}
    </button>
    <AppMenu :routes="routes.children" />
    <router-view />
  </div>
</template>

<script lang="ts">
import ChangeLanguage from "@/views/components/ChangeLanguage.vue";
import ThemeSwitch from "@/views/components/ThemeSwitch.vue";
import Loading from "@/views/components/Loading.vue";
import AppMenu from "@/views/layout/AppMenu.vue";
import { defineComponent } from "@vue/composition-api";
import { useLogin } from "@/hooks/accessControl/useLogin";
import { innerRoutes } from "@/router/routes/modules/innerRoutes";

export default defineComponent({
  name: "AppLayout",
  components: {
    ChangeLanguage,
    ThemeSwitch,
    Loading,
    AppMenu
  },
  setup(_props, context) {
    const { logout } = useLogin(context);
    return { routes: innerRoutes(), logout };
  }
});
</script>
