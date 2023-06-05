import gameCards from '../asset/game-cards.svg'
import arrow from '../asset/arrowup.svg'
import questionMark from '../asset/Question.svg'
import trophy from '../asset/Trophy.svg'
import chartBar from '../asset/ChartBar.svg'
import clockCounter from '../asset/ClockCounterClockwise.svg'
import { Link } from 'react-router-dom'
import { GameTimer } from '@/components/GameTimer'
import { Referals } from '@/components/Referals'
import { GameCard } from '@/components/GameCard'
import { Aside } from '@/components/Aside'
import { Win } from '@/components/Win'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { useState, useRef } from 'react'
import TradingViewWidget from '@/components/TradingView'
import caret from '../asset/CaretDown.svg'
import { useTranslation } from 'react-i18next'

SwiperCore.use([Navigation])

interface GameData {
  status: string
  lastPrice: string
  fixedPrice: string
  presentPool: string
  gameID: string
}

interface GameProps {
  isMobile: boolean
}

function Game({ isMobile }: GameProps): JSX.Element {
  const { t } = useTranslation(['translations'])
  const [asideView, setAsideView] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(true)

  const [isWidgetVisible, setWidgetVisible] = useState(false) // State for widget visibility

  const toggleShow = (): void => {
    setShow(!show)
  }

  const toggleAside = (): void => {
    setAsideView(!asideView)
    if (isWidgetVisible) {
      setWidgetVisible(false)
    }
  }

  const games: GameData[] = [
    {
      status: 'ended',
      lastPrice: '$1.8848',
      fixedPrice: '$1.8905',
      presentPool: '4.9641',
      gameID: '#91999'
    },
    {
      status: 'active',
      lastPrice: '$1.8848',
      fixedPrice: '$1.8905',
      presentPool: '4.9641',
      gameID: '#92002'
    },
    {
      status: 'togo',
      lastPrice: '$1.8848',
      fixedPrice: '$1.8905',
      presentPool: '0.0001',
      gameID: '#92001'
    },
    {
      status: 'ended',
      lastPrice: '$1.8848',
      fixedPrice: '$1.8905',
      presentPool: '4.9641',
      gameID: '#91999'
    },
    {
      status: 'active',
      lastPrice: '$1.8848',
      fixedPrice: '$1.8905',
      presentPool: '4.9641',
      gameID: '#92002'
    },
    {
      status: 'togo',
      lastPrice: '$1.8848',
      fixedPrice: '$1.8905',
      presentPool: '0.0001',
      gameID: '#92001'
    },
    {
      status: 'togo',
      lastPrice: '$1.8848',
      fixedPrice: '$1.8905',
      presentPool: '0.0001',
      gameID: '#92001'
    }
  ]

  const swiperRef = useRef<SwiperRef | null>(null)

  return (
    <div id="game" className="relative min-h-[100vh] overflow-hidden">
      <Win toggleShow={toggleShow} show={show} />
      <div className="pt-[90px] lg:min-h-[100vh]">
        <Referals />
        <div className="relative mb-[33px] flex items-center justify-end gap-[270px]">
          {!isMobile && (
            <div className="absolute left-[45.5%] right-[50%] top-0 flex w-full max-w-[150px] items-end justify-center gap-2.5 rounded-[49px] bg-[#2b2b2b99] px-5 py-1">
              <div className="swiper-button-prev swiper-button">
                <img
                  className="w-[25px] -rotate-90 cursor-pointer"
                  src={arrow}
                  alt="prev"
                />
              </div>
              <img src={gameCards} alt="game cards" />
              <div className="swiper-button-next swiper-button">
                <img
                  className="w-[25px] rotate-90 cursor-pointer"
                  src={arrow}
                  alt="next"
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-center gap-2.5 pr-3 lg:pr-[75px]">
            <GameTimer />
            <div className="flex cursor-pointer items-center justify-center rounded-[15px] bg-[#2b2b2b99] p-[14px] transition-all duration-300 hover:bg-[#2b2b2bcc]">
              <img src={questionMark} alt="question" />
            </div>
            <Link
              to={'/leaderboard'}
              className="flex cursor-pointer items-center justify-center rounded-[15px] bg-[#2b2b2b99] p-[14px] transition-all duration-300 hover:bg-[#2b2b2bcc]"
            >
              <img src={trophy} alt="trophy" />
            </Link>
            {!isMobile && (
              <div
                onClick={toggleAside}
                className="flex cursor-pointer items-center justify-center rounded-[15px] bg-[#2b2b2b99] p-[14px] transition-all duration-300 hover:bg-[#2b2b2bcc]"
              >
                <img src={clockCounter} alt="clockCounter" />
              </div>
            )}
          </div>
        </div>
        {isMobile && !isWidgetVisible && (
          <Swiper
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={24}
            initialSlide={2}
            className="mobile-swiper"
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
              disabledClass: 'swiper-button-disabled'
            }}
          >
            {games.map((game: GameData, index: number) => (
              <SwiperSlide className="mx-auto w-full max-w-[360px]" key={index}>
                <GameCard key={index} cardData={game} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {!isMobile && (
          <Swiper
            slidesPerView={4}
            spaceBetween={40}
            centeredSlides={true}
            initialSlide={2}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
              disabledClass: 'swiper-button-disabled'
            }}
          >
            {games.map((game: GameData, index: number) => (
              <SwiperSlide className="w-full max-w-[360px]" key={index}>
                <GameCard key={index} cardData={game} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {isMobile && (
          <div className="fixed bottom-2 max-h-[48px] w-full pl-[13px] pr-3">
            <div className="relative flex max-h-[48px] w-full items-end justify-center gap-2.5 rounded-[49px] bg-[#2b2b2b99] px-5 py-1">
              <div className="swiper-button-prev swiper-button">
                <img
                  className="w-[25px] -rotate-90 cursor-pointer"
                  src={arrow}
                  alt="prev"
                />
              </div>
              <div className="flex max-h-[38px] items-center justify-center gap-[22.5px] rounded-[30px] bg-[#38383899] py-[5px]">
                <div
                  className={`${
                    !isWidgetVisible ? 'bg-[#58585899]' : ''
                  } flex cursor-pointer items-center justify-center rounded-[30px] px-[22.5px] py-[6.5px] transition-all duration-300 hover:bg-[#2b2b2bcc]`}
                >
                  <img
                    className="h-[25px] w-[25px]"
                    onClick={() => setWidgetVisible(false)}
                    src={gameCards}
                    alt="game cards"
                  />
                </div>
                <div
                  className={` ${
                    isWidgetVisible ? 'bg-[#58585899]' : ''
                  } flex cursor-pointer items-center justify-center rounded-[30px] px-[22.5px] py-[6.5px] transition-all duration-300 hover:bg-[#2b2b2bcc]`}
                  onClick={() => setWidgetVisible(!isWidgetVisible)}
                >
                  <img
                    className="h-[25px] w-[25px]"
                    src={chartBar}
                    alt="chartBar"
                  />
                </div>
                <div
                  onClick={toggleAside}
                  className="flex cursor-pointer items-center justify-center rounded-[30px] px-[22.5px] py-[6.5px] transition-all duration-300 hover:bg-[#2b2b2bcc]"
                >
                  <img
                    className="h-[25px] w-[25px]"
                    src={clockCounter}
                    alt="clockCounter"
                  />
                </div>
              </div>
              <div className="swiper-button-next swiper-button">
                <img
                  className="w-[25px] rotate-90 cursor-pointer"
                  src={arrow}
                  alt="next"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      {isWidgetVisible && (
        <div
          className={`game-footer ${
            isWidgetVisible
              ? 'active h-[100vh] pb-[80px] lg:h-auto lg:pb-0'
              : ''
          } lg:h-auto lg:pb-0`}
        >
          {!isMobile && (
            <div
              className={`game-footer-button flex w-full cursor-pointer items-center justify-center gap-[5px] py-[7px] text-xs font-medium leading-[15px] text-[#8A8A8A]`}
              onClick={() => setWidgetVisible(!isWidgetVisible)}
            >
              {t('TradingView')}{' '}
              <img
                className={`transition-all duration-300 ${
                  isWidgetVisible ? 'rotate-0' : 'rotate-180'
                }`}
                src={caret}
                alt="caret down"
              />
            </div>
          )}

          <div
            className={`widget-container ${
              isWidgetVisible
                ? 'active relative z-50 h-[100vh] lg:h-auto lg:pb-0'
                : ''
            }`}
          >
            <TradingViewWidget />
          </div>
        </div>
      )}
      <Aside asideView={asideView} toggleView={toggleAside} />
    </div>
  )
}

export default Game
