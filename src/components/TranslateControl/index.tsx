import globe from '../../asset/globe.svg'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RootState } from '@/redux/store'
import { setLanguage } from '@/features/global/globalSlice'

type TranslateControlsProps = {
  isMobile: boolean
}

export const TranslateControls: React.FC<TranslateControlsProps> = ({
  isMobile
}) => {
  const { i18n } = useTranslation(['translations'])

  // Get the current language from Redux store
  const language = useSelector((state: RootState) => state.global.language)

  // Dispatch action to update the language in Redux store
  const dispatch = useDispatch()
  const updateLanguage = (selectedLanguage: string): void => {
    dispatch(setLanguage(selectedLanguage))
    i18n.changeLanguage(selectedLanguage).catch((error) => {
      console.error('Failed to change language:', error)
    })
  }

  // Save the chosen language to local storage when it changes
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  // Load the language from local storage on page reload
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language')
    if (savedLanguage) {
      updateLanguage(savedLanguage)
    }
  }, [])

  return (
    <div className="languages-wrapper relative mr-[18px] flex items-center justify-start lg:mr-[30px]">
      <img className="mr-[5px]" src={globe} alt="globe" />
      {!isMobile && (
        <p className="cursor-pointer text-[15px] font-medium uppercase leading-[18px] text-dark_gray">
          {language}
        </p>
      )}
      <div className="languages absolute -right-[30px] top-full rounded-md p-2 lg:-right-6">
        <div className="languages-inner">
          <p
            className="en mb-2 cursor-pointer p-2 text-[15px] font-medium uppercase leading-[18px] text-dark_gray"
            onClick={() => updateLanguage('en')}
          >
            English
          </p>
          <p
            className="ru cursor-pointer p-2 text-[15px] font-medium uppercase leading-[18px] text-dark_gray"
            onClick={() => updateLanguage('ru')}
          >
            Русский
          </p>
        </div>
      </div>
    </div>
  )
}
