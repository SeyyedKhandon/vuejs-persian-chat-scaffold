<template>
  <div class="app-dialog-controller-header">
    {{ $t("data.chat.dialogController.header") }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "DialogControllerHeader"
});
</script>
<style lang="scss">
@import "DialogControllerHeader";
</style>
