import { TelegramButton } from 'components/TelegramButton'
import { useTranslation } from 'react-i18next'

export const CTA = () => {
  const { t } = useTranslation(['home'])
  return (
    <div className="cta mt-[86px] flex flex-col items-center justify-center">
      <h2 className="mx-auto mb-[20px] max-w-[565px] text-center text-[25px] font-bold leading-[30px] text-white">
        {t('firstSubscribers')}{' '}
        <span className="text-primary">{t('-25%')}</span>
        {t('firstSubscribersDeposit')}{' '}
        <span className="text-primary">{t('free')}</span>
      </h2>
      <TelegramButton />
    </div>
  )
}
