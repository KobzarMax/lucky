import telegram from '../../asset/TelegramLinkLogo.svg'
import { useTranslation } from 'react-i18next'

export const TelegramButton = () => {
  const { t } = useTranslation(['home'])
  return (
    <a
      href="https://t.me/luckyham"
      target="_blank"
      className="telegram-link flex h-12 max-w-[200px] items-center justify-center gap-2.5 whitespace-nowrap px-[27.5px] py-[15px] text-[15px] font-semibold leading-[18px] text-white"
      rel="noreferrer"
    >
      {t('ourTelegram')} <img src={telegram} alt="telegram" />
    </a>
  )
}
