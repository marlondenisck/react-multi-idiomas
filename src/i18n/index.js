import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJson from  './translations/en.json'
import ptBRJson from  './translations/pt-br.json'
console.log('rodou')
i18n.use(initReactI18next).init({
  fallbackLng: "ptBr", // default language
  interpolation: {
    escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  resources: {
    en: enJson,
    ptBr: ptBRJson
  },
})