import { TelegramButton } from '@/components/TelegramButton'
import { useTranslation } from 'react-i18next'

export const CTA = () => {
  const { t } = useTranslation(['home'])
  return (
    <div className="cta mt-[110px] flex flex-col items-center justify-center lg:mt-[86px]">
      <h2 className="mx-auto mb-[15px] max-w-[565px] text-center text-xl font-semibold leading-6 text-white lg:mb-[20px] lg:text-[25px] lg:font-bold lg:leading-[30px]">
        {t('firstSubscribers')}{' '}
        <span className="text-primary">{t('-25%')}</span>
        {t('firstSubscribersDeposit')}{' '}
        <span className="text-primary">{t('free')}</span>
      </h2>
      <TelegramButton />
    </div>
  )
}
