import { ref } from "@vue/composition-api";
// helpers
const useDrawer = () => {
  const showDrawer = ref(false);
  const toggleDrawer = () => (showDrawer.value = !showDrawer.value);
  return { showDrawer, toggleDrawer };
};
export const useChat = () => {
  return { ...useDrawer() };
};
