<template>
  <div class="app-layout">
    <router-view />
    <ModalManager />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import ModalManager from "@/views/components/ModalManager.vue";

export default defineComponent({
  name: "AppLayout",
  components: { ModalManager },
  setup() {
    return {};
  }
});
</script>
