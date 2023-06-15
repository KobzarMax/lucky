import { useCountdown } from '@/hooks/useCountdown'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'
import React from 'react'

const minuteSeconds = 60
const hourSeconds = 3600
const daySeconds = 86400

export const CountDown: React.FC = () => {
  const { t } = useTranslation(['translations'])
  const [days, hours, minutes, seconds] = useCountdown('07/01/2023')
  const daysDuration = days * daySeconds

  const stratTime = Date.now()
  const targetDate = new Date('07/01/2023')

  const diffTime = Math.abs((targetDate as any) - stratTime) / 1000

  const endTime = stratTime + diffTime

  const remainingTime = endTime - stratTime

  const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0
  const getTimeMinutes = (time: number) =>
    ((time % hourSeconds) / minuteSeconds) | 0
  const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0
  const getTimeDays = (time: number) => (time / daySeconds) | 0

  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        isPlaying
        duration={daysDuration}
        initialRemainingTime={remainingTime}
        colors={'#FF1B5E'}
        trailColor={'#1b1b1b80'}
        strokeWidth={6}
        size={80}
      >
        {({ elapsedTime }) => (
          <div className="timer-wrapper">
            <div className={styles.timerText}>
              <span className={styles.timerDurationNumber}>
                {getTimeDays(daysDuration - elapsedTime)}
              </span>
              <span className={styles.timerDuration}>{t('days')}</span>
            </div>
          </div>
        )}
      </CountdownCircleTimer>

      <CountdownCircleTimer
        isPlaying
        duration={daySeconds}
        colors={'#FF1B5E'}
        trailColor={'#1b1b1b80'}
        initialRemainingTime={remainingTime % daySeconds}
        strokeWidth={6}
        size={80}
      >
        {({ elapsedTime }) => (
          <div>
            <div className={styles.timerText}>
              <span className={styles.timerDurationNumber}>
                {getTimeHours(daySeconds - elapsedTime)}
              </span>
              <span className={styles.timerDuration}>{t('hours')}</span>
            </div>
          </div>
        )}
      </CountdownCircleTimer>

      <CountdownCircleTimer
        isPlaying
        duration={hourSeconds}
        colors={'#FF1B5E'}
        trailColor={'#1b1b1b80'}
        initialRemainingTime={remainingTime % hourSeconds}
        strokeWidth={6}
        size={80}
      >
        {({ elapsedTime }) => (
          <div>
            <div className={styles.timerText}>
              <span className={styles.timerDurationNumber}>
                {getTimeMinutes(hourSeconds - elapsedTime)}
              </span>
              <span className={styles.timerDuration}>{t('minutes')}</span>
            </div>
          </div>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        isPlaying
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        colors={'#FF1B5E'}
        trailColor={'#1b1b1b80'}
        strokeWidth={6}
        size={80}
        onComplete={() => {
          return { shouldRepeat: true, delay: 1 } // repeat animation in 1 second
        }}
      >
        {({ elapsedTime }) => (
          <div>
            <div className={styles.timerText}>
              <span className={styles.timerDurationNumber}>
                {getTimeSeconds(elapsedTime)}
              </span>
              <span className={styles.timerDuration}>{t('seconds')}</span>
            </div>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  )
}
