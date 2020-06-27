<template>
  <div class="app-dialog-controller-conversations">
    {{ $t("data.chat.dialogController.conversations") }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "DialogControllerConversations"
});
</script>
<style lang="scss">
@import "DialogControllerConversations";
</style>
