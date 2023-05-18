import { useTranslation } from 'react-i18next'
import newsImage from '../../asset/news-bg.svg'
import arrow from '../../asset/arrowup.svg'

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
  return (
    <div className="mt-24">
      <h2 className="mb-[31px] text-center text-[25px] font-bold leading-[30px] text-white">
        {t('news')}
      </h2>
      <div className="flex items-center justify-center gap-9">
        {news.map((article, index) => (
          <div className="news-article h-[475px] w-[365px]" key={index}>
            <div>
              <img src={article.image} alt="article image" />
            </div>
            <div className="px-2.5 pb-[47px] pt-2.5">
              <p className="mb-[5px] text-[17px] font-bold leading-[21px] text-white">
                {article.title}
              </p>
              <div className="mb-[15px] flex items-center justify-between">
                <p className="text-[13px] leading-4 text-[#929292]">
                  {article.author}
                </p>
                <p className="text-[13px] leading-4 text-[#929292]">
                  {article.date}
                </p>
              </div>
              <p className="article-text mb-4 text-[15px] leading-[18px] text-white">
                {article.text}
              </p>
              <a
                href="#"
                className="text-primary flex items-center justify-start gap-[5px] text-[15px] leading-[18px]"
              >
                {t('readAll')} <img src={arrow} alt="arrow" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
