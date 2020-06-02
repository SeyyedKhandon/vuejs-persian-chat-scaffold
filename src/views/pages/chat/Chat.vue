<template>
  <div class="app-chat">
    <Drawer />
    <DialogsController />
    <DialogContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Drawer from "@/views/pages/chat/Drawer.vue";
import DialogContent from "@/views/pages/chat/DialogContent/DialogContent.vue";
import DialogsController from "@/views/pages/chat/DialogsController/DialogsController.vue";
export default defineComponent({
  name: "Home",
  components: {
    Drawer,
    DialogContent,
    DialogsController
  },
  setup() {
    return {};
  }
});
</script>
