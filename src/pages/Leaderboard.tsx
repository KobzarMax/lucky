import { LeaderTable } from '@/components/LeaderTable'
import { TopPlaces } from '@/components/TopPlaces'
import { useTranslation } from 'react-i18next'
import React from 'react'
import styles from '@/components/index.module.css'

interface LeaderboardProps {
  isMobile?: boolean
}

const Leaderboard: React.FC<LeaderboardProps> = ({ isMobile }) => {
  const { t } = useTranslation(['translations'])
  return (
    <div className={styles.leaderboardWrap}>
      <div className={styles.leaderboardInner}>
        <h1 className={styles.leaderboardTitle}>{t('leaderboard')}</h1>
        <TopPlaces />
        <LeaderTable isMobile={isMobile} />
      </div>
    </div>
  )
}

export default Leaderboard
