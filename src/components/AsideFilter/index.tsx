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

  return (
    <div className={styles.asideFilter}>
      <button
        onClick={() => handleFilterChange('all')}
        className={classNames(styles.asideFilterButton, {
          [styles.bgPrimary]: activeFilter === 'all'
        })}
      >
        {t('all')}
      </button>
      <button
        onClick={() => handleFilterChange('winned')}
        className={classNames(styles.asideFilterButton, {
          [styles.bgPrimary]: activeFilter === 'winned'
        })}
      >
        {t('winned')}
      </button>
      <button
        onClick={() => handleFilterChange('losed')}
        className={classNames(styles.asideFilterButton, {
          [styles.bgPrimary]: activeFilter === 'losed'
        })}
      >
        {t('losed')}
      </button>
    </div>
  )
}

export default FilterComponent
