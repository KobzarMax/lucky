import { useTranslation } from 'react-i18next'
import React from 'react'
import { rating } from './topPlacesConsts'
import classNames from 'classnames'
import styles from './TopPlaces.module.css'

export const TopPlaces: React.FC = () => {
  const { t } = useTranslation(['translations'])

  return (
    <div>
      <div className={styles.rating}>
        {rating.map((ratingPlace, index) => {
          const ratingPlaceClasses = classNames(
            styles[ratingPlace.winStatus],
            styles.ratingPlace
          )

          const placeNumberClasses = classNames(
            styles.place,
            styles.ratingPlaceNumber
          )

          const avatarWrapperClasses = classNames(
            styles['avatar-wrapper'],
            styles.avatarWrapper
          )

          const totalClasses = classNames(styles.total, styles.totalWinValue)

          const winWrapHelperClasses = classNames(styles.winWrapHelper)

          const flexHelperClasses = classNames(styles.flexHelper)

          return (
            <div key={index} className={ratingPlaceClasses}>
              <p className={placeNumberClasses}>#{ratingPlace.place}</p>
              <div className={avatarWrapperClasses}>
                <img
                  className="avatar"
                  src={ratingPlace.avatar}
                  alt="user avatar"
                />
              </div>
              <p className={styles.ratingUserID}>{ratingPlace.userId}</p>
              <div className="w-full px-5">
                <div className={winWrapHelperClasses}>
                  <p className={styles.winChanceText}>{t('winChance')}</p>
                  <p className={styles.winChanceValue}>
                    {ratingPlace.winChance}
                  </p>
                </div>
                <div className={winWrapHelperClasses}>
                  <p className={styles.winChanceText}>{t('totalWin')}</p>
                  <div>
                    <p className={totalClasses}>{ratingPlace.totalWin}</p>
                    <p className={styles.funds}>${ratingPlace.funds}</p>
                  </div>
                </div>
                <div className={flexHelperClasses}>
                  <p className={styles.winChanceText}>{t('roundsWIn')}</p>
                  <p className={styles.winChanceValue}>
                    {ratingPlace.winRounds}/{ratingPlace.totalRounds}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
