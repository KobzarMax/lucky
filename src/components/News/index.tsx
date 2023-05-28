import { useTranslation } from 'react-i18next'
import newsImage from '../../asset/news-bg.svg'
import arrow from '../../asset/arrowup.svg'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'

SwiperCore.use([Navigation])

export const News = () => {
  const { t } = useTranslation(['home'])
  const news = [
    {
      image: newsImage,
      author: 'User123',
      title: 'Pellentesque sit amet porttitor',
      date: '13.05.2023',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur...'
    },
    {
      image: newsImage,
      author: 'User123',
      title: 'Pellentesque sit amet porttitor',
      date: '13.05.2023',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur...'
    },
    {
      image: newsImage,
      author: 'User123',
      title: 'Pellentesque sit amet porttitor',
      date: '13.05.2023',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur...'
    }
  ]
  const swiperRef = React.useRef<React.RefObject<SwiperRef> | null | undefined>(
    null
  )
  return (
    <div className="relative mt-[7.5rem] lg:mt-24">
      <h2 className="mb-[31px] text-center text-[25px] font-bold leading-[30px] text-white">
        {t('news')}
      </h2>
      <div className="slide-buttons absolute right-[0px] top-[0px] flex items-center justify-center gap-[14px] lg:right-[52px] lg:top-[167px] lg:gap-[21px]">
        <div className="swiper-button news-swiper-button-prev flex h-8 w-8 cursor-pointer items-center justify-center rounded-[5px] bg-primary">
          <img
            src={arrow}
            alt="slide arrow"
            className="w-6 -rotate-90 lg:w-full"
          />
        </div>
        <div className="swiper-button news-swiper-button-next flex h-8 w-8 cursor-pointer items-center justify-center rounded-[5px] bg-primary">
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
                  {article.author}
                </p>
                <p className="text-[10px] leading-3 text-[#929292] lg:text-[13px] lg:leading-4">
                  {article.date}
                </p>
              </div>
              <p className="article-text mb-4 text-xs leading-[15px] text-white lg:text-[15px] lg:leading-[18px]">
                {article.text}
              </p>
              <a
                href="#"
                className="flex items-center justify-start gap-[5px] text-xs leading-[15px] text-primary lg:text-[15px] lg:leading-[18px]"
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
