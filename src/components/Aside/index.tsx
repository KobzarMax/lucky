import arrow from '../../asset/arrowup.svg'
import { useTranslation } from 'react-i18next'
import { RoundsComponent } from '@/components/RoundsComponent'
import { PNLComponent } from '@/components/PNLComponent'
import Tabs from '@/components/Tab'

export const Aside = ({ asideView }) => {
  const { t } = useTranslation(['home'])
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
    <div className="game-aside absolute right-0 top-[65px] z-20 h-[715px] min-w-[302px] overflow-y-scroll px-5 pt-[31px]">
      <div className="relative z-20 mb-4 flex items-center justify-between">
        <p className="text-primary text-[15px] font-semibold leading-[18px]">
          {t('history')}
        </p>
        <button
          onClick={asideView}
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
