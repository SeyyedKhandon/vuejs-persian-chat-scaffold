<template>
  <div class="app-dialogs-controller-container">
    <div class="app-dialogs-controller">
      <DialogsControllerHeader />
      <DialogsControllerTabs />
      <DialogsControllerConversations />
      <button @click="dC.toggleDrawer()">show drawer</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "@vue/composition-api";
import DialogsControllerHeader from "@/views/pages/chat/DialogsController/DialogsControllerHeader.vue";
import DialogsControllerTabs from "@/views/pages/chat/DialogsController/DialogsControllerTabs.vue";
import DialogsControllerConversations from "@/views/pages/chat/DialogsController/DialogsControllerConversations.vue";
export default defineComponent({
  name: "DialogController.vue",
  components: {
    DialogsControllerHeader,
    DialogsControllerTabs,
    DialogsControllerConversations
  },
  setup() {
    const dC = inject("drawerContext");
    return { dC };
  }
});
</script>
