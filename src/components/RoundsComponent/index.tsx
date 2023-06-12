import { useTranslation } from 'react-i18next'
import { AsideRound } from '@/components/AsideRound'
import { useState } from 'react'
import FilterComponent from '@/components/AsideFilter'

interface Round {
  roundID: string
  status: string
  history: string
  choice: string
  yourPosition: string
  yourWin: string
  sum: string
  lastPrice: string
  price: string
  priseFond: string
  up: string
  down: string
}

export const RoundsComponent = () => {
  const { t } = useTranslation(['translations'])
  const rounds: Round[] = [
    {
      roundID: '150,123',
      status: 'now',
      history: 'win',
      choice: 'down',
      yourPosition: '0.0090 BNB',
      yourWin: '+0.0058 BNB',
      sum: '0.0148 BNB',
      lastPrice: '$317.4411',
      price: '$317.2409',
      priseFond: '11.3535 BNB',
      up: '1.69x Payout | 6.7194 BNB',
      down: '2.45x Payout | 4.6360 BNB'
    },
    {
      roundID: '150,123',
      status: 'now',
      history: 'win',
      choice: 'down',
      yourPosition: '0.0090 BNB',
      yourWin: '+0.0058 BNB',
      sum: '0.0148 BNB',
      lastPrice: '$317.4411',
      price: '$317.2409',
      priseFond: '11.3535 BNB',
      up: '1.69x Payout | 6.7194 BNB',
      down: '2.45x Payout | 4.6360 BNB'
    },
    {
      roundID: '150,123',
      status: 'now',
      history: 'lose',
      choice: 'down',
      yourPosition: '0.0090 BNB',
      yourWin: '+0.0058 BNB',
      sum: '0.0148 BNB',
      lastPrice: '$317.4411',
      price: '$317.2409',
      priseFond: '11.3535 BNB',
      up: '1.69x Payout | 6.7194 BNB',
      down: '2.45x Payout | 4.6360 BNB'
    }
  ]
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

  return (
    <div>
      <p className="mb-[5px] px-[7px] text-[10px] leading-3 text-[#707070]">
        {t('filter')}
      </p>
      <div className="px-[7px]">
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
