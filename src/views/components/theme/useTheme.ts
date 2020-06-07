import * as R from "ramda";
import store from "@/store";

export const useThemeManager = () => {
  const setThemeToHTML = (theme: string) =>
    document.documentElement.setAttribute("theme", theme);
  const themeUpdate = (change = false) => {
    R.pipe(
      (_: string) => (_ == "dark" ? _ : "default"),
      _ => (change ? (_ == "dark" ? "default" : "dark") : _),
      R.tap(setThemeToHTML),
      _ => store.commit("setTheme", _)
    )(store.getters.getTheme);
  };
  const loadTheme = themeUpdate;
  return { setThemeToHTML, themeUpdate, loadTheme };
};
