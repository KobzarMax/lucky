import { useTranslation } from 'react-i18next'
import React from 'react'
import classNames from 'classnames'
import styles from './PNLComponent.module.css'

export const PNLComponent: React.FC = () => {
  const { t } = useTranslation(['translations'])

  const pnlClass = classNames(styles.pnl)
  const pnlHeadClass = classNames(styles.pnlHead)
  const circleClass = classNames(styles.circle)
  const circleInnerClass = classNames(styles.circleInner)
  const wonClass = classNames(styles.won)
  const wonNumberClass = classNames(styles.wonNumber)
  const smallTextClass = classNames(styles.smallText)
  const midTextClass = classNames(styles.midText)
  const baseTextPrimaryClass = classNames(styles.baseTextPrimary)
  const textWrapClass = classNames(styles.textWrap)
  const wonTextClass = classNames(styles.wonText)
  const wonItemClass = classNames(styles.wonItem)
  const roundsNumberClass = classNames(styles.roundsNumber)
  const plusTokenClass = classNames(styles.plusToken)
  const secondRoundsNumberClass = classNames(styles.secondRoundsNumber)
  const secondPlusTokenClass = classNames(styles.secondPlusToken)

  return (
    <div className={pnlClass}>
      <div className={pnlHeadClass}>
        <div className={circleClass}>
          <div className={circleInnerClass}>
            <p className={wonClass}>{t('won')}</p>
            <p className={wonNumberClass}>74/150</p>
            <p className={smallTextClass}>49.33%</p>
          </div>
        </div>
        <div>
          <p className={midTextClass}>{t('notResults')}</p>
          <p className={baseTextPrimaryClass}>-0.1270 BNB</p>
          <p className={smallTextClass}>-$38.75</p>
        </div>
      </div>
      <div className="mb-2.5 mt-[30px]">
        <p className={midTextClass}>{t('averageReturnRound')}</p>
        <p className={baseTextPrimaryClass}>-0.0008 BNB</p>
        <p className={smallTextClass}>-0.26</p>
      </div>
      <div className="mb-2.5">
        <p className={midTextClass}>{t('bestRound')}: #166178</p>
        <p className={classNames(baseTextPrimaryClass, styles.baseTextGreen)}>
          +0.0191 BNB <span className={smallTextClass}>(3.49x)</span>
        </p>
        <p className={smallTextClass}>$5.83</p>
      </div>
      <div className={textWrapClass}>
        <p className={midTextClass}>{t('averagePositionEnteredRound')}</p>
        <p className={wonNumberClass}>0.00053 BNB</p>
        <p className={smallTextClass}>1.62</p>
      </div>
      <div>
        <p className={wonTextClass}>{t('won')}</p>
        <div className={wonItemClass}>
          <div>
            <p className={roundsNumberClass}>74 {t('rounds')}</p>
            <p className={smallTextClass}>49.33%</p>
          </div>
          <div>
            <p className={plusTokenClass}>+0.3220 BNB</p>
            <p className={smallTextClass}>$98.30</p>
          </div>
        </div>
        <p className={wonTextClass}>{t('lost')}</p>
        <div className={styles.wonSecondItem}>
          <div>
            <p className={secondRoundsNumberClass}>76 {t('rounds')}</p>
            <p className={smallTextClass}>49.33%</p>
          </div>
          <div>
            <p className={secondPlusTokenClass}>-0.4490 BNB</p>
            <p className={smallTextClass}>$98.30</p>
          </div>
        </div>
      </div>
    </div>
  )
}
