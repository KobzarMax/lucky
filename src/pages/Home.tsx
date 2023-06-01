import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import illustration from '../asset/mobile-illlustration.png'
import mobileIllustration from '../asset/mobile-illlustration.png'
import LatestGames from '@/components/LatestGames'
import { HowItWorks } from '@/components/HowItWorks'
import { EarnPartner } from '@/components/EarnPartner'
import { CTA } from '@/components/CTA'
import { News } from '@/components/News'
import { FAQ } from '@/components/FAQ'
import { Timer } from '@/components/Timer'

interface HomeProps {
  isMobile: boolean
  onEarnPartnerInViewChange: (inView: boolean) => void
  onHowItWorksInViewChange: (inView: boolean) => void
}

function Home({
  isMobile,
  onEarnPartnerInViewChange,
  onHowItWorksInViewChange
}: HomeProps) {
  const { t } = useTranslation(['translations'])

  const handleEarnPartnerInViewChange = (inView: boolean) => {
    // Pass the inView value to App.tsx or perform any other logic
    onEarnPartnerInViewChange(inView)
  }

  const handleHowItWorksInViewChange = (inView: boolean) => {
    // Pass the inView value to App.tsx or perform any other logic
    onHowItWorksInViewChange(inView)
  }

  return (
    <div className="relative overflow-x-hidden pl-[13px] pr-[12px] lg:px-[78px]">
      <div className="flex flex-col items-stretch justify-between lg:flex-row">
        <div className="relative z-10 mt-[157px] w-full max-w-[665px] lg:mt-[254px]">
          <h1 className="text-w mb-2.5 text-[30px] font-bold leading-[37px] text-white lg:mb-[15px] lg:text-[40px] lg:leading-[49px]">
            <span className="text-primary">{t('luckyHamster')}</span> -{' '}
            {t('playForFunEarnForProfit')}
          </h1>
          <p className="mb-[15px] text-[15px] leading-[18px] text-white lg:mb-[30px]">
            {t('homeSubtitle')}
          </p>
          <div className="flex flex-col items-start justify-start gap-[11px] lg:flex-row lg:items-center">
            <Link
              to={'game'}
              className="play-now flex items-center justify-center px-[64.5px] py-[15px] text-[15px] font-semibold leading-[18px] text-white"
            >
              {t('playNow')}
            </Link>
            <Link
              to={'rules'}
              className="documentation flex items-center justify-center px-[13.5px] py-[15px] text-[15px] font-semibold leading-[18px] text-white"
            >
              {t('documentation')}
            </Link>
          </div>
        </div>
        <div className="relative w-[108%] lg:w-full">
          <img
            className="absolute right-[14px] top-[-128px] w-[108%] lg:right-0 lg:top-0 lg:w-full"
            src={isMobile ? mobileIllustration : illustration}
            alt="lucky hamster illustrations"
          />

          <Timer />
        </div>
      </div>
      <LatestGames />
      <HowItWorks onHowItWorksInViewChange={handleEarnPartnerInViewChange} />
      <EarnPartner onEarnPartnerInViewChange={handleHowItWorksInViewChange} />
      <CTA />
      <News />
      <FAQ />
    </div>
  )
}

export default Home
