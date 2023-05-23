import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const Timer = () => {
  const { t } = useTranslation(['home'])
  const [countdownDate] = useState(getRandomFutureDate())
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

  function getRandomFutureDate() {
    const now = new Date()
    const futureDate = new Date(now.getTime() + Math.random() * 86400000 * 7) // Add random number of milliseconds within 7 days
    return futureDate
  }

  function getRemainingTime(endDate) {
    const total = Date.parse(endDate) - Date.now()
    const seconds = Math.floor((total / 1000) % 60)
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    return { total, days, hours, minutes, seconds }
  }

  return (
    <div className="timer relative z-10 mr-[30px] mt-[269px] lg:absolute lg:right-[47px] lg:top-[255px] lg:mr-0 lg:mt-0">
      <p className="mb-2.5 text-center text-[15px] leading-[18px] text-white">
        {t('gameStartsIn')}
      </p>
      <div className="flex items-center justify-center gap-2.5">
        <CountdownCircleTimer
          isPlaying
          duration={remainingTime.days}
          colors={[['#FF1B5E']]}
          trailColor={'#1B1B1B80'}
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
          duration={remainingTime.hours}
          colors={[['#FF1B5E']]}
          trailColor={'#1B1B1B80'}
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
          duration={remainingTime.minutes}
          colors={[['#FF1B5E']]}
          trailColor={'#1B1B1B80'}
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
          trailColor={'#1B1B1B80'}
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
