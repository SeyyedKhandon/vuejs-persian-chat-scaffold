<template>
  <section class="app-dialog-content-chat-messages">
    {{ $t("data.chat.dialogContent.messages") }}
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "DialogContentChatMessages"
});
</script>
