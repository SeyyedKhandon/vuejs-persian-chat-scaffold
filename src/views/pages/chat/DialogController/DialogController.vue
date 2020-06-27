<template>
  <section class="app-dialog-controller">
    <button @click="openDrawer">show drawer</button>
    <DialogControllerHeader />
    <DialogControllerTabs />
    <DialogControllerConversations />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import DialogControllerHeader from "@/views/pages/chat/DialogController/DialogControllerHeader.vue";
import DialogControllerTabs from "@/views/pages/chat/DialogController/DialogControllerTabs.vue";
import DialogControllerConversations from "@/views/pages/chat/DialogController/DialogControllerConversations.vue";
import { useDrawer } from "@/views/pages/chat/Drawer/useDrawer";
export default defineComponent({
  name: "DialogController",
  components: {
    DialogControllerHeader,
    DialogControllerTabs,
    DialogControllerConversations
  },
  setup() {
    const { openDrawer } = useDrawer();
    return { openDrawer };
  }
});
</script>
<style lang="scss">
@import "DialogController";
</style>
