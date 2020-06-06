<template>
  <div id="app" :key="$store.getters.getLanguage">
    <Loading v-if="loadingState" />
    <vue-snotify />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from "@vue/composition-api";
import { useApp } from "@/hooks/useApp";
import { useLoading } from "@/hooks/useLoading";
import Loading from "@/views/components/Loading.vue";

export default defineComponent({
  name: "App",
  components: {
    Loading
  },
  setup(_props, context) {
    const { initializeThemeAndLanguage } = useApp(context);
    onMounted(initializeThemeAndLanguage);
    const { loadingState } = useLoading();
    return { loadingState };
  }
});
</script>
<style lang="scss">
@import "assets/styles";
</style>
