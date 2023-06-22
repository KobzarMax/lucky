import { GameCard } from '@/components/GameCard'
import { Keyboard, Mousewheel, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Nav } from '@/components/Nav'
import 'swiper/css/navigation'
import 'swiper/css'
import { Link } from 'react-router-dom'
import { GameTimer } from '@/components/GameTimer'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import React, { useRef } from 'react'
import styles from './GameContent.module.css'
import { GameData } from '../GameCard/gameCard'
import { GameContentProps } from './gameContent'
import { games } from './gameContentConsts'
import {
  arrow,
  gameCards,
  questionMark,
  trophy,
  clockCounter,
  chartBar
} from '@/images'
import classNames from 'classnames'

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

  return (
    <>
      <div className={styles.gameContentActions}>
        {!isMobile && (
          <div className={styles.gameMainArrows}>
            <div
              className={classNames(
                styles['swiper-button-prev'],
                'swiper-button-prev',
                'swiper-button'
              )}
            >
              <img className={styles.arrowRotated} src={arrow} alt="prev" />
            </div>
            <img
              className="cursor-pointer"
              src={gameCards}
              onClick={navigateToActiveSlide}
              alt="game cards"
            />
            <div
              className={classNames(
                styles['swiper-button-next'],
                'swiper-button-next',
                'swiper-button'
              )}
            >
              <img className={styles.arrow} src={arrow} alt="next" />
            </div>
          </div>
        )}

        <div className={styles.wrap}>
          <GameTimer />
          <div className={styles.link}>
            <img src={questionMark} alt="question" />
          </div>
          <Link to={'/leaderboard'} className={styles.link}>
            <img src={trophy} alt="trophy" />
          </Link>
          {!isMobile && (
            <div
              onClick={(event) => {
                event.stopPropagation()
                toggleAside()
              }}
              className={styles.clockCounterDesktop}
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
            <SwiperSlide className={classNames(styles.SwiperSlide)} key={index}>
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
              className={classNames(styles.SwiperSlideDesktop)}
              key={index}
            >
              <GameCard toggleShow={toggleShow} key={index} cardData={game} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {isMobile && (
        <div className={styles.bottomActionsWrap}>
          <div className={styles.bottomActionsInner}>
            <div
              className={classNames(
                styles['swiper-button-prev'],
                'swiper-button-prev',
                'swiper-button'
              )}
            >
              <img className={styles.arrowRotated} src={arrow} alt="prev" />
            </div>
            <div className={styles.bottomActions}>
              <div
                className={classNames(
                  !isWidgetVisible ? 'bg-widget_bg' : '',
                  styles.chartBar
                )}
              >
                <img
                  className={styles.arrow}
                  onClick={() => {
                    setWidgetVisible(false)
                    navigateToActiveSlide()
                  }}
                  src={gameCards}
                  alt="game cards"
                />
              </div>
              <div
                className={classNames(
                  isWidgetVisible ? 'bg-widget_bg' : '',
                  styles.chartBar
                )}
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
                className={styles.clockCounter}
              >
                <img
                  className="h-[25px] w-[25px]"
                  src={clockCounter}
                  alt="clockCounter"
                />
              </div>
            </div>
            <div
              className={classNames(
                styles['swiper-button-next'],
                'swiper-button-next',
                'swiper-button'
              )}
            >
              <img className={styles.arrow} src={arrow} alt="next" />
            </div>
          </div>
          <Nav isMobile={isMobile} visible={true} />
        </div>
      )}
    </>
  )
}
