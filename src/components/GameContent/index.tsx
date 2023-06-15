import { GameCard } from '@/components/GameCard'
import { Keyboard, Mousewheel, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Nav } from '@/components/Nav'
import 'swiper/css/navigation'
import 'swiper/css'
import gameCards from '../../asset/game-cards.svg'
import arrow from '../../asset/arrowup.svg'
import questionMark from '../../asset/Question.svg'
import trophy from '../../asset/Trophy.svg'
import chartBar from '../../asset/ChartBar.svg'
import clockCounter from '../../asset/ClockCounterClockwise.svg'
import { Link } from 'react-router-dom'
import { GameTimer } from '@/components/GameTimer'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import React, { useRef } from 'react'

interface GameData {
  status: string
  lastPrice: string
  fixedPrice: string
  presentPool: string
  gameID: string
}

interface GameContentProps {
  toggleWidget: () => void
  toggleAside: () => void
  isWidgetVisible: boolean
  toggleShow: () => void
  setWidgetVisible: (visible: boolean) => void
}

export const GameContent: React.FC<GameContentProps> = ({
  toggleWidget,
  toggleAside,
  isWidgetVisible,
  toggleShow,
  setWidgetVisible
}) => {
  const isMobile = useSelector((state: RootState) => state.global.isMobile)

  const swiperRef = useRef<any>(null)

  const navigateToActiveSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(4)
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
  return (
    <>
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
              <GameCard toggleShow={toggleShow} key={index} cardData={game} />
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
              <GameCard toggleShow={toggleShow} key={index} cardData={game} />
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
                  onClick={() => {
                    setWidgetVisible(false)
                    navigateToActiveSlide
                  }}
                  src={gameCards}
                  alt="game cards"
                />
              </div>
              <div
                className={` ${
                  isWidgetVisible ? 'bg-[#58585899]' : ''
                } flex cursor-pointer items-center justify-center rounded-[30px] px-[22.5px] py-[6.5px] transition-all duration-300 hover:bg-[#2b2b2bcc]`}
                onClick={toggleWidget}
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
    </>
  )
}
