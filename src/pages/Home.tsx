import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import illustration from '../asset/illustration.png'
import LatestGames from 'components/LatestGames'
import { HowItWorks } from 'components/HowItWorks'
import { EarnPartner } from 'components/EarnPartner'
import { CTA } from 'components/CTA'
import { News } from 'components/News'
import { FAQ } from 'components/FAQ'

function Home() {
  const { t } = useTranslation(['home'])
  const [days, setDays] = useState(20)
  const [hours, setHours] = useState(8)
  const [minutes, setMinutes] = useState(5)

  useEffect(() => {
    const timer = setInterval(() => {
      if (minutes > 0) {
        setMinutes(minutes - 1)
      } else if (hours > 0) {
        setHours(hours - 1)
        setMinutes(59)
      } else if (days > 0) {
        setDays(days - 1)
        setHours(23)
        setMinutes(59)
      }
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [days, hours, minutes])
  return (
    <div className="relative overflow-x-hidden px-[78px]">
      <div className="flex items-stretch justify-between">
        <div className="mt-[254px] w-full max-w-[665px]">
          <h1
            className="text-w mb-[15px] text-[40px] font-bold leading-[49px] text-white
          "
          >
            <span className="text-primary">{t('luckyHamster')}</span> -{' '}
            {t('playForFunEarnForProfit')}
          </h1>
          <p className="mb-[30px] text-[15px] leading-[18px] text-white">
            {t('homeSubtitle')}
          </p>
          <div className="flex items-center justify-start gap-[11px]">
            <button className="play-now flex items-center justify-center px-[64.5px] py-[15px] text-[15px] font-semibold leading-[18px] text-white">
              {t('playNow')}
            </button>
            <button className="documentation flex items-center justify-center px-[13.5px] py-[15px] text-[15px] font-semibold leading-[18px] text-white">
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
          <div className="timer absolute right-[47px] top-[255px] z-10">
            <p className="mb-2.5 text-center text-[15px] leading-[18px] text-white">
              {t('gameStartsIn')}
            </p>
            <div className="flex items-center justify-center gap-2.5">
              <div className="circle-border box-border flex h-[70px] w-[70px] rotate-45 items-center justify-center rounded-full border-[5px] border-b-primary border-l-[#1B1B1B80] border-r-primary border-t-[#1B1B1B80] bg-transparent">
                <div className="z-10 flex h-[60px] w-[60px] -rotate-45 flex-col items-center justify-center rounded-full bg-transparent text-[13px] leading-4 text-white">
                  <span className="text-[25px] font-semibold leading-[30px] text-primary">
                    {days}
                  </span>
                  {t('days')}
                </div>
              </div>
              <div className="circle-border box-border flex h-[70px] w-[70px] -rotate-45 items-center justify-center rounded-full border-[5px] border-primary border-r-[#1B1B1B80] bg-transparent">
                <div className="z-10 flex h-[60px] w-[60px] rotate-45 flex-col items-center justify-center rounded-full bg-transparent text-[13px] leading-4 text-white">
                  <span className="text-[25px] font-semibold leading-[30px] text-primary">
                    {hours}
                  </span>
                  {t('hours')}
                </div>
              </div>
              <div className="circle-border box-border flex h-[70px] w-[70px] -rotate-45 items-center justify-center rounded-full border-[5px] border-[#1B1B1B80] border-b-primary bg-transparent">
                <div className="z-10 flex h-[60px] w-[60px] rotate-45 flex-col items-center justify-center rounded-full bg-transparent text-[13px] leading-4 text-white">
                  <span className="text-[25px] font-semibold leading-[30px] text-primary">
                    {minutes}
                  </span>
                  {t('minutes')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LatestGames />
      <HowItWorks />
      <EarnPartner />
      <CTA />
      <News />
      <FAQ />
    </div>
  )
}

export default Home
