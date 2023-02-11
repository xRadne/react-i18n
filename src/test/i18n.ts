import { initReactI18next } from "react-i18next";
import i18n from 'i18next';
import enTranslationJson from '../../public/locales/en/translation.json'
import svTranslationJson from '../../public/locales/sv/translation.json'

import Backend from 'i18next-fs-backend'

const DEFAULT_LANGUAGE = "en";
const DEFAULT_NAMESPACE = "translations";

i18n
  .use(initReactI18next)
  .use(Backend)
  .init({
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    ns: [DEFAULT_NAMESPACE],
    defaultNS: DEFAULT_NAMESPACE,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      [DEFAULT_LANGUAGE]: { [DEFAULT_NAMESPACE]: enTranslationJson },
      "sv": { [DEFAULT_NAMESPACE]: svTranslationJson }
    },
  });

export default i18n;
