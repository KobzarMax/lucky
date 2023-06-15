import React from 'react'
import { useTranslation } from 'react-i18next'
import chartup from '@/asset/chartup.svg'
import chartdown from '@/asset/chartdown.svg'
import arrowup from '@/asset/arrowup.svg'
import avatar from '@/asset/hamster.png'
import down from '@/asset/down.svg'
import border from '@/asset/latest-games-border.svg'
import styles from './index.module.css'
import { latestGames } from '@/consts'

const LatestGames: React.FC = () => {
  const { t } = useTranslation(['translations'])

  return (
    <div className={styles.latestgames}>
      <p className={styles.latestgamesText}>
        <img className="inline-block" src={down} alt="down" /> {t('latest')}{' '}
        <span className="lowercase text-primary">{t('games')}</span>
      </p>
      <div className={styles.tickerWrap}>
        <div className={`${styles.ticker} ${styles.tickerWrapInner}`}>
          {latestGames.map((latestGame, index) => (
            <div
              key={index}
              className={`${latestGame.status} ${styles['ticker__item']} ${styles.hexagon} ${styles.latestGameItem}`}
            >
              <div className={styles.latestgameInner}>
                <div className={styles.latestgameAvatar}>
                  <img width={25} src={avatar} alt="Lucky Hamster icon" />
                  <span className={styles.latestgameID}>{latestGame.id}</span>
                </div>
                <div className={styles['status-arrow']}>
                  <img src={arrowup} alt="status arrow " />
                </div>
              </div>
              <div className={styles.latestGameFlex}>
                <div>
                  <p className={styles.latestGameFunds}>{latestGame.funds}</p>
                  <p className={styles.latestGamePercents}>
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
                className={styles.latestGameBorder}
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
