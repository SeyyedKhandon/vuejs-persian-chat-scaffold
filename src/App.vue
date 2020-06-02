<template>
  <div id="app" :key="$store.getters.getLanguage">
    <Loading v-if="loadingState" />
    <vue-snotify />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useThemeInitialize } from "@/hooks/useApp";
import { useLoading } from "@/hooks/useLoading";
import { useAppVersionInfo } from "@/hooks/useAppVersion";
import Loading from "@/views/components/Loading.vue";

export default defineComponent({
  name: "App",
  components: {
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
