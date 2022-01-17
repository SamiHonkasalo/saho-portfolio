import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import fi from "./fi.json";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    detection: {
      order: ["localStorage", "cookie", "navigator", "subdomain"],
    },
    // we init with resources
    resources: { fi, en },
    fallbackLng: ["en", "fi"],
    supportedLngs: ["en", "fi"],
    debug: false,
    load: "languageOnly",
    nsSeparator: ".",
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false, // we use content as keys
    interpolation: {
      escapeValue: false, // not needed for react!!
      formatSeparator: ",",
    },
    react: {
      useSuspense: true,
    },
  });

export { i18n };
