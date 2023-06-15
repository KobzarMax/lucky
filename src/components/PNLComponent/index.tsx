import { useTranslation } from 'react-i18next'
import React from 'react'

export const PNLComponent: React.FC = () => {
  const { t } = useTranslation(['translations'])
  return (
    <div className="mt-[108px]">
      <div className="flex items-center justify-start gap-[15px]">
        <div className="flex h-20 w-20 rotate-45  items-center justify-center rounded-full border-[5px] border-b-primary border-l-primary border-r-dark_green border-t-dark_green">
          <div className="flex -rotate-45 flex-col items-center justify-center">
            <p className="text-xs font-semibold leading-[15px] text-white">
              {t('won')}
            </p>
            <p className="text-[15px] font-semibold leading-[18px] text-white">
              74/150
            </p>
            <p className="text-[10px] leading-3 text-[#797979]">49.33%</p>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold leading-[15px] text-[#797979]">
            {t('notResults')}
          </p>
          <p className="text-[15px] font-semibold leading-[18px] text-primary">
            -0.1270 BNB
          </p>
          <p className="text-[10px] leading-3 text-[#797979]">-$38.75</p>
        </div>
      </div>
      <div className="mb-2.5 mt-[30px]">
        <p className="text-xs font-semibold leading-[15px] text-[#797979]">
          {t('averageReturnRound')}
        </p>
        <p className="text-[15px] font-semibold leading-[18px] text-primary">
          -0.0008 BNB
        </p>
        <p className="text-[10px] leading-3 text-[#797979]">-0.26</p>
      </div>
      <div className="mb-2.5">
        <p className="text-xs font-semibold leading-[15px] text-[#797979]">
          {t('bestRound')}: #166178
        </p>
        <p className="text-[15px] font-semibold leading-[18px] text-dark_green">
          +0.0191 BNB{' '}
          <span className="text-[10px] leading-3 text-[#797979]">(3.49x)</span>
        </p>
        <p className="text-[10px] leading-3 text-[#797979]">$5.83</p>
      </div>
      <div className="mb-[15px] border-b border-[#363636] pb-[15px]">
        <p className="text-xs font-semibold leading-[15px] text-[#797979]">
          {t('averagePositionEnteredRound')}
        </p>
        <p className="text-[15px] font-semibold leading-[18px] text-white">
          0.00053 BNB
        </p>
        <p className="text-[10px] leading-3 text-[#797979]">1.62</p>
      </div>
      <div>
        <p className="mb-2.5 text-xs font-semibold leading-[15px] text-[#797979]">
          {t('won')}
        </p>
        <div className="mb-2.5 flex items-center justify-start gap-[60px]">
          <div>
            <p className="mb-[3px] text-[15px] font-semibold lowercase leading-[18px] text-dark_green">
              74 {t('rounds')}
            </p>
            <p className="text-[10px] leading-3 text-[#797979]">49.33%</p>
          </div>
          <div>
            <p className="mb-[3px] text-[15px] font-semibold leading-[18px] text-dark_green">
              +0.3220 BNB
            </p>
            <p className="text-[10px] leading-3 text-[#797979]">$98.30</p>
          </div>
        </div>
        <p className="mb-2.5 text-xs font-semibold leading-[15px] text-[#797979]">
          {t('lost')}
        </p>
        <div className="flex items-center justify-start gap-[60px]">
          <div>
            <p className="mb-[3px] text-[15px] font-semibold lowercase leading-[18px] text-primary">
              76 {t('rounds')}
            </p>
            <p className="text-[10px] leading-3 text-[#797979]">49.33%</p>
          </div>
          <div>
            <p className="mb-[3px] text-[15px] font-semibold leading-[18px] text-primary">
              -0.4490 BNB
            </p>
            <p className="text-[10px] leading-3 text-[#797979]">$98.30</p>
          </div>
        </div>
      </div>
    </div>
  )
}
