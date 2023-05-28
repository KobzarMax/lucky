import React, { useState } from 'react'

type FilterOption = 'all' | 'winned' | 'losed'

type FilterComponentProps = {
  onFilterChange: (filter: FilterOption) => void
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  onFilterChange
}) => {
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
        All
      </button>
      <button
        onClick={() => handleFilterChange('winned')}
        className={`flex w-full items-center justify-center rounded-[30px] py-[7.5px] text-xs font-semibold leading-[15px] text-white ${
          activeFilter === 'winned' ? 'bg-primary' : ''
        }`}
      >
        Winned
      </button>
      <button
        onClick={() => handleFilterChange('losed')}
        className={`flex w-full items-center justify-center rounded-[30px] py-[7.5px] text-xs font-semibold leading-[15px] text-white ${
          activeFilter === 'losed' ? 'bg-primary' : ''
        }`}
      >
        Losed
      </button>
    </div>
  )
}

export default FilterComponent
