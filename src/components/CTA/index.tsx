import { TelegramButton } from '@/components/TelegramButton'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'

export const CTA = () => {
  const { t } = useTranslation(['translations'])
  return (
    <div className={`${styles['cta']} ${styles.ctaWrapper}`}>
      <h2 className={styles.ctaTitle}>
        {t('firstSubscribers')}{' '}
        <span className="text-primary">{t('bonus')}</span>{' '}
        {t('firstSubscribersDeposit')} !
      </h2>
      <TelegramButton />
    </div>
  )
}
