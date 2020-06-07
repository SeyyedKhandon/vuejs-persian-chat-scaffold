import { computed } from "@vue/composition-api";
import store from "@/store";

export const useDrawer = () => {
  const isDrawerActive = computed(() => store.getters.isDrawerActive);
  const openDrawer = () => store.commit("setDrawer", true);
  const closeDrawer = () => store.commit("setDrawer", false);
  return { openDrawer, closeDrawer, isDrawerActive };
};
