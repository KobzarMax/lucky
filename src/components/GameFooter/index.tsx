import TradingViewWidget from '../TradingView'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { useRef } from 'react'
import caret from '../../asset/CaretDown.svg'

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
      className={`game-footer transition-all duration-300 lg:max-h-[60vh] lg:min-h-[100px] ${
        isWidgetVisible ? 'active h-[63vh] pb-[135px]' : ''
      } lg:fixed lg:bottom-0 lg:z-50 lg:h-auto lg:w-full lg:pb-0`}
      style={{ height: widgetHeight }}
    >
      {!isMobile && (
        <div
          className={`game-footer-button relative flex items-center justify-center gap-[5px] text-xs font-medium leading-[15px] text-[#8A8A8A]`}
        >
          {isWidgetVisible && (
            <button
              onClick={increaseHeight}
              className="absolute left-3 top-0 min-h-[34px] cursor-pointer rounded-md bg-dark_green px-2 text-white"
            >
              {t('increase')}
            </button>
          )}
          <span
            className="flex h-[34px] cursor-pointer items-center justify-center gap-[5px]"
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
            <button
              onClick={decreaseHeight}
              className="absolute right-3 top-0 min-h-[34px] cursor-pointer rounded-md bg-primary px-2 text-white"
            >
              {t('decrease')}
            </button>
          )}
        </div>
      )}

      <div
        ref={chartRef}
        className={`widget-container transition-all duration-300 ${
          isWidgetVisible ? 'active relative z-50 h-full lg:h-full lg:pb-0' : ''
        }`}
      >
        <TradingViewWidget />
      </div>
    </div>
  )
}
