import React from 'react'
import arrow from '@/asset/arrowup.svg'
import { useTranslation } from 'react-i18next'
import { RoundsComponent } from '@/components/RoundsComponent'
import { PNLComponent } from '@/components/PNLComponent'
import Tabs from '@/components/Tab'
import styles from './Aside.module.css'

interface AsideProps {
  toggleView: () => void
  asideView: boolean
}

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

  return (
    <div
      className={`${styles.asideView} ${styles.gameAside} ${
        asideView ? styles.gameAsideActive : ''
      }`}
    >
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
