import React from 'react'
import classNames from 'classnames'
import { TelegramButton } from '@/components/TelegramButton'
import { useTranslation } from 'react-i18next'
import styles from './CTA.module.css'

export const CTA: React.FC = () => {
  const { t } = useTranslation(['translations'])

  const ctaClasses = classNames(styles.cta, styles.ctaWrapper)
  const ctaTitleClasses = classNames(styles.ctaTitle, 'text-primary')

  return (
    <div className={ctaClasses}>
      <h2 className={ctaTitleClasses}>
        {t('firstSubscribers')} <span>{t('bonus')}</span>{' '}
        {t('firstSubscribersDeposit')} !
      </h2>
      <TelegramButton />
    </div>
  )
}
