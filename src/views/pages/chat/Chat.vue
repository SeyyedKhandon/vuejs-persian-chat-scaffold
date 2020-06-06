<template>
  <div class="app-chat">
    <Drawer v-if="showDrawer" />
    <DialogsController />
    <DialogContent />
    <ModalManager />
  </div>
</template>

<script lang="ts">
import { defineComponent, provide } from "@vue/composition-api";
import Drawer from "@/views/pages/chat/Drawer.vue";
import DialogContent from "@/views/pages/chat/DialogContent/DialogContent.vue";
import DialogsController from "@/views/pages/chat/DialogsController/DialogsController.vue";
import ModalManager from "@/views/pages/chat/ModalManager.vue";
import { useChat } from "@/hooks/chat/useChat";

export default defineComponent({
  name: "Home",
  components: {
    Drawer,
    DialogContent,
    DialogsController,
    ModalManager
  },
  setup() {
    const { showDrawer, toggleDrawer } = useChat();
    provide("drawerContext", { showDrawer, toggleDrawer });
    return { showDrawer };
  }
});
</script>
