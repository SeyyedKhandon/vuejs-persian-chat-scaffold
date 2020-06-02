<template>
  <nav class="app-menu">
    <template v-for="route in routes">
      <router-link
        :key="route.path"
        :to="route.path"
        v-if="!(route.meta ? route.meta.hidden : true)"
      >
        {{ route.meta.title }}
      </router-link>
      <AppMenu
        :key="route.path"
        class="m-1"
        v-if="route.children"
        :routes="route.children"
      />
      |
    </template>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "AppMenu",
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  }
});
</script>
