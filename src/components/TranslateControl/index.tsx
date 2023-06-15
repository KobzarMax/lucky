import globe from '@/asset/globe.svg'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { RootState } from '@/redux/store'
import { setLanguage } from '@/features/global/globalSlice'
import styles from './index.module.css'

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
    <div className={styles.languagesWrapper}>
      <img className={styles.globeIcon} src={globe} alt="globe" />
      {!isMobile && <p className={styles.languageText}>{language}</p>}
      <div className={styles.languages}>
        <div className={`${styles.languagesInner} ${styles.languagesInner}`}>
          <p
            className={`${styles.languageOption} ${styles.en}`}
            onClick={() => updateLanguage('en')}
          >
            English
          </p>
          <p
            className={`${styles.languageOption} ${styles.ru}`}
            onClick={() => updateLanguage('ru')}
          >
            Русский
          </p>
        </div>
      </div>
    </div>
  )
}
