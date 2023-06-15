import { useTranslation } from 'react-i18next'
import { CountDown } from '@/components/Countdown'
import styles from './index.module.css'
import React from "react";

export const Timer: React.FC = () => {
  const { t } = useTranslation(['translations'])

  return (
    <div className={styles.timerWrap}>
      <p className={styles.gameStartsIn}>{t('gameStartsIn')}</p>
      <CountDown />
    </div>
  )
}
