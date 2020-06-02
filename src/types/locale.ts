export interface Locales {
  [index: string]: LocaleItem;
}
export interface LocaleItem {
  spec: LocaleItemSpec;
  data: {
    [index: string]: any;
  };
}
export interface LocaleItemSpec {
  name: string;
  title: string;
  lang: string;
  rtl: false;
}

