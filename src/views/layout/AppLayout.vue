<template>
  <div class="app-layout">
    <router-view />
  </div>
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
