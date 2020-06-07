<template>
  <div class="app-chat">
    <Drawer />
    <DialogsController />
    <DialogContent />
    <ModalManager />
    <Overlay />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Drawer from "@/views/pages/chat/Drawer/Drawer.vue";
import DialogContent from "@/views/pages/chat/DialogContent/DialogContent.vue";
import DialogsController from "@/views/pages/chat/DialogsController/DialogsController.vue";
import ModalManager from "@/views/pages/chat/ModalManager/ModalManager.vue";
import Overlay from "@/views/components/overlay/Overlay.vue";

export default defineComponent({
  name: "Chat",
  components: {
    Drawer,
    DialogContent,
    DialogsController,
    ModalManager,
    Overlay
  },
  setup() {
    return {};
  }
});
</script>
