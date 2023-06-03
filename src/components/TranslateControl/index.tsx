import globe from '../../asset/globe.svg'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

type TranslateControlsProps = {
  isMobile: boolean
}

export const TranslateControls: React.FC<TranslateControlsProps> = ({
  isMobile
}) => {
  const { t, i18n } = useTranslation(['translations'])
  const [languageView, setLanguageView] = useState(false)
  const languages: string[] = ['en', 'ru']
  const [language, setLanguage] = useState(languages[0])

  const toggleLanguage = (selectedLanguage: string): void => {
    i18n
      .changeLanguage(selectedLanguage)
      .then(() => setLanguage(selectedLanguage))
      .catch((error) => {
        console.error('Failed to change language:', error)
      })
  }

  return (
    <div className="languages-wrapper relative mr-[18px] flex items-center justify-start lg:mr-[30px]">
      <img className="mr-[5px]" src={globe} alt="globe" />
      {!isMobile && (
        <p className="text-dark_gray cursor-pointer text-[15px] font-medium uppercase leading-[18px]">
          {language}
        </p>
      )}
      <div className="languages absolute -right-[30px] top-full rounded-md p-2 lg:-right-6">
        <div className="languages-inner">
          <p
            className="en text-dark_gray mb-2 cursor-pointer p-2 text-[15px] font-medium uppercase leading-[18px]"
            onClick={() => toggleLanguage('en')}
          >
            English
          </p>
          <p
            className="ru text-dark_gray cursor-pointer p-2 text-[15px] font-medium uppercase leading-[18px]"
            onClick={() => toggleLanguage('ru')}
          >
            Русский
          </p>
        </div>
      </div>
    </div>
  )
}
