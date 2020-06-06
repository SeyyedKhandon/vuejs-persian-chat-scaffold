<template>
  <div>
    dialog controller
    <button @click="dC.toggleDrawer()">show drawer</button>
  </div></template
>

<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api";

export default defineComponent({
  name: "DialogController.vue",
  setup() {
    const dC = inject("drawerContext");
    return { dC };
  }
});
</script>
