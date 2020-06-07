<template>
  <div class="app-dialogs-controller-container">
    <div class="app-dialogs-controller">
      <button @click="openDrawer">show drawer</button>
      <DialogsControllerHeader />
      <DialogsControllerTabs />
      <DialogsControllerConversations />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import DialogsControllerHeader from "@/views/pages/chat/DialogsController/DialogsControllerHeader.vue";
import DialogsControllerTabs from "@/views/pages/chat/DialogsController/DialogsControllerTabs.vue";
import DialogsControllerConversations from "@/views/pages/chat/DialogsController/DialogsControllerConversations.vue";
import { useDrawer } from "@/views/pages/chat/Drawer/useDrawer";
export default defineComponent({
  name: "DialogController",
  components: {
    DialogsControllerHeader,
    DialogsControllerTabs,
    DialogsControllerConversations
  },
  setup() {
    const { openDrawer } = useDrawer();
    return { openDrawer };
  }
});
</script>
