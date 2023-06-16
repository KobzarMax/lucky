import { Timer } from '@/components/Timer'
import illustration from '@/asset/illustration.png'
import mobileIllustration from '@/asset/mobile-illlustration.png'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import styles from './Hero.module.css'
import React from 'react'

export const Hero: React.FC = () => {
  const { t } = useTranslation(['translations'])
  const isMobile = useSelector((state: RootState) => state.global.isMobile)
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.primaryText}>{t('luckyHamster')}</span> -{' '}
          {t('playForFunEarnForProfit')}
        </h1>
        <p className={styles.subtitle}>{t('homeSubtitle')}</p>
        <div className={styles.buttons}>
          <button
            data-modal-target="popup-modal"
            data-modal-toggle="popup-modal"
            className={`${styles.playNowButton} play-now`}
          >
            {t('playNow')}
          </button>
          <button className={`${styles.documentationButton} documentation`}>
            {t('documentation')}
          </button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={isMobile ? mobileIllustration : illustration}
          alt="lucky hamster illustrations"
        />
        <Timer />
      </div>
    </div>
  )
}
