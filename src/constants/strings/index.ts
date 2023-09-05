import { I18n } from "i18n-js";
import * as RNLocalize from "react-native-localize";
import en from "./locales/en";

const i18n = new I18n({
  en: en,
  "en-US": en,
});

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  i18n.locale = locales[0].languageTag;
}

i18n.enableFallback = true;

export default i18n;
