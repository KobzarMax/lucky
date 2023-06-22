import { useTranslation } from 'react-i18next'
import { AsideRound } from '@/components/AsideRound'
import React, { useState } from 'react'
import classNames from 'classnames'
import FilterComponent from '@/components/AsideFilter'
import styles from './RoundsComponent.module.css'
import { rounds } from './roundsConsts'

export const RoundsComponent: React.FC = () => {
  const { t } = useTranslation(['translations'])

  const [activeFilter, setActiveFilter] = useState<string>('all')
  const filteredRounds = rounds.filter((round) => {
    if (activeFilter === 'all') {
      return true
    } else if (activeFilter === 'winned') {
      return round.history === 'win'
    } else if (activeFilter === 'losed') {
      return round.history === 'lose'
    }
    return true
  })

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter)
    // Add your logic here to handle the filter change, e.g., updating the data based on the filter selection.
  }

  const filterClass = classNames(styles.filter)
  const pxClass = classNames('px-[7px]')

  return (
    <div>
      <p className={filterClass}>{t('filter')}</p>
      <div className={pxClass}>
        <FilterComponent onFilterChange={handleFilterChange} />
      </div>
      <div>
        {filteredRounds.map((round, index) => (
          <AsideRound key={index} round={round} />
        ))}
      </div>
    </div>
  )
}
