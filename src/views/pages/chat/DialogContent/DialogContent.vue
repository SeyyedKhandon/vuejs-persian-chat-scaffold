<template>
  <section class="app-dialog-content">
    <DialogContentHeader />
    <DialogContentMessages />
    <DialogContentTypeSection />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import DialogContentHeader from "@/views/pages/chat/DialogContent/DialogContentHeader.vue";
import DialogContentMessages from "@/views/pages/chat/DialogContent/DialogContentMessages.vue";
import DialogContentTypeSection from "@/views/pages/chat/DialogContent/DialogContentTypeSection.vue";
export default defineComponent({
  name: "DialogContent",
  components: {
    DialogContentHeader,
    DialogContentMessages,
    DialogContentTypeSection
  }
});
</script>
