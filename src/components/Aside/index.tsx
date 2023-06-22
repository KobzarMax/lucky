import React from 'react'
import { useTranslation } from 'react-i18next'
import { RoundsComponent } from '@/components/RoundsComponent'
import { PNLComponent } from '@/components/PNLComponent'
import Tabs from '@/components/Tab'
import classNames from 'classnames'
import styles from './Aside.module.css'
import { AsideProps } from './aside'
import { arrow } from '@/images'

export const Aside: React.FC<AsideProps> = ({ asideView, toggleView }) => {
  const { t } = useTranslation(['translations'])
  const tabs = [
    {
      id: 'rounds',
      label: 'Rounds',
      component: <RoundsComponent />
    },
    {
      id: 'pnl',
      label: 'PNL',
      component: <PNLComponent />
    }
  ]

  const asideViewClasses = classNames(styles.asideView, styles.gameAside, {
    [styles.gameAsideActive]: asideView
  })

  return (
    <div className={asideViewClasses}>
      <div className={styles.asideHead}>
        <p className={styles.history}>{t('history')}</p>
        <button onClick={toggleView} className={styles.toggleView}>
          {t('close')} <img className="rotate-90" src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="relative z-20">
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}
