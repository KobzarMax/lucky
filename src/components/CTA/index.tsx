import { TelegramButton } from '@/components/TelegramButton'
import { useTranslation } from 'react-i18next'

export const CTA = () => {
  const { t } = useTranslation(['translations'])
  return (
    <div className="cta mx-[-13px] mt-[110px] flex flex-col items-center justify-center py-[60px] lg:mx-[-78px] lg:mt-[50px] lg:py-9">
      <h2 className="mx-auto mb-[15px] max-w-[565px] text-center text-xl font-semibold leading-6 text-white lg:mb-[20px] lg:text-[25px] lg:font-bold lg:leading-[30px]">
        {t('firstSubscribers')}{' '}
        <span className="text-primary">{t('bonus')}</span>{' '}
        {t('firstSubscribersDeposit')} !
      </h2>
      <TelegramButton />
    </div>
  )
}
