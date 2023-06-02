import react from 'react'
import { useCountdown } from '../../hooks/useCountdown'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useTranslation } from 'react-i18next'

const minuteSeconds = 60
const hourSeconds = 3600
const daySeconds = 86400

export const CountDown = () => {
  const { t } = useTranslation(['translations'])
  const [days, hours, minutes, seconds] = useCountdown('07/01/2023')
  const daysDuration = days * daySeconds

  const stratTime = Date.now()
  const targetDate = new Date('07/01/2023')

  const diffTime = Math.abs(targetDate - stratTime) / 1000

  const endTime = stratTime + diffTime

  const remainingTime = endTime - stratTime

  const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0
  const getTimeMinutes = (time: number) =>
    ((time % hourSeconds) / minuteSeconds) | 0
  const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0
  const getTimeDays = (time: number) => (time / daySeconds) | 0

  return (
    <div className="flex items-center justify-center gap-2.5">
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
            <div className="timer-text flex flex-col items-center justify-center">
              <span className="text-[25px] font-semibold leading-[30px] text-primary">
                {getTimeDays(daysDuration - elapsedTime)}
              </span>
              <span className="text-[13px] leading-4 text-white">
                {t('days')}
              </span>
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
          <div className="timer-wrapper">
            <div className="timer-text flex flex-col items-center justify-center">
              <span className="text-[25px] font-semibold leading-[30px] text-primary">
                {getTimeHours(daySeconds - elapsedTime)}
              </span>
              <span className="text-[13px] leading-4 text-white">
                {t('hours')}
              </span>
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
          <div className="timer-wrapper">
            <div className="timer-text flex flex-col items-center justify-center">
              <span className="text-[25px] font-semibold leading-[30px] text-primary">
                {getTimeMinutes(hourSeconds - elapsedTime)}
              </span>
              <span className="text-[13px] leading-4 text-white">
                {t('minutes')}
              </span>
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
          <div className="timer-wrapper">
            <div className="timer-text flex flex-col items-center justify-center">
              <span className="text-[25px] font-semibold leading-[30px] text-primary">
                {getTimeSeconds(elapsedTime)}
              </span>
              <span className="text-[13px] leading-4 text-white">
                {t('seconds')}
              </span>
            </div>
          </div>
        )}
      </CountdownCircleTimer>
    </div>
  )
}
