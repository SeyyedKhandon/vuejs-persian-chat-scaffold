<template>
  <div id="app" :key="$store.getters.getLanguage">
    <ChangeLanguage />
    <ThemeSwitch />
    <Loading v-if="loadingState" />
    <vue-snotify />
    <router-view />
  </div>
</template>
<script lang="ts">
import ChangeLanguage from "@/views/components/ChangeLanguage.vue";
import ThemeSwitch from "@/views/components/ThemeSwitch.vue";
import Loading from "@/views/components/Loading.vue";
import { defineComponent } from "@vue/composition-api";
import { useThemeInitialize } from "@/hooks/useApp";
import { useLoading } from "@/hooks/useLoading";
import { useAppVersionInfo } from "@/hooks/useAppVersion";

export default defineComponent({
  name: "App",
  components: {
    ChangeLanguage,
    ThemeSwitch,
    Loading
  },
  setup() {
    useThemeInitialize();
    const { showVersion } = useAppVersionInfo();
    showVersion();
    const { loadingState } = useLoading();
    return { loadingState };
  }
});
</script>
<style lang="scss">
@import "assets/styles";
</style>
