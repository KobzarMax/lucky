
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useTranslation } from 'react-i18next'
import { CountDown } from '../Countdown'

import { useCountdown } from 'hooks/useCountdown'

const minuteSeconds = 60
const hourSeconds = 3600
const daySeconds = 86400

export const Timer = () => {

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

  console.log('TIMER', days, hours, minutes, seconds)
  return (
    <div className="timer relative z-10 mr-[30px] mt-[269px] lg:absolute lg:right-[47px] lg:top-[255px] lg:mr-0 lg:mt-0">
      <p className="mb-2.5 text-center text-[15px] leading-[18px] text-white">
        {t('gameStartsIn')}
      </p>

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
                <span className="text-primary text-[25px] font-semibold leading-[30px]">
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
                <span className="text-primary text-[25px] font-semibold leading-[30px]">
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
                <span className="text-primary text-[25px] font-semibold leading-[30px]">
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
                <span className="text-primary text-[25px] font-semibold leading-[30px]">
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
    </div>
  )
}
