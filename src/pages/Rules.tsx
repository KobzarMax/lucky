import { useTranslation } from 'react-i18next'

function Rules() {
  const { t } = useTranslation(['translations'])
  return (
    <div className="min-h-[100vh] pt-[90px]">
      <div className="mx-auto max-w-[765px] pl-[13px] pr-3 lg:px-0">
        <h1 className="mb-[15px] text-center text-[25px] font-semibold uppercase leading-[30px] text-white">
          {t('rulesTitle')}
        </h1>
        <div className="rules-text-wrapper h-[50vh] overflow-y-auto lg:h-[580px]">
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
    </div>
  )
}

export default Rules
