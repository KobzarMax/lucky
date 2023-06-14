import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import MobileDetect from 'mobile-detect';

const Rules: FC = () => {
  const { t } = useTranslation(['translations'])
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    const calculateHeight = () => {
      const windowHeight = window.innerHeight
      const md = new MobileDetect(window.navigator.userAgent);
      const isMobile = md.mobile();
      let calculatedHeight = windowHeight - 250;

      if (isMobile) {
        calculatedHeight -= 100; 
      }
      setHeight(calculatedHeight)
    }

    calculateHeight()

    window.addEventListener('resize', calculateHeight)

    return () => {
      window.removeEventListener('resize', calculateHeight)
    }
  }, [])

  return (
    <div className="min-h-[100vh] pt-[90px]">
      <div className="mx-auto max-w-[765px] pl-[13px] pr-3 lg:px-0">
        <h1 className="mb-[15px] text-center text-[25px] font-semibold uppercase leading-[30px] text-white">
          {t('rulesTitle')}
        </h1>

        <div
          style={{ height: `${height}px` }}
          className={`rules-text-wrapper overflow-y-auto`}
        >
          <p className="mb-[30px] text-[15px] leading-[18px] text-white">
            {t('rulesSubtitle')}
          </p>
          <p className="mb-2.5 text-[15px] font-medium leading-[18px] text-[#1B6AF5]">
            {t('basicRules')}
          </p>
          <p className="mb-4 text-[15px] leading-[18px] text-white">
            {t('basicRules11')}
          </p>
          <p className="mb-4 text-[15px] leading-[18px] text-white">
            {t('basicRules12')}
          </p>
          <p className="mb-4 text-[15px] leading-[18px] text-white">
            {t('basicRules13')}
          </p>
          <p className="mb-2.5 text-[15px] font-medium leading-[18px] text-[#1B6AF5]">
            {t('rightsTitle')}
          </p>
          <p className="mb-4 text-[15px] leading-[18px] text-white">
            {t('rights21')}
          </p>
          <p className="mb-4 text-[15px] leading-[18px] text-white">
            {t('rights22')}
          </p>
          <p className="mb-4 text-[15px] leading-[18px] text-white">
            {t('rights23')}
          </p>
          <p className="mb-2.5 text-[15px] font-medium leading-[18px] text-[#1B6AF5]">
            {t('confTitle')}
          </p>
          <p className="mb-4 text-[15px] leading-[18px] text-white">
            {t('rights21')}
          </p>
          <p className="mb-4 text-[15px] leading-[18px] text-white">
            {t('rights22')}
          </p>
          <p className="mb-4 text-[15px] leading-[18px] text-white">
            {t('rights23')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Rules
