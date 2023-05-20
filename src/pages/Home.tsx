import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import illustration from '../asset/illustration.png'
import mobileIllustration from '../asset/mobile-illlustration.png'
import LatestGames from 'components/LatestGames'
import { HowItWorks } from 'components/HowItWorks'
import { EarnPartner } from 'components/EarnPartner'
import { CTA } from 'components/CTA'
import { News } from 'components/News'
import { FAQ } from 'components/FAQ'

function Home({ isMobile }) {
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
    <div className="relative overflow-x-hidden pl-[13px] pr-[12px] lg:px-[78px]">
      <div className="flex flex-col items-stretch justify-between lg:flex-row">
        <div className="relative z-10 mt-[157px] w-full max-w-[665px] lg:mt-[254px]">
          <h1
            className="text-w mb-2.5 text-[30px] font-bold leading-[37px] text-white lg:mb-[15px] lg:text-[40px] lg:leading-[49px]
          "
          >
            <span className="text-primary">{t('luckyHamster')}</span> -{' '}
            {t('playForFunEarnForProfit')}
          </h1>
          <p className="mb-[15px] text-[15px] leading-[18px] text-white lg:mb-[30px]">
            {t('homeSubtitle')}
          </p>
          <div className="flex flex-col items-start justify-start gap-[11px] lg:flex-row lg:items-center">
            <button className="play-now flex items-center justify-center px-[64.5px] py-[15px] text-[15px] font-semibold leading-[18px] text-white">
              {t('playNow')}
            </button>
            <button className="documentation flex items-center justify-center px-[13.5px] py-[15px] text-[15px] font-semibold leading-[18px] text-white">
              {t('documentation')}
            </button>
          </div>
        </div>
        <div className="relative w-[108%] lg:w-full">
          <img
            className="absolute right-[14px] top-[-128px] w-[108%] lg:right-0 lg:top-0 lg:w-full"
            src={isMobile ? mobileIllustration : illustration}
            alt="lucky hamster illustrations"
          />

          <div className="timer relative z-10 mr-[30px] mt-[269px] lg:absolute lg:right-[47px] lg:top-[255px] lg:mr-0 lg:mt-0">
            <p className="mb-2.5 text-center text-[15px] leading-[18px] text-white">
              {t('gameStartsIn')}
            </p>
            <div className="flex items-center justify-center gap-2.5">
              <div className="circle-border border-b-primary border-r-primary box-border flex h-[70px] w-[70px] rotate-45 items-center justify-center rounded-full border-[5px] border-l-[#1B1B1B80] border-t-[#1B1B1B80] bg-transparent">
                <div className="z-10 flex h-[60px] w-[60px] -rotate-45 flex-col items-center justify-center rounded-full bg-transparent text-[13px] leading-4 text-white">
                  <span className="text-primary text-[25px] font-semibold leading-[30px]">
                    {days}
                  </span>
                  {t('days')}
                </div>
              </div>
              <div className="circle-border border-primary box-border flex h-[70px] w-[70px] -rotate-45 items-center justify-center rounded-full border-[5px] border-r-[#1B1B1B80] bg-transparent">
                <div className="z-10 flex h-[60px] w-[60px] rotate-45 flex-col items-center justify-center rounded-full bg-transparent text-[13px] leading-4 text-white">
                  <span className="text-primary text-[25px] font-semibold leading-[30px]">
                    {hours}
                  </span>
                  {t('hours')}
                </div>
              </div>
              <div className="circle-border border-b-primary box-border flex h-[70px] w-[70px] -rotate-45 items-center justify-center rounded-full border-[5px] border-[#1B1B1B80] bg-transparent">
                <div className="z-10 flex h-[60px] w-[60px] rotate-45 flex-col items-center justify-center rounded-full bg-transparent text-[13px] leading-4 text-white">
                  <span className="text-primary text-[25px] font-semibold leading-[30px]">
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
