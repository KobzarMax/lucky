import { useTranslation } from 'react-i18next'
import React from 'react'
import classNames from 'classnames'
import styles from './Referals.module.css'
import { referals } from './referalsConsts'

export const Referals: React.FC = () => {
  const { t } = useTranslation(['translations'])

  const yourReferalsClass = classNames(styles.yourReferals)
  const tickerWrapClass = classNames(styles.tickerWrap, 'ticker-wrap')
  const tickerClass = classNames(styles.ticker, styles.referals)

  return (
    <div>
      <h2 className={yourReferalsClass}>{t('yourReferals')}</h2>
      <div className={tickerWrapClass}>
        <div className={tickerClass}>
          {referals.map((referal, index) => {
            const tickerItemClass = classNames(
              styles.ticker__item,
              'ticker__item',
              styles.referal
            )

            return (
              <div key={index} className={tickerItemClass}>
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
            )
          })}
        </div>
      </div>
    </div>
  )
}
