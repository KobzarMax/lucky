import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { durations } from '@/consts'
import clock from '@/asset/Clock.svg'
import caret from '@/asset/CaretDown.svg'
import styles from './index.module.css'

export const GameTimer: React.FC = () => {
  const { t } = useTranslation(['translations'])

  const [duration, setDuration] = useState<string>(durations[0])

  const toggleDuration = (index: number): void => {
    setDuration(durations[index])
  }

  return (
    <div className={styles['game-durations']}>
      <div className={styles.durationPicker}>
        <p className={styles.durationPicked}>
          <img src={clock} alt="clock" />
          {t(duration)}
        </p>
        <img
          className={`${styles.caret} duration-300`}
          src={caret}
          alt="caret"
        />
      </div>
      <div className={`${styles['durations']} w-full p-4`}>
        <div className={styles['durations-inner']}>
          {durations.map((dur: string, index: number) => (
            <p
              onClick={() => toggleDuration(index)}
              key={index}
              className={`${styles['duration-item']} ${
                duration === dur
                  ? styles.durationSelected
                  : styles.durationDefault
              }`}
            >
              {t(dur)}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
