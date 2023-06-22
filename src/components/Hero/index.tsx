import { Timer } from '@/components/Timer'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import classNames from 'classnames'
import styles from './Hero.module.css'
import React from 'react'
import { mobileIllustration, illustration } from '@/images'

export const Hero: React.FC = () => {
  const { t } = useTranslation(['translations'])
  const isMobile = useSelector((state: RootState) => state.global.isMobile)

  const heroClass = classNames(styles.hero)
  const contentClass = styles.content
  const titleClass = styles.title
  const primaryTextClass = styles.primaryText
  const subtitleClass = styles.subtitle
  const buttonsClass = styles.buttons
  const playNowButtonClass = classNames(styles.playNowButton, 'play-now')
  const documentationButtonClass = classNames(
    styles.documentationButton,
    'documentation'
  )
  const imageContainerClass = styles.imageContainer
  const imageClass = styles.image

  return (
    <div className={heroClass}>
      <div className={contentClass}>
        <h1 className={titleClass}>
          <span className={primaryTextClass}>{t('luckyHamster')}</span> -{' '}
          {t('playForFunEarnForProfit')}
        </h1>
        <p className={subtitleClass}>{t('homeSubtitle')}</p>
        <div className={buttonsClass}>
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            className={playNowButtonClass}
          >
            {t('playNow')}
          </button>
          <button className={documentationButtonClass}>
            {t('documentation')}
          </button>
        </div>
      </div>
      <div className={imageContainerClass}>
        <img
          className={imageClass}
          src={isMobile ? mobileIllustration : illustration}
          alt="lucky hamster illustrations"
        />
        <Timer />
      </div>
    </div>
  )
}
