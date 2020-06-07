<template>
  <article class="app-dialog-content-chat">
    <DialogContentChatHeader />
    <DialogContentChatMessages />
    <DialogContentChatTypeSection />
  </article>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import DialogContentChatHeader from "@/views/pages/chat/DialogContent/DialogContentChat/DialogContentChatHeader.vue";
import DialogContentChatMessages from "@/views/pages/chat/DialogContent/DialogContentChat/DialogContentChatMessages.vue";
import DialogContentChatTypeSection from "@/views/pages/chat/DialogContent/DialogContentChat/DialogContentChatTypeSection.vue";
export default defineComponent({
  name: "DialogContentMain",
  components: {
    DialogContentChatHeader,
    DialogContentChatMessages,
    DialogContentChatTypeSection
  }
});
</script>
