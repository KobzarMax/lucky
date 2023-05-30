import gameCards from '../asset/game-cards.svg'
import arrow from '../asset/arrowup.svg'
import questionMark from '../asset/Question.svg'
import trophy from '../asset/Trophy.svg'
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
import React, { useState, useRef } from 'react'

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
  const [asideView, setAsideView] = useState<boolean>(true)
  const [show, setShow] = useState<boolean>(true)

  const toggleShow = (): void => {
    setShow(!show)
  }

  const toggleAside = (): void => {
    setAsideView(!asideView)
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

  const swiperRef = useRef<SwiperRef>(null)

  const slidePrev = (): void => {
    swiperRef.current?.swiper.slidePrev()
  }

  const slideNext = (): void => {
    swiperRef.current?.swiper.slideNext()
  }

  return (
    <div id="game" className="relative min-h-[100vh] overflow-hidden">
      <Win toggleShow={toggleShow} show={show} />
      <div className="pt-[90px]">
        <Referals />
        <div className="mb-[33px] flex items-center justify-end gap-[260px]">
          {!isMobile && (
            <div className="flex max-w-[150px] items-center justify-center gap-2.5 rounded-[49px] bg-[#2b2b2b99] px-5 py-1">
              <button className="arrow-slider-button" onClick={slidePrev}>
                <img
                  className="w-[25px] -rotate-90 cursor-pointer"
                  src={arrow}
                  alt="arrow"
                />
              </button>
              <img src={gameCards} alt="game cards" />
              <button className="arrow-slider-button" onClick={slideNext}>
                <img
                  className="w-[25px] rotate-90 cursor-pointer"
                  src={arrow}
                  alt="arrow"
                />
              </button>
            </div>
          )}

          <div className="flex items-center justify-center gap-2.5 pr-[75px]">
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
            <div
              onClick={toggleAside}
              className="flex cursor-pointer items-center justify-center rounded-[15px] bg-[#2b2b2b99] p-[14px] transition-all duration-300 hover:bg-[#2b2b2bcc]"
            >
              <img src={clockCounter} alt="clockCounter" />
            </div>
          </div>
        </div>
        <Swiper
          ref={swiperRef.current}
          loop={false}
          spaceBetween={37}
          slidesPerView={1}
          navigation={{
            nextEl: '.news-swiper-button-next',
            prevEl: '.news-swiper-button-prev',
            disabledClass: 'swiper-button-disabled'
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 37
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 65
            }
          }}
        >
          {games.map((game: GameData, index: number) => (
            <SwiperSlide className="max-w-[360px]" key={index}>
              <GameCard cardData={game} />
            </SwiperSlide>
          ))}
        </Swiper>
        {isMobile && (
          <div className="mb-[19px] mt-[30px] flex w-full items-center justify-center gap-2.5 rounded-[49px] bg-[#2b2b2b99] py-1 pl-[13px] pr-3">
            <button className="arrow-slider-button">
              <img
                className="-rotate-90 cursor-pointer"
                src={arrow}
                alt="arrow"
              />
            </button>
            <img src={gameCards} alt="game cards" />
            <button className="arrow-slider-button">
              <img
                className="rotate-90 cursor-pointer"
                src={arrow}
                alt="arrow"
              />
            </button>
          </div>
        )}
      </div>
      <Aside asideView={asideView} toggleView={toggleAside} />
    </div>
  )
}

export default Game
