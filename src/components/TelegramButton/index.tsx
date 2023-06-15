import telegram from '../../asset/TelegramLinkLogo.svg'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'
import React from 'react'

export const TelegramButton: React.FC = () => {
  const { t } = useTranslation(['translations'])
  return (
    <a
      href="https://t.me/luckyham"
      target="_blank"
      className={`${styles['telegram-link']} ${styles.telegramLink}`}
      rel="noreferrer"
    >
      {t('ourTelegram')} <img src={telegram} alt="telegram" />
    </a>
  )
}
