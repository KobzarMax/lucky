import TradingViewWidget from '../TradingView'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import React, { useRef } from 'react'
import caret from '@/asset/CaretDown.svg'
import styles from './index.module.css'

interface GameFooterProps {
  increaseHeight: () => void
  widgetHeight: string
  decreaseHeight: () => void
  isWidgetVisible: boolean
  setWidgetVisible: (isVisible: boolean) => void
}

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

  return (
    <div
      ref={desktopFooterRef}
      className={`${styles['game-footer']} ${styles.gameFooter} ${
        isWidgetVisible ? `${styles.active} ${styles.gameFooterActive}` : ''
      } `}
      style={{ height: widgetHeight }}
    >
      {!isMobile && (
        <div className={styles.gameFooterButton}>
          {isWidgetVisible && (
            <button onClick={increaseHeight} className={styles.increase}>
              {t('increase')}
            </button>
          )}
          <span
            className={styles.widgetButton}
            onClick={(e) => {
              e.stopPropagation()
              setWidgetVisible(!isWidgetVisible)
            }}
          >
            {t('TradingView')}{' '}
            <img
              className={`transition-all duration-300 ${
                isWidgetVisible ? 'rotate-0' : 'rotate-180'
              }`}
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

      <div
        ref={chartRef}
        className={` ${styles.widgetContainer} ${
          isWidgetVisible ? `${styles.widgetContainerActive} active` : ''
        }`}
      >
        <TradingViewWidget />
      </div>
    </div>
  )
}
