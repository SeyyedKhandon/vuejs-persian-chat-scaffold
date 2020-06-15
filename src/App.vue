<template>
  <div id="app" :key="$store.getters.getLanguage">
    <Loading v-if="loadingState" />
    <vue-snotify />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import { useLoading } from "@/views/components/loading/useLoading";
import Loading from "@/views/components/loading/Loading.vue";
import { useThemeManager } from "@/views/components/theme/useTheme";
import { useLocale } from "@/views/components/langSwitch/useLocale";
import { useAppVersionInfo } from "@/hooks/useAppVersion";

export default defineComponent({
  name: "App",
  components: {
    Loading
  },
  setup(_props, context) {
    const { loadTheme } = useThemeManager();
    const { initializeLanguageAndRTLClass } = useLocale(context);
    const { showVersion } = useAppVersionInfo();

    onMounted(() => {
      initializeLanguageAndRTLClass();
      showVersion();
      loadTheme();
    });
    const { loadingState } = useLoading();
    return { loadingState };
  }
});
</script>
<style lang="scss">
@import "assets/styles";
</style>
