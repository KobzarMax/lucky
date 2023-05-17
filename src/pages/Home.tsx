import { useTranslation } from 'react-i18next'
import illustration from '../asset/illustration.png'
import LatestGames from 'components/LatestGames'

function Home() {
  const { t } = useTranslation(['home'])
  return (
    <div className="relative overflow-hidden px-[38px]">
      <div className="flex items-start justify-between">
        <div className="mt-[174px] max-w-[665px]">
          <h1
            className="leading-49px text-w mb-[15px] text-[40px] font-bold text-white
          "
          >
            <span className="text-primary">{t('luckyHamster')}</span> -{' '}
            {t('playForFunEarnForProfit')}
          </h1>
          <p className="mb-[30px] text-[15px] leading-[18px] text-white">
            {t('homeSubtitle')}
          </p>
          <div className="flex items-center justify-start gap-[11px]">
            <button className="play-now flex items-center justify-center px-[64.5px] py-[15px] text-[15px] font-semibold leading-[18px]">
              {t('playNow')}
            </button>
            <button className="documentation flex items-center justify-center px-[13.5px] py-[15px] text-[15px] font-semibold leading-[18px]">
              {t('documentation')}
            </button>
          </div>
        </div>
        <div className="relative w-full">
          <img
            className="absolute right-0 top-0 w-full"
            src={illustration}
            alt="lucky hamster illustrations"
          />
          <div className="timer">
            <p>{t('gameStartsIn')}</p>
            <div>
              <div>
                <span>20</span>
                {t('days')}
              </div>
              <div>
                <span>8</span>
                {t('hours')}
              </div>
              <div>
                <span>5</span>
                {t('minutes')}
              </div>
            </div>
          </div>
        </div>
      </div>
      <LatestGames />
    </div>
  )
}

export default Home
