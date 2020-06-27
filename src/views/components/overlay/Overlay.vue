<template>
  <div
    class="app-overlay"
    :class="isOverlayActive ? 'overlay-active' : ''"
    @click="closeOverlays"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useOverlay } from "@/views/components/overlay/useOverlay";

export default defineComponent({
  name: "Overlay",
  setup() {
    const { closeOverlays, isOverlayActive } = useOverlay();
    return { closeOverlays, isOverlayActive };
  }
});
</script>
<style lang="scss">
@import "Overlay";
</style>
