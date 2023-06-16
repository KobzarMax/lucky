import { useTranslation } from 'react-i18next'
import arrow from '@/asset/arrowup.svg'
import { Swiper, SwiperSlide, SwiperRef } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { news } from '@/consts'
import styles from './index.module.css'

SwiperCore.use([Navigation])

export const News: React.FC = () => {
  const { t } = useTranslation(['translations'])
  const language = useSelector((state: RootState) => state.global.language)
  const isMobile = useSelector((state: RootState) => state.global.isMobile)

  const swiperRef = React.useRef<React.RefObject<SwiperRef> | null | undefined>(
    null
  )
  return (
    <div className={styles.news}>
      <h2
        className={`mb-[31px] ${
          language === 'ru' ? 'text-left' : 'text-center'
        } ${styles.newsTitle}`}
      >
        {t('news')}
      </h2>
      <div
        className={`${styles.slideButtons} ${
          isMobile ? '' : styles.hiddenButtons
        }`}
      >
        <div
          className={`${styles['swiper-button']} news-swiper-button-prev ${styles['news-swiper-button-prev']} ${styles.newsButton}`}
        >
          <img
            src={arrow}
            alt="slide arrow"
            className="h-[183px] w-6 -rotate-90 lg:w-full"
          />
        </div>
        <div
          className={`${styles['swiper-button']} news-swiper-button-next ${styles['news-swiper-button-next']} ${styles.newsButton}`}
        >
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
            className={`${styles.newsArticle} ${styles['news-article']}`}
            key={index}
          >
            <div className={styles.newsArticleItem}>
              <img
                className={styles.newsArticleImage}
                src={article.image}
                alt="article image"
              />
            </div>
            <div className={styles.newsArticleContent}>
              <p className={styles.articleTitle}>{article.title}</p>
              <div className={styles.articleData}>
                <p className={styles.articleDataItem}>Lucky Hamster</p>
                <p className={styles.articleDataItem}>{article.date}</p>
              </div>
              <p className={`${styles['article-text']} ${styles.articleText}`}>
                {article.text}
              </p>
              <a
                href="https://twitter.com/HamsterLucky"
                target="_blank"
                className={styles.readAll}
                rel="noreferrer"
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
