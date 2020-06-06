import { SetupContext } from "@vue/composition-api";
import { useThemeManager } from "@/hooks/useTheme";
import { useLocale } from "@/hooks/locales/useLocale";
import { useAppVersionInfo } from "@/hooks/useAppVersion";

export const useApp = (context: SetupContext) => {
  const { loadTheme } = useThemeManager();
  const { initializeLanguageAndRTLClass } = useLocale(context);
  const { showVersion } = useAppVersionInfo();
  const initializeThemeAndLanguage = () => {
    initializeLanguageAndRTLClass();
    showVersion();
    loadTheme();
  };
  return { initializeThemeAndLanguage };
};
