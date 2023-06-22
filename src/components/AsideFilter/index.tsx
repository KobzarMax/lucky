import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './AsideFilter.module.css'
import { FilterComponentProps, FilterOption } from './asideFilter'
import classNames from 'classnames'

const FilterComponent: React.FC<FilterComponentProps> = ({
  onFilterChange
}) => {
  const { t } = useTranslation(['translations'])
  const [activeFilter, setActiveFilter] = useState<FilterOption>('all')

  const handleFilterChange = (filter: FilterOption) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  const allTabClass = classNames(styles.asideFilterButton, {
    'bg-primary': activeFilter === 'all'
  })

  const winnedTabClass = classNames(styles.asideFilterButton, {
    'bg-primary': activeFilter === 'winned'
  })

  const losedTabClass = classNames(styles.asideFilterButton, {
    'bg-primary': activeFilter === 'losed'
  })

  return (
    <div className={styles.asideFilter}>
      <button onClick={() => handleFilterChange('all')} className={allTabClass}>
        {t('all')}
      </button>
      <button
        onClick={() => handleFilterChange('winned')}
        className={winnedTabClass}
      >
        {t('winned')}
      </button>
      <button
        onClick={() => handleFilterChange('losed')}
        className={losedTabClass}
      >
        {t('losed')}
      </button>
    </div>
  )
}

export default FilterComponent
