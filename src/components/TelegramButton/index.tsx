import { useTranslation } from 'react-i18next'
import React from 'react'
import { telegramLink } from '@/images'
import classNames from 'classnames'
import styles from './TelegramButton.module.css'

export const TelegramButton: React.FC = () => {
  const { t } = useTranslation(['translations'])

  const linkClasses = classNames(styles['telegram-link'], styles.telegramLink)

  return (
    <a
      href="https://t.me/luckyham"
      target="_blank"
      className={linkClasses}
      rel="noreferrer"
    >
      {t('ourTelegram')} <img src={telegramLink} alt="telegram" />
    </a>
  )
}
