import globe from '../../asset/globe.svg'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const TranslateControls = ({ isMobile }) => {
  const { i18n } = useTranslation(['home'])
  const [languageView, setLanguageView] = useState(false)
  const languages = ['en', 'ru']
  const [language, setLanguage] = useState(languages[0])
  const toggleLanguage = (
    event: React.MouseEvent<HTMLParagraphElement>
  ): void => {
    const target = event.target as HTMLElement
    const parentNode = target.parentNode as HTMLElement
    if (parentNode.classList.contains('languages')) {
      if (target.innerHTML === 'en') {
        i18n.changeLanguage('en')
        setLanguage('en')
      } else if (target.innerHTML === 'ru') {
        i18n.changeLanguage('ru')
        setLanguage('ru')
      }
    }
    setLanguageView(!languageView)
  }

  return (
    <div
      className="relative mr-[18px] flex items-center justify-start lg:mr-[30px]"
      onClick={toggleLanguage}
    >
      <img className="mr-[5px]" src={globe} alt="globe" />
      {!isMobile && (
        <p className="text-dark_gray cursor-pointer text-[15px] font-medium uppercase leading-[18px]">
          {language}
        </p>
      )}
      {languageView && (
        <div className="languages absolute -right-[5px] top-full rounded-md lg:-right-2.5">
          <p
            className="text-dark_gray mb-2 cursor-pointer p-2 text-[15px] font-medium uppercase leading-[18px]"
            onClick={toggleLanguage}
          >
            en
          </p>
          <p
            className="text-dark_gray cursor-pointer p-2 text-[15px] font-medium uppercase leading-[18px]"
            onClick={toggleLanguage}
          >
            ru
          </p>
        </div>
      )}
    </div>
  )
}
