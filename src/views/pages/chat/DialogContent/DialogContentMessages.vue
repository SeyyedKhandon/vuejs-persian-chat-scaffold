<template>
  <section class="app-dialog-content-messages">
    {{ $t("data.chat.dialogContent.messages") }}
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "DialogContentMessages"
});
</script>
<style lang="scss">
@import "DialogContentMessages";
</style>
