import { useTranslation } from 'react-i18next'
import banner1 from '../../asset/banner1.png'
import banner2 from '../../asset/banner2.png'
import banner3 from '../../asset/banner3.png'
import arrow from '../../asset/arrowup.svg'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'

SwiperCore.use([Navigation])

export const News = () => {
  const { t } = useTranslation(['translations'])
  const news = [
    {
      image: banner1,

      title: 'The game starts soon',
      date: '02.06.2023',
      text: '🎮🔮 Exciting news! Lucky Hamster, the ultimate blockchain prediction game, is launching soon! Get ready to showcase your skills and win big! 🚀 #LuckyHamster #BlockchainGame'
    },
    {
      image: banner2,

      title: 'How does this game work?',
      date: '02.06.2023',
      text: '🔮🐹 Predict market moves, earn rewards! Lucky Hamster, the innovative blockchain prediction game, puts your skills to the test. Start playing now! 🚀 #LuckyHamster #BlockchainGame'
    },
    {
      image: banner3,

      title: 'Take your profit now',
      date: '02.06.2023',
      text: '🤑💰 Play, predict, profit! Join Lucky Hamster, the blockchain prediction game, and turn your foresight into earnings. Get started now! 🚀 #LuckyHamster #BlockchainGame'
    }
  ]
  const swiperRef = React.useRef<React.RefObject<SwiperRef> | null | undefined>(
    null
  )
  return (
    <div className="news relative mt-[7.5rem] lg:mt-24">
      <h2 className="mb-[31px] text-center text-[25px] font-bold leading-[30px] text-white">
        {t('news')}
      </h2>
      <div className="slide-buttons absolute right-[0px] top-[0px] flex items-center justify-center gap-[14px] lg:right-[52px] lg:top-[167px] lg:gap-[21px]">
        <div className="swiper-button news-swiper-button-prev bg-primary flex h-8 w-8 cursor-pointer items-center justify-center rounded-[5px]">
          <img
            src={arrow}
            alt="slide arrow"
            className="w-6 -rotate-90 lg:w-full"
          />
        </div>
        <div className="swiper-button news-swiper-button-next bg-primary flex h-8 w-8 cursor-pointer items-center justify-center rounded-[5px]">
          <img
            src={arrow}
            alt="slide arrow"
            className="w-6 rotate-90 lg:w-full"
          />
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
        {news.map((article, index) => (
          <SwiperSlide
            className="news-article h-[475px] max-w-[283px] lg:max-w-[365px]"
            key={index}
          >
            <div>
              <img src={article.image} alt="article image" />
            </div>
            <div className="px-2 pb-[47px] pt-2.5 lg:px-2.5">
              <p className="mb-[5px] text-[13px] font-bold leading-4 text-white lg:text-[17px] lg:leading-[21px]">
                {article.title}
              </p>
              <div className="mb-[15px] flex items-center justify-between">
                <p className="text-[10px] leading-3 text-[#929292] lg:text-[13px] lg:leading-4">
                  Lucky Hamster
                </p>
                <p className="text-[10px] leading-3 text-[#929292] lg:text-[13px] lg:leading-4">
                  {article.date}
                </p>
              </div>
              <p className="article-text mb-4 text-xs leading-[15px] text-white lg:text-[15px] lg:leading-[18px]">
                {article.text}
              </p>
              <a
                href="https://twitter.com/HamsterLucky"
                target="_blank"
                className="text-primary flex items-center justify-start gap-[5px] text-xs leading-[15px] lg:text-[15px] lg:leading-[18px]"
              >
                {t('readAll')}{' '}
                <img className="h-4 w-4" src={arrow} alt="arrow" />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
