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
import 'swiper/css/navigation'
import { Keyboard, Mousewheel, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { useState, useEffect, useRef } from 'react'
import TradingViewWidget from '@/components/TradingView'
import caret from '../asset/CaretDown.svg'
import { useTranslation } from 'react-i18next'
import { Nav } from '@/components/Nav'

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
  const asideRef = useRef<HTMLDivElement>(null)

  const [isWidgetVisible, setWidgetVisible] = useState(false)
  const [counter, setCounter] = useState(216)
  const intervalRef = useRef<any>(null)
  const windowSize = useRef([window.innerWidth, window.innerHeight])

  const [coords, setCoords] = useState({ x: 0, y: 200 })

  useEffect(() => {
    const handleWindowMouseMove = (event: any) => {
      setCoords({
        x: event.clientX,
        y: windowSize.current[1] - event.clientY
      })
    }

    window.addEventListener('mousemove', handleWindowMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove)
    }
  }, [])

  useEffect(() => {
    return () => stopCounter() // when App is unmounted we should stop counter
  }, [])

  const widgetHeight = counter

  const startCounter = () => {
    if (intervalRef.current) return
    if (isWidgetVisible) {
      intervalRef.current = setInterval(() => {
        setCoords((prevCoords) => {
          const newY = windowSize.current[1] - prevCoords.y
          setCounter(newY) // Update counter with the current mouse position
          console.log(prevCoords)
          return prevCoords
        })
      }, 100)
    }
  }

  const stopCounter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const toggleShow = (): void => {
    setShow(!show)
  }

  const toggleAside = (): void => {
    setAsideView(!asideView)
    if (isWidgetVisible) {
      setWidgetVisible(false)
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      asideRef.current &&
      !asideRef.current.contains(event.target as Node) &&
      asideView === true
    ) {
      setAsideView(false)
    }
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      handleClickOutside(event)
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [asideView])

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

  const swiperRef = useRef<any>(null)

  const navigateToActiveSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(4) // Replace 2 with the index of the active slide
    }
  }

  return (
    <div id="game" className="relative min-h-[100vh] overflow-hidden">
      <Win toggleShow={toggleShow} show={show} />
      <div className="pt-[90px]">
        <Referals />
        <div className="relative mb-[33px] flex items-center justify-end gap-[270px]">
          {!isMobile && (
            <div className="absolute inset-x-0 top-0 mx-auto flex w-full max-w-[150px] items-end justify-center gap-2.5 rounded-[49px] bg-[#2b2b2b99] px-5 py-1">
              <div className="swiper-button-prev swiper-button">
                <img
                  className="w-[25px] -rotate-90 cursor-pointer"
                  src={arrow}
                  alt="prev"
                />
              </div>
              <img
                className="cursor-pointer"
                src={gameCards}
                onClick={navigateToActiveSlide}
                alt="game cards"
              />
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
                onClick={(event) => {
                  event.stopPropagation()
                  toggleAside()
                }}
                className="flex cursor-pointer items-center justify-center rounded-[15px] bg-[#2b2b2b99] p-[14px] transition-all duration-300 hover:bg-[#2b2b2bcc]"
              >
                <img src={clockCounter} alt="clockCounter" />
              </div>
            )}
          </div>
        </div>
        {isMobile && !isWidgetVisible && (
          <Swiper
            ref={swiperRef}
            initialSlide={1}
            spaceBetween={-24}
            slidesPerView="auto"
            freeMode={{
              enabled: true,
              sticky: true,
              momentumRatio: 0.25,
              momentumVelocityRatio: 0.5
            }}
            modules={[Keyboard, Mousewheel, FreeMode]}
            centeredSlides
            mousewheel
            keyboard
            resizeObserver
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
            ref={swiperRef}
            initialSlide={2}
            spaceBetween={41}
            slidesPerView="auto"
            freeMode={{
              enabled: true,
              sticky: true,
              momentumRatio: 0.25,
              momentumVelocityRatio: 0.5
            }}
            modules={[Keyboard, Mousewheel, FreeMode]}
            centeredSlides
            mousewheel
            keyboard
            resizeObserver
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
              disabledClass: 'swiper-button-disabled'
            }}
          >
            {games.map((game: GameData, index: number) => (
              <SwiperSlide
                className="w-full min-w-[360px] max-w-[360px]"
                key={index}
              >
                <GameCard key={index} cardData={game} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {isMobile && (
          <div className="fixed bottom-0 z-[100] w-full bg-[#1b1b1bcc] pb-20 pl-[13px] pr-3 pt-[9px]">
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
                    className="h-[25px] w-[25px] cursor-pointer"
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
                  onClick={(event) => {
                    event.stopPropagation()
                    toggleAside()
                  }}
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
            <Nav isMobile={isMobile} visible={true} />
          </div>
        )}
      </div>
      <div
        className={`game-footer transition-all duration-300 lg:max-h-[60vh] ${
          isWidgetVisible ? 'active h-[63vh] pb-[135px]' : ''
        } lg:fixed lg:bottom-0 lg:z-50 lg:h-auto lg:w-full lg:pb-0`}
        style={{ height: widgetHeight }}
      >
        {!isMobile && (
          <div
            className={` ${
              isWidgetVisible ? 'cursor-row-resize' : ''
            } game-footer-button flex items-center justify-center gap-[5px] py-[7px] text-xs font-medium leading-[15px] text-[#8A8A8A]`}
            onMouseDown={startCounter}
            onMouseUp={stopCounter}
            onMouseLeave={stopCounter}
          >
            <span
              className="flex cursor-pointer items-center justify-center gap-[5px]"
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
          </div>
        )}

        <div
          className={`widget-container transition-all duration-300 ${
            isWidgetVisible
              ? 'active relative z-50 h-full lg:h-full lg:pb-0'
              : ''
          }`}
        >
          <TradingViewWidget />
        </div>
      </div>
      <div ref={asideRef}>
        <Aside asideView={asideView} toggleView={toggleAside} />
      </div>
    </div>
  )
}

export default Game
