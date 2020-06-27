<template>
  <aside class="app-dialog-info">
    {{ $t("data.chat.dialogContent.info") }}
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "DialogInfo"
});
</script>
<style lang="scss">
@import "DialogInfo";
</style>
