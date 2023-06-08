import React, { useState } from 'react'

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

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <div>
      <div className="mb-[15px] flex w-full items-center justify-center rounded-[30px] bg-[#38383899]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex w-full items-center justify-center rounded-[30px] py-[7.5px] text-xs font-semibold leading-[15px] text-white ${
              activeTab === tab.id ? 'bg-primary' : ''
            }`}
          >
            {tab.label}
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
