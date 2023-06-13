import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

type FilterOption = 'all' | 'winned' | 'losed'

type FilterComponentProps = {
  onFilterChange: (filter: FilterOption) => void
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  onFilterChange
}) => {
  const { t } = useTranslation(['translations'])
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all')

  const handleFilterChange = (filter: FilterOption) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <div className="mb-[68px] flex w-full items-center justify-center gap-2.5 rounded-[30px] bg-[#38383899]">
      <button
        onClick={() => handleFilterChange('all')}
        className={`flex w-full items-center justify-center rounded-[30px] py-[7.5px] text-xs font-semibold leading-[15px] text-white ${
          activeFilter === 'all' ? 'bg-primary' : ''
        }`}
      >
        {t('all')}
      </button>
      <button
        onClick={() => handleFilterChange('winned')}
        className={`flex w-full items-center justify-center rounded-[30px] py-[7.5px] text-xs font-semibold leading-[15px] text-white ${
          activeFilter === 'winned' ? 'bg-primary' : ''
        }`}
      >
        {t('winned')}
      </button>
      <button
        onClick={() => handleFilterChange('losed')}
        className={`flex w-full items-center justify-center rounded-[30px] py-[7.5px] text-xs font-semibold leading-[15px] text-white ${
          activeFilter === 'losed' ? 'bg-primary' : ''
        }`}
      >
        {t('losed')}
      </button>
    </div>
  )
}

export default FilterComponent
