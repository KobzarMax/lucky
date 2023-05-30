import { useTranslation } from 'react-i18next'
import { CountDown } from '../Countdown'

export const Timer = () => {
  const { t } = useTranslation(['translations'])
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
      <CountDown />
    </div>
  )
}
