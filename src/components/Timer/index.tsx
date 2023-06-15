import { useTranslation } from 'react-i18next'
import { CountDown } from '@/components/Countdown'
import styles from './index.module.css'

export const Timer = () => {
  const { t } = useTranslation(['translations'])

  return (
    <div className={`${styles.timer} ${styles.timerWrap}`}>
      <p className={styles.gameStartsIn}>{t('gameStartsIn')}</p>
      <CountDown />
    </div>
  )
}
