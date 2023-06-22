import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import clock from '@/asset/Clock.svg'
import caret from '@/asset/CaretDown.svg'
import classNames from 'classnames'
import styles from './GameTimer.module.css'
import { durations } from './gameTimerConsts'

export const GameTimer: React.FC = () => {
  const { t } = useTranslation(['translations'])

  const [duration, setDuration] = useState<string>(durations[0])

  const toggleDuration = (index: number): void => {
    setDuration(durations[index])
  }

  const gameDurationsClass = styles['game-durations']
  const durationPickerClass = styles.durationPicker
  const durationPickedClass = styles.durationPicked
  const caretClass = classNames(styles.caret, 'duration-300')
  const durationsClass = `${styles['durations']} w-full p-4`
  const durationsInnerClass = styles['durations-inner']

  return (
    <div className={gameDurationsClass}>
      <div className={durationPickerClass}>
        <p className={durationPickedClass}>
          <img src={clock} alt="clock" />
          {t(duration)}
        </p>
        <img className={caretClass} src={caret} alt="caret" />
      </div>
      <div className={durationsClass}>
        <div className={durationsInnerClass}>
          {durations.map((dur: string, index: number) => (
            <p
              onClick={() => toggleDuration(index)}
              key={index}
              className={classNames(styles['duration-item'], {
                [styles.durationSelected]: duration === dur,
                [styles.durationDefault]: duration !== dur
              })}
            >
              {t(dur)}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
