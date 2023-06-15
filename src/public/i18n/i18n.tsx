import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import homeEn from '@/locales/en/en.json'
import homeRu from '@/locales/ru/ru.json'

const resources = {
  en: {
    home: homeEn
  },
  ru: {
    home: homeRu
  }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  debug: false,
  fallbackLng: 'en',
  saveMissing: true
})

export default i18next
