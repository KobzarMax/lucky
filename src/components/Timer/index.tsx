import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const Timer = () => {
  const { t } = useTranslation(['home'])
  const startDate = new Date('07/01/2023')
  const [countdownDate] = useState(startDate)
  const [remainingTime, setRemainingTime] = useState(
    getRemainingTime(countdownDate)
  )

  useEffect(() => {
    const timer = setInterval(() => {
      const newRemainingTime = getRemainingTime(countdownDate)
      setRemainingTime(newRemainingTime)

      if (newRemainingTime.total <= 0) {
        clearInterval(timer)
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [countdownDate])

  function getRemainingTime(endDate) {
    const total = Date.parse(endDate) - Date.now()
    const seconds = 60
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    return { total, days, hours, minutes, seconds }
  }

  function calculateTrailLength(unit, totalDuration) {
    const remainingTimeValue = remainingTime[unit]
    const trailLength =
      ((totalDuration - remainingTimeValue) / totalDuration) * 100
    return trailLength.toFixed(2)
  }

  const totalDays = 24 * 60 * 60 // Assuming 24 hours per day
  const totalHours = 60 * 60 // Assuming 60 minutes per hour

  return (
    <div className="timer relative z-10 mr-[30px] mt-[269px] lg:absolute lg:right-[47px] lg:top-[255px] lg:mr-0 lg:mt-0">
      <p className="mb-2.5 text-center text-[15px] leading-[18px] text-white">
        {t('gameStartsIn')}
      </p>
      <div className="flex items-center justify-center gap-2.5">
        <CountdownCircleTimer
          isPlaying
          duration={remainingTime.days * 60 * 60 * 24}
          colors={[['#FF1B5E']]}
          trailColor={`conic-gradient(#1B1B1B80 ${calculateTrailLength(
            'days',
            totalDays
          )}%, transparent 0%)`}
          strokeWidth={6}
          size={80}
          onComplete={() => {
            return { shouldRepeat: true, delay: 1 } // repeat animation in 1 second
          }}
        >
          {({ remainingTime }) => (
            <div className="timer-wrapper">
              <div className="timer-text flex flex-col items-center justify-center">
                <span className="text-primary text-[25px] font-semibold leading-[30px]">
                  {(remainingTime / 60 / 60 / 24).toString().split('.')[0]}
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
          duration={remainingTime.hours * 60 * 60}
          colors={[['#FF1B5E']]}
          trailColor={`conic-gradient(#1B1B1B80 ${calculateTrailLength(
            'hours',
            totalHours
          )}%, transparent 0%)`}
          strokeWidth={6}
          size={80}
          onComplete={() => {
            return { shouldRepeat: true, delay: 1 } // repeat animation in 1 second
          }}
        >
          {({ remainingTime }) => (
            <div className="timer-wrapper">
              <div className="timer-text flex flex-col items-center justify-center">
                <span className="text-primary text-[25px] font-semibold leading-[30px]">
                  {(remainingTime / 60 / 60).toString().split('.')[0]}
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
          duration={remainingTime.minutes * 60}
          colors={[['#FF1B5E']]}
          trailColor={`conic-gradient(#1B1B1B80 ${calculateTrailLength(
            'minutes',
            60
          )}%, transparent 0%)`}
          strokeWidth={6}
          size={80}
          onComplete={() => {
            return { shouldRepeat: true, delay: 1 } // repeat animation in 1 second
          }}
        >
          {({ remainingTime }) => (
            <div className="timer-wrapper">
              <div className="timer-text flex flex-col items-center justify-center">
                <span className="text-primary text-[25px] font-semibold leading-[30px]">
                  {(remainingTime / 60).toString().split('.')[0]}
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
          duration={remainingTime.seconds}
          colors={[['#FF1B5E']]}
          trailColor={`#1B1B1B80 ${calculateTrailLength('seconds', 60)}%`}
          strokeWidth={6}
          size={80}
          onComplete={() => {
            return { shouldRepeat: true, delay: 1 } // repeat animation in 1 second
          }}
        >
          {({ remainingTime }) => (
            <div className="timer-wrapper">
              <div className="timer-text flex flex-col items-center justify-center">
                <span className="text-primary text-[25px] font-semibold leading-[30px]">
                  {remainingTime.toString().split('.')[0]}
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
