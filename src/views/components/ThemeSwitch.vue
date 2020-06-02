<template>
  <i @click="themeUpdate(true)" class="theme-switch">🎨</i>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useThemeManager } from "@/hooks/useTheme";

export default defineComponent({
  name: "themeSwitch",
  setup() {
    const { themeUpdate } = useThemeManager();
    return { themeUpdate };
  }
});
</script>

<style lang="scss" scoped>
/*@import "src/assets/styles/components/ThemeSwitch";*/
</style>
