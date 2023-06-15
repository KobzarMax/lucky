import { LeaderTable } from '@/components/LeaderTable'
import { TopPlaces } from '@/components/TopPlaces'
import { useTranslation } from 'react-i18next'
import React from 'react'

interface LeaderboardProps {
  isMobile?: boolean
}

const Leaderboard: React.FC<LeaderboardProps> = ({ isMobile }) => {
  const { t } = useTranslation(['translations'])
  return (
    <div className="pt-[90px]">
      <div className="pl-[13px] pr-3 lg:px-[139px]">
        <h1 className="mb-[15px] text-center text-[25px] font-semibold uppercase leading-[30px] text-white lg:mb-[31px]">
          {t('leaderboard')}
        </h1>
        <TopPlaces />
        <LeaderTable isMobile={isMobile} />
      </div>
    </div>
  )
}

export default Leaderboard
