import { onMounted } from "@vue/composition-api";
import { useThemeManager } from "@/hooks/useTheme";

export const useThemeInitialize = () => {
  const { loadTheme } = useThemeManager();
  onMounted(loadTheme);
};
