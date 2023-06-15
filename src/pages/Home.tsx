import React from 'react'
import LatestGames from '@/components/LatestGames'
import { HowItWorks } from '@/components/HowItWorks'
import { EarnPartner } from '@/components/EarnPartner'
import { CTA } from '@/components/CTA'
import { News } from '@/components/News'
import { FAQ } from '@/components/FAQ'
import { Hero } from '@/components/Hero'
import 'flowbite'

type HomeProps = {
  onEarnPartnerInViewChange: (inView: boolean) => void
  onHowItWorksInViewChange: (inView: boolean) => void
}

const Home: React.FC<HomeProps> = ({
  onEarnPartnerInViewChange,
  onHowItWorksInViewChange
}) => {
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
      <Hero />
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
