import { computed } from "@vue/composition-api";
import store from "@/store";
export const useOverlay = () => {
  const isOverlayActive = computed(() => store.getters.isOverlayActive);
  const closeOverlays = () => store.commit("closeOverlays");
  const openOverlay = () => store.commit("setOverlay", true);

  return { isOverlayActive, closeOverlays, openOverlay };
};
