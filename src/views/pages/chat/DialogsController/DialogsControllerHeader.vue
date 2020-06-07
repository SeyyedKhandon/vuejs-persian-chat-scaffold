<template>
  <div class="app-dialogs-controller-header">
    {{ $t("data.chat.dialogController.header") }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "DialogsControllerHeader"
});
</script>
