import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './AsideFilter.module.css'

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
    <div className={styles.asideFilter}>
      <button
        onClick={() => handleFilterChange('all')}
        className={` ${styles.asideFilterButton} ${
          activeFilter === 'all' ? 'bg-primary' : ''
        }`}
      >
        {t('all')}
      </button>
      <button
        onClick={() => handleFilterChange('winned')}
        className={`${styles.asideFilterButton} ${
          activeFilter === 'winned' ? 'bg-primary' : ''
        }`}
      >
        {t('winned')}
      </button>
      <button
        onClick={() => handleFilterChange('losed')}
        className={`${styles.asideFilterButton} ${
          activeFilter === 'losed' ? 'bg-primary' : ''
        }`}
      >
        {t('losed')}
      </button>
    </div>
  )
}

export default FilterComponent
