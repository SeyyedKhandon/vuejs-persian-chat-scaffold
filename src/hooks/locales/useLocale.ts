import Vue from "vue";
import * as R from "ramda";
import store from "@/store";
import VueI18n from "vue-i18n";
import { ref, SetupContext } from "@vue/composition-api";
import * as util from "./util_locale";
Vue.use(VueI18n);

export const useLocale = (context: SetupContext) => {
  const languageTitles = ref(util.getLocalesTitles(util.localeMessages as any));
  const currentLangTitle = ref(util.getLocaleTitle(store.getters.getLanguage));

  const doStateSideEffects = (lang: string) => {
    store.commit("setLanguage", lang);
    context.emit("change", lang);
    context.root.$i18n.locale = util.getLocaleName(lang) as string;
    return lang;
  };
  const doHTMLSideEffects = R.pipe(
    util.updateHtmlLang,
    util.getLocaleRTL,
    util.changeRTL
  );
  const updateLanguage = (title = "English") => {
    R.pipe(util.getLocaleLang, doStateSideEffects, doHTMLSideEffects)(title);
  };
  return {
    languageTitles,
    currentLangTitle,
    updateLanguage
  };
};

export const i18n = new VueI18n({
  locale: util.getLocaleName(store.getters.getLanguage),
  messages: util.localeMessages as any // because of spec
});
export const i18n_t = (key: string, values = {}) =>
  i18n.t(key, values) as string;
