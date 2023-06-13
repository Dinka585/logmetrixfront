import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationHR from "./locales/hr/translation.json";


const resources = {
  en: { translation: translationEN },
  hr: { translation: translationHR }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
});

export default i18n;