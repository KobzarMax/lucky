import TradingViewWidget from '../TradingView'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import React, { useRef } from 'react'
import classNames from 'classnames'
import styles from './GameFooter.module.css'
import { GameFooterProps } from './gameFooter'
import { caret } from '@/images'

export const GameFooter: React.FC<GameFooterProps> = ({
  increaseHeight,
  widgetHeight,
  decreaseHeight,
  isWidgetVisible,
  setWidgetVisible
}) => {
  const { t } = useTranslation(['translations'])
  const isMobile = useSelector((state: RootState) => state.global.isMobile)
  const chartRef = useRef<HTMLDivElement>(null)
  const desktopFooterRef = useRef<HTMLDivElement>(null)

  const containerClass = classNames(styles['game-footer'], styles.gameFooter)
  const activeContainerClass = classNames(
    styles.active,
    styles.gameFooterActive
  )
  const widgetButtonClass = styles.widgetButton
  const widgetButtonRotateClass = classNames('transition-all duration-300', {
    'rotate-0': isWidgetVisible,
    'rotate-180': !isWidgetVisible
  })
  const widgetContainerClass = classNames(styles.widgetContainer, {
    [styles.widgetContainerActive]: isWidgetVisible,
    active: isWidgetVisible
  })

  return (
    <div
      ref={desktopFooterRef}
      className={classNames(containerClass, {
        [activeContainerClass]: isWidgetVisible
      })}
      style={{ height: widgetHeight, overflow: 'hidden' }}
    >
      {!isMobile && (
        <div className={styles.gameFooterButton}>
          {isWidgetVisible && (
            <button onClick={increaseHeight} className={styles.increase}>
              {t('increase')}
            </button>
          )}
          <span
            className={widgetButtonClass}
            onClick={(e) => {
              e.stopPropagation()
              setWidgetVisible(!isWidgetVisible)
            }}
          >
            {t('TradingView')}{' '}
            <img
              className={widgetButtonRotateClass}
              src={caret}
              alt="caret down"
            />
          </span>
          {isWidgetVisible && (
            <button onClick={decreaseHeight} className={styles.decrease}>
              {t('decrease')}
            </button>
          )}
        </div>
      )}

      <div ref={chartRef} className={widgetContainerClass}>
        <TradingViewWidget />
      </div>
    </div>
  )
}
