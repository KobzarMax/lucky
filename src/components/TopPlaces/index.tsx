import { useTranslation } from 'react-i18next'
import styles from './TopPlaces.module.css'
import React from 'react'
import { rating } from '@/consts'

export const TopPlaces: React.FC = () => {
  const { t } = useTranslation(['translations'])

  return (
    <div>
      <div className={styles.rating}>
        {rating.map((ratingPlace, index) => (
          <div
            key={index}
            className={`${ratingPlace.winStatus} ${styles.ratingPlace}`}
          >
            <p className={`${styles.place} ${styles.ratingPlaceNumber}`}>
              #{ratingPlace.place}
            </p>
            <div
              className={`${styles['avatar-wrapper']} ${styles.avatarWrapper}`}
            >
              <img
                className="avatar"
                src={ratingPlace.avatar}
                alt="user avatar"
              />
            </div>
            <p className={styles.ratingUserID}>{ratingPlace.userId}</p>
            <div className="w-full px-5">
              <div className={styles.winWrapHelper}>
                <p className={styles.winChanceText}>{t('winChance')}</p>
                <p className={styles.winChanceValue}>{ratingPlace.winChance}</p>
              </div>
              <div className={styles.winWrapHelper}>
                <p className={styles.winChanceText}>{t('totalWin')}</p>
                <div>
                  <p className={styles.totalWinValue}>{ratingPlace.totalWin}</p>
                  <p className={styles.funds}>${ratingPlace.funds}</p>
                </div>
              </div>
              <div className={styles.flexHelper}>
                <p className={styles.winChanceText}>{t('roundsWIn')}</p>
                <p className={styles.winChanceValue}>
                  {ratingPlace.winRounds}/{ratingPlace.totalRounds}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
