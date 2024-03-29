import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import styles from './AsideRound.module.css'
import { Round } from './asideRound'
import { arrow, caret, info, play, trophy } from '@/images'

export const AsideRound: React.FC<{ round: Round }> = ({ round }) => {
  const { t } = useTranslation(['translations'])
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = (): void => {
    setIsExpanded((prevState) => !prevState)
  }

  const roundHeaderClasses = classNames(styles.roundHeader, {
    [styles.roundHeaderNotEx]: !isExpanded
  })

  const caretClasses = classNames(styles.caret, {
    [styles.rotatedCaret]: isExpanded
  })

  const roundContentClasses = classNames(styles.roundContent, {
    [styles.expandedContent]: isExpanded,
    [styles.hiddenContent]: !isExpanded
  })

  const directionArrowClasses = classNames(styles.directionText, {
    ['rotate-180']: true // Add any condition here if needed
  })

  return (
    <div className={styles.container}>
      <button className={roundHeaderClasses} onClick={toggleAccordion}>
        <div className={styles.roundHeaderContent}>
          <div className={styles.roundHeaderRoundWrapper}>
            <p className={styles.roundHeaderRound}>{t('round')}</p>
            <span className={styles.roundID}>{round.roundID}</span>
          </div>
          {round.status === 'now' && (
            <div className={styles.roundPlay}>
              <img src={play} alt="play" />{' '}
              <span className={styles.roundPlayText}>{t('now')}</span>
            </div>
          )}
        </div>
        <img src={caret} alt="caret" className={caretClasses} />
      </button>
      <div className={roundContentClasses}>
        <div className={styles.roundContentWrapper}>
          <div className={styles.roundInfo}>
            <p className={styles.infoText}>{t('history')}</p>
            <p className={styles.winTrophy}>
              {t('win')}
              <img className={styles.trophy} src={trophy} alt="trophy" />
            </p>
          </div>
          <div className={styles.choiceText}>
            <p className={styles.roundHeaderRound}>{t('yourChoice')}</p>
            <p className={styles.yourChoiseStatus}>
              <img className={directionArrowClasses} src={arrow} alt="arrow" />
              {t('down')}
            </p>
          </div>
          <div className={styles.choiceText}>
            <p className={styles.roundHeaderRound}>{t('yourPosition')}</p>
            <p className={styles.roundBaseValue}>{round.yourPosition}</p>
          </div>
          <div className={styles.winWrap}>
            <p className={styles.roundHeaderRound}>{t('yourWin')}</p>
            <p className={styles.winInfo}>
              {round.yourWin}{' '}
              <span className={styles.directionText}>$1.76</span>
            </p>
          </div>
          <div className={styles.sumWrap}>
            <p className={styles.roundHeaderRound}>{t('sum')}</p>
            <p className={styles.sumText}>
              {round.sum} <img src={info} alt="info" />
            </p>
          </div>
        </div>
        <div className={styles.finalPriceWrap}>
          <p className={styles.finalPriceText}>{t('finalPrice')}</p>
          <div className={styles.finalPriceInner}>
            <p className={styles.finalPriceValue}>{round.lastPrice}</p>
            <p className={styles.finalPriceStatus}>
              <img src={arrow} alt="arrow" /> {t('up')}
            </p>
          </div>
          <div className={styles.choiceText}>
            <p className={styles.roundHeaderRound}>{t('price')}</p>
            <p className={styles.roundBaseValue}>{round.price}</p>
          </div>
          <div className={styles.choiceText}>
            <p className={styles.priceFondText}>{t('priseFond')}</p>
            <p className={styles.priceFondValue}>{round.priseFond}</p>
          </div>
          <div className={`mb-[5px] ${styles.directionInner}`}>
            <p className={styles.directionText}>{t('up')}</p>
            <p className={styles.directionValue}>{round.up}</p>
          </div>
          <div className={styles.directionInner}>
            <p className={styles.directionText}>{t('down')}</p>
            <p className={styles.directionValue}>{round.down}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
