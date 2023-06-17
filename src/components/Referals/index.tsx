import { useTranslation } from 'react-i18next'
import styles from './Referals.module.css'
import React from 'react'
import { referals } from '@/consts'

export const Referals: React.FC = () => {
  const { t } = useTranslation(['translations'])

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
                  <span className="text-primary font-semibold">
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
