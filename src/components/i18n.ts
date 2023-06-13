import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import translationsEN from '../locales/en/en.json'
import translationsRU from '../locales/ru/ru.json'

const resources = {
  en: {
    translations: translationsEN
  },
  ru: {
    translations: translationsRU
  }
}

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources,
    fallbackLng: 'en',
    debug: false,
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    }
  })

export default i18n
