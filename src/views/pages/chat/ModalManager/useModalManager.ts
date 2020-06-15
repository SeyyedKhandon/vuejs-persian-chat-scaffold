import { computed } from "@vue/composition-api";
import store from "@/store";
export const useModalManager = () => {
  const isModalActive = computed(() => store.getters.isModalActive);
  const openModal = () => store.commit("setModal", true);
  const closeModal = () => store.commit("setModal", false);
  return { openModal, closeModal, isModalActive };
};
