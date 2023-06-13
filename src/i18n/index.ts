import en from "@/i18n/en.json";
import fi from "@/i18n/fi.json";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const defaultNS = "translation";
export const resources = {
  en: { [defaultNS]: en },
  fi: { [defaultNS]: fi },
} as const;

void i18n.use(LanguageDetector).use(initReactI18next).init({
  defaultNS,
  fallbackLng: "en",
  resources,
});
