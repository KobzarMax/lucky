import avatar from '../../asset/avatar.png'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'

export const Referals = () => {
  const { t } = useTranslation(['translations'])
  const referals = [
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    }
  ]

  return (
    <div>
      <h2 className={styles.yourReferals}>{t('yourReferals')}</h2>
      <div className={`${styles.tickerWrap} ticker-wrap`}>
        <div className={`${styles.ticker} ${styles.referals}`}>
          {referals.map((referal, index) => (
            <div
              key={index}
              className={`${styles['ticker__item']} ticker__item ${styles.referal}`}
            >
              <img src={referal.avatar} alt="avatar" />
              <div>
                <p className={styles.yourBonus}>
                  {t('yourBonus')}{' '}
                  <span className="font-semibold text-primary">
                    {referal.bonus}$
                  </span>
                </p>
                <p className={styles.yourBonus}>
                  {t('invited')}{' '}
                  <span className="text-white">{referal.invited}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
