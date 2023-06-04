import React from 'react'
import arrow from '../../asset/arrowup.svg'
import { useTranslation } from 'react-i18next'
import { RoundsComponent } from '@/components/RoundsComponent'
import { PNLComponent } from '@/components/PNLComponent'
import Tabs from '@/components/Tab'

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
      className={`${
        asideView === true ? 'active' : ''
      } game-aside absolute right-0 top-[65px] z-20 h-full min-h-[100vh] min-w-[302px] overflow-y-scroll px-5 pt-[31px]`}
    >
      <div className="relative z-20 mb-4 flex items-center justify-between">
        <p className="text-[15px] font-semibold leading-[18px] text-primary">
          {t('history')}
        </p>
        <button
          onClick={toggleView}
          className="flex items-center justify-center gap-[5px] text-[13px] leading-4 text-white"
        >
          {t('close')} <img className="rotate-90" src={arrow} alt="arrow" />
        </button>
      </div>
      <div className="relative z-20">
        <Tabs tabs={tabs} />
      </div>
    </div>
  )
}
