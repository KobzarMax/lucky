import avatar from '../../asset/big-avatar.png'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'

export const TopPlaces = () => {
  const { t } = useTranslation(['translations'])
  const rating = [
    {
      place: 1,
      userId: '139812hud12j',
      winChance: '51.87%',
      totalWin: '62,571107',
      winRounds: '11 041',
      totalRounds: '21 287',
      funds: '120,78',
      winStatus: 'negative',
      avatar: avatar
    },
    {
      place: 2,
      userId: '139812hud12j',
      winChance: '59.23%',
      totalWin: '10 617,047296',
      winRounds: '10 576',
      totalRounds: '17 856',
      funds: '20 491,57',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 3,
      userId: '139812hud12j',
      winChance: '60.49%',
      totalWin: '3 050,363175',
      winRounds: '7 617',
      totalRounds: '12 592',
      funds: '5 886,97',
      winStatus: 'positive',
      avatar: avatar
    }
  ]

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
