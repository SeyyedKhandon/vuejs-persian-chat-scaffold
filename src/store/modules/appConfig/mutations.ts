import { AppConfig } from "./index";
const setLanguage = (state: AppConfig, data: string) => (state.language = data);
const setTheme = (state: AppConfig, theme: string) => (state.theme = theme);

export default {
  setLanguage,
  setTheme
};
