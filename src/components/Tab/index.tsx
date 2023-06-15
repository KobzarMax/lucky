import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'

type Tab = {
  id: string
  label: string
  component: React.ReactNode
}

type TabsProps = {
  tabs: Tab[]
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id)
  const { t } = useTranslation(['translations'])

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`${styles.tabIem} ${
              activeTab === tab.id ? 'bg-primary' : ''
            }`}
          >
            {t(tab.label)}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            style={{ display: activeTab === tab.id ? 'block' : 'none' }}
          >
            {tab.component}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
