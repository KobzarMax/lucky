import React from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import styles from './LatestGames.module.css'
import { down, hamster, chartup, chartdown, border, arrow } from '@/images'
import { latestGames } from './latestFamesConsts'

const LatestGames: React.FC = () => {
  const { t } = useTranslation(['translations'])

  const latestgamesClasses = classNames(styles.latestgames)

  const latestgamesTextClasses = classNames(styles.latestgamesText)

  const tickerWrapClasses = classNames(styles.tickerWrap)

  const tickerClasses = classNames(styles.ticker, styles.tickerWrapInner)

  const tickerItemClasses = (status: string) =>
    classNames(
      status,
      styles['ticker__item'],
      styles.hexagon,
      styles.latestGameItem
    )

  const latestgameInnerClasses = classNames(styles.latestgameInner)

  const latestgameAvatarClasses = classNames(styles.latestgameAvatar)

  const statusArrowClasses = classNames(styles['status-arrow'])

  const latestGameFlexClasses = classNames(styles.latestGameFlex)

  const latestGameFundsClasses = classNames(styles.latestGameFunds)

  const latestGamePercentsClasses = classNames(styles.latestGamePercents)

  const latestGameBorderClasses = classNames(styles.latestGameBorder)

  return (
    <div className={latestgamesClasses}>
      <p className={latestgamesTextClasses}>
        <img className="inline-block" src={down} alt="down" /> {t('latest')}{' '}
        <span className="lowercase text-primary">{t('games')}</span>
      </p>
      <div className={tickerWrapClasses}>
        <div className={tickerClasses}>
          {latestGames.map((latestGame, index) => (
            <div key={index} className={tickerItemClasses(latestGame.status)}>
              <div className={latestgameInnerClasses}>
                <div className={latestgameAvatarClasses}>
                  <img width={25} src={hamster} alt="Lucky Hamster icon" />
                  <span className={styles.latestgameID}>{latestGame.id}</span>
                </div>
                <div className={statusArrowClasses}>
                  <img src={arrow} alt="status arrow " />
                </div>
              </div>
              <div className={latestGameFlexClasses}>
                <div>
                  <p className={latestGameFundsClasses}>{latestGame.funds}</p>
                  <p className={latestGamePercentsClasses}>
                    {latestGame.percents}
                  </p>
                </div>
                {latestGame.status === 'up' && (
                  <img src={chartup} alt="chartup" />
                )}
                {latestGame.status === 'down' && (
                  <img src={chartdown} alt="chartdown" />
                )}
              </div>
              <img
                className={latestGameBorderClasses}
                src={border}
                alt="border"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestGames
