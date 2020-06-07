import { Locales } from "@/types/locale";
import * as R from "ramda";

const changeRTL = R.tap((rtl_state: boolean) =>
  rtl_state
    ? document.body.classList.add("rtl")
    : document.body.classList.remove("rtl")
);
const updateHtmlLang = R.tap((lang: string) =>
  document.querySelector("html")!.setAttribute("lang", lang)
);

const loadLocaleMessages = () => {
  const locales_files = require.context(
    "@/api/mock_db/locales",
    true,
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const locales: Locales = {};
  for (const file_name of locales_files.keys()) {
    const key = R.path(["spec", "name"])(locales_files(file_name)) as string; //R.pipe(R.drop(2), R.dropLast(5))(file_names as string);
    locales[key] = { ...locales_files(file_name) };
  }
  return locales;
};

const getLocalesTitles = R.pipe(R.map(R.path(["spec", "title"])), R.values);

const getLocaleInfo = R.curry(
  (
    locales: Locales,
    base_prop: string,
    requested_prop: string,
    base_prop_value: string
  ): any => {
    return R.pipe(
      R.find(R.pathEq(["spec", base_prop], base_prop_value)),
      R.path(["spec", requested_prop])
    )(R.values(locales));
  }
);

const localeMessages = loadLocaleMessages();
const getLocalInfoBasedOnTitle = getLocaleInfo(localeMessages, "title");
const getLocaleLang = getLocalInfoBasedOnTitle("lang");
const getLocaleInfoBasedOnLang = getLocaleInfo(localeMessages, "lang");
const getBLang = getLocaleInfoBasedOnLang;
const getLocaleTitle = getBLang("title");
const getLocaleName = getBLang("name");
const getLocaleRTL = getBLang("rtl");

export {
  localeMessages,
  getLocalesTitles,
  getLocaleInfo,
  getLocaleLang,
  getLocaleTitle,
  getLocaleName,
  getLocaleRTL,
  changeRTL,
  updateHtmlLang
};
