<template>
  <div class="app-modal-manager" :class="isModalActive ? 'modal-active' : ''">
    <button @click="closeModal">*</button>
    <slot>{{ $t("data.chat.modalManager.title") }}</slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useModalManager } from "@/views/pages/chat/ModalManager/useModalManager";

export default defineComponent({
  name: "ModalManager",
  setup() {
    const { isModalActive, closeModal } = useModalManager();
    return { isModalActive, closeModal };
  }
});
</script>
