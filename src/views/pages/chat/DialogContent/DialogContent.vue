<template>
  <div class="app-dialog-content-container">
    <div class="app-dialog-content">
      <DialogContentChat />
      <DialogContentInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import DialogContentInfo from "@/views/pages/chat/DialogContent/DialogContentInfo.vue";
import DialogContentChat from "@/views/pages/chat/DialogContent/DialogContentChat/DialogContentChat.vue";
export default defineComponent({
  name: "DialogContent",
  components: {
    DialogContentInfo,
    DialogContentChat
  }
});
</script>
