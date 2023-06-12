import { useTranslation } from 'react-i18next'

function Rules() {
  const { t } = useTranslation(['translations'])
  return (
    <div className="pt-[90px]">
      <div className="mx-auto max-w-[565px] pl-[13px] pr-3">
        <h1 className="mb-[15px] text-center text-[25px] font-semibold uppercase leading-[30px] text-white">
          {t('rulesTitle')}
        </h1>
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
      </div>
    </div>
  )
}

export default Rules
