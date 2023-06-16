import { useTranslation } from 'react-i18next'
import React from 'react'
import styles from './PNLComponent.module.css'

export const PNLComponent: React.FC = () => {
  const { t } = useTranslation(['translations'])
  return (
    <div className={styles.pnl}>
      <div className={styles.pnlHead}>
        <div className={styles.circle}>
          <div className={styles.circleInner}>
            <p className={styles.won}>{t('won')}</p>
            <p className={styles.wonNumber}>74/150</p>
            <p className={styles.smallText}>49.33%</p>
          </div>
        </div>
        <div>
          <p className={styles.midText}>{t('notResults')}</p>
          <p className={styles.baseTextPrimary}>-0.1270 BNB</p>
          <p className={styles.smallText}>-$38.75</p>
        </div>
      </div>
      <div className="mb-2.5 mt-[30px]">
        <p className={styles.midText}>{t('averageReturnRound')}</p>
        <p className={styles.baseTextPrimary}>-0.0008 BNB</p>
        <p className={styles.smallText}>-0.26</p>
      </div>
      <div className="mb-2.5">
        <p className={styles.midText}>{t('bestRound')}: #166178</p>
        <p className={styles.baseTextGreen}>
          +0.0191 BNB <span className={styles.smallText}>(3.49x)</span>
        </p>
        <p className={styles.smallText}>$5.83</p>
      </div>
      <div className={styles.textWrap}>
        <p className={styles.midText}>{t('averagePositionEnteredRound')}</p>
        <p className={styles.wonNumber}>0.00053 BNB</p>
        <p className={styles.smallText}>1.62</p>
      </div>
      <div>
        <p className={styles.wonText}>{t('won')}</p>
        <div className={styles.wonItem}>
          <div>
            <p className={styles.roundsNumber}>74 {t('rounds')}</p>
            <p className={styles.smallText}>49.33%</p>
          </div>
          <div>
            <p className={styles.plusToken}>+0.3220 BNB</p>
            <p className={styles.smallText}>$98.30</p>
          </div>
        </div>
        <p className={styles.wonText}>{t('lost')}</p>
        <div className={styles.wonSecondItem}>
          <div>
            <p className={styles.secondRoundsNumber}>76 {t('rounds')}</p>
            <p className={styles.smallText}>49.33%</p>
          </div>
          <div>
            <p className={styles.secondPlusToken}>-0.4490 BNB</p>
            <p className={styles.smallText}>$98.30</p>
          </div>
        </div>
      </div>
    </div>
  )
}
