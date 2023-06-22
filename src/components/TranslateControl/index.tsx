import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RootState } from '@/redux/store'
import { setLanguage } from '@/features/global/globalSlice'
import classNames from 'classnames'
import styles from './TranslateControl.module.css'
import { TranslateControlsProps } from './translateControl'
import { globe } from '@/images'

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

  const languagesWrapperClasses = classNames(styles.languagesWrapper)

  const globeIconClasses = classNames(styles.globeIcon)

  const languageTextClasses = classNames(styles.languageText)

  const languagesClasses = classNames(styles.languages)

  const languagesInnerClasses = classNames(styles.languagesInner)

  const languageOptionClassesEn = classNames(styles.languageOption, styles.en)

  const languageOptionClassesRu = classNames(styles.languageOption, styles.ru)

  return (
    <div className={languagesWrapperClasses}>
      <img className={globeIconClasses} src={globe} alt="globe" />
      {!isMobile && <p className={languageTextClasses}>{language}</p>}
      <div className={languagesClasses}>
        <div className={`${languagesInnerClasses} ${styles.languagesInner}`}>
          <p
            className={`${languageOptionClassesEn}`}
            onClick={() => updateLanguage('en')}
          >
            English
          </p>
          <p
            className={`${languageOptionClassesRu}`}
            onClick={() => updateLanguage('ru')}
          >
            Русский
          </p>
        </div>
      </div>
    </div>
  )
}
