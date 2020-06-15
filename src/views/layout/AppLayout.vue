<template>
  <main class="app-layout">
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "AppLayout",
  // components: {  },
  setup() {
    return {};
  }
});
</script>
