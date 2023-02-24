import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import I18NextBackend, { HttpBackendOptions } from 'i18next-http-backend';

const options: HttpBackendOptions = {
  loadPath: window.location.pathname + '/locales/{{lng}}/{{ns}}.json'
}

i18n
  .use(I18NextBackend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    debug: process.env.NODE_ENV === 'development',
    backend: options
  });

i18n.changeLanguage();
