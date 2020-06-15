<template>
  <article class="app-chat">
    <Drawer />
    <DialogController />
    <DialogContent />
    <DialogInfo />
    <ModalManager />
    <Overlay />
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Drawer from "@/views/pages/chat/Drawer/Drawer.vue";
import DialogContent from "@/views/pages/chat/DialogContent/DialogContent.vue";
import DialogController from "@/views/pages/chat/DialogController/DialogController.vue";
import DialogInfo from "@/views/pages/chat/DialogInfo/DialogInfo.vue";
import ModalManager from "@/views/pages/chat/ModalManager/ModalManager.vue";
import Overlay from "@/views/components/overlay/Overlay.vue";

export default defineComponent({
  name: "Chat",
  components: {
    Drawer,
    DialogContent,
    DialogController,
    DialogInfo,
    ModalManager,
    Overlay
  },
  setup() {
    return {};
  }
});
</script>
