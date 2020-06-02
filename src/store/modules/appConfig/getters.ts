import { AppConfig } from "./index";

const getLanguage = (state: AppConfig) => state.language;
const getTheme = (state: AppConfig) => state.theme;

export default { getLanguage, getTheme };
