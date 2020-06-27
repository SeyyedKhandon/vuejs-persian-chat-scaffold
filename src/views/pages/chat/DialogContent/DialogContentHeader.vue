<template>
  <header class="app-dialog-content-header">
    {{ $t("data.chat.dialogContent.header") }}
  </header>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "DialogContentHeader"
});
</script>
<style lang="scss">
@import "DialogContentHeader";
</style>
