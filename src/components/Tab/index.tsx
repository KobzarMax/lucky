import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import styles from './Tab.module.css'
import { TabsProps } from './tab'

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id)
  const { t } = useTranslation(['translations'])

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  const tabButtonClasses = (tabId: string) =>
    classNames(styles.tabItem, {
      [styles.active]: activeTab === tabId
    })

  const tabContentStyles = (tabId: string) => ({
    display: activeTab === tabId ? 'block' : 'none'
  })

  return (
    <div>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={tabButtonClasses(tab.id)}
          >
            {t(tab.label)}
          </button>
        ))}
      </div>
      <div>
        {tabs.map((tab) => (
          <div key={tab.id} style={tabContentStyles(tab.id)}>
            {tab.component}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tabs
