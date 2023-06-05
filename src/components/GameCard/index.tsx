import { useTranslation } from 'react-i18next'
import prohibit from '../../asset/Prohibit.svg'
import arrow from '../../asset/arrowup.svg'
import play from '../../asset/PlayCircle.svg'
import { useEffect, useState } from 'react'

interface GameData {
  status: string
  lastPrice: string
  fixedPrice: string
  presentPool: string
  gameID: string
}

interface GameCardProps {
  cardData: GameData
}

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

export const GameCard: React.FC<GameCardProps> = ({ cardData }) => {
  const { t } = useTranslation(['translations'])
  const targetDate = new Date('2023-06-01T00:00:00')

  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime()
    let timeLeft: TimeLeft = { hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft()
      setTimeLeft(newTimeLeft)
    }, 1000)

    return () => clearTimeout(timer)
  }, [timeLeft])

  return (
    <div
      className={`${cardData.status} game-card-wrapper flex min-h-[400px] min-w-[360px] flex-col items-center justify-between overflow-hidden py-10`}
    >
      <div className="game-card-header relative z-10 flex flex-col items-center">
        <button className="text-[17px] font-semibold uppercase leading-[21px] text-dark_green">
          {t('up')}
        </button>
        <span className="text-[13px] font-semibold leading-4 text-[#5B5B5B]">
          1.78x <span className="font-normal">{t('payment')}</span>
        </span>
      </div>
      <div className="game-card-main w-full">
        {cardData.status === 'ended' && (
          <div>
            <div className="mb-5 mt-3 flex items-center justify-center gap-[5px]">
              <img src={prohibit} alt="prohibit" />
              <span className="text-[13px] font-semibold uppercase leading-4 text-[#5B5B5B]">
                {t('timeFinish')}
              </span>
            </div>
            <div className="game-card-main-inner mb-[5px] w-full rounded-[20px] p-5">
              <p className="mb-[5px] text-xs font-semibold uppercase leading-[15px] text-[#464646]">
                {t('lastPrice')}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold uppercase leading-6 text-primary">
                  {cardData.lastPrice}
                </p>
                <div className="flex items-center justify-center gap-[5px] rounded-[5px] bg-primary px-2.5 py-[5px] text-[15px] font-medium uppercase leading-[18px] text-white">
                  <img className="rotate-180" src={arrow} alt="arrow" />{' '}
                  $-0.0040
                </div>
              </div>
              <div className="mb-2.5 mt-[15px] flex items-center justify-between text-[13px] leading-4 text-white">
                <p>{t('fixedPrice')}</p>
                <span>{cardData.fixedPrice}</span>
              </div>
              <div className="flex items-center justify-between text-[13px] font-semibold leading-4 text-white">
                <p>{t('presentPool')}</p>
                <span>{cardData.presentPool}</span>
              </div>
            </div>
            <p className="text-center text-[13px] leading-4 text-[#5B5B5B]">
              {cardData.gameID}
            </p>
          </div>
        )}
        {cardData.status === 'active' && (
          <div>
            <div className="mt-3 flex items-center justify-center gap-[5px]">
              <img src={play} alt="play" />
              <span className="mr-[5px] text-[13px] font-semibold uppercase leading-4 text-dark_green">
                {t('active')}
              </span>
              <div className="flex items-center justify-center gap-[5px]">
                <div className="text-[13px] leading-4 text-[#5B5B5B]">
                  {timeLeft.hours.toString().padStart(2, '0')}h.
                </div>
                <div className="text-[13px] leading-4 text-[#5B5B5B]">
                  {timeLeft.minutes.toString().padStart(2, '0')}m
                </div>
                <div className="text-[13px] leading-4 text-[#5B5B5B]">
                  {timeLeft.seconds.toString().padStart(2, '0')}s.
                </div>
              </div>
            </div>
            <div
              className={`relative mx-auto my-2.5 h-[5px] max-w-[298px] bg-[#252525] after:absolute after:left-0 after:top-0 after:z-10 after:block after:h-[5px] after:w-[208px] after:max-w-[298px] after:bg-dark_green after:content-['']`}
            ></div>
            <div className="game-card-main-inner mb-[5px] w-full rounded-[20px] p-5">
              <p className="mb-[5px] text-xs font-semibold uppercase leading-[15px] text-[#464646]">
                {t('lastPrice')}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xl font-bold uppercase leading-6 text-primary">
                  {cardData.lastPrice}
                </p>
                <div className="flex items-center justify-center gap-[5px] rounded-[5px] bg-primary px-2.5 py-[5px] text-[15px] font-medium uppercase leading-[18px] text-white">
                  <img className="rotate-180" src={arrow} alt="arrow" />{' '}
                  $-0.0040
                </div>
              </div>
              <div className="mb-2.5 mt-[15px] flex items-center justify-between text-[13px] leading-4 text-white">
                <p>{t('fixedPrice')}</p>
                <span>{cardData.fixedPrice}</span>
              </div>
              <div className="flex items-center justify-between text-[13px] font-semibold leading-4 text-white">
                <p>{t('presentPool')}</p>
                <span>{cardData.presentPool}</span>
              </div>
            </div>
            <p className="text-center text-[13px] leading-4 text-[#5B5B5B]">
              {cardData.gameID}
            </p>
          </div>
        )}
        {cardData.status === 'togo' && (
          <div>
            <div className="mb-2.5 mt-3 flex items-center justify-center gap-[5px]">
              <img className="opacity-50" src={play} alt="play" />
              <span className="text-[13px] font-semibold uppercase leading-4 text-[#42711D]">
                {t('next')}
              </span>
            </div>
            <div className="game-card-main-inner mb-[5px] w-full rounded-[20px] p-5">
              <div className="flex items-center justify-between text-[15px] font-semibold leading-4 text-white">
                <p>{t('presentPool')}</p>
                <span>{cardData.presentPool}</span>
              </div>
              <button className="my-2.5 flex w-full items-center justify-center gap-[5px] rounded-[5px] bg-dark_green py-[15px] text-[15px] font-semibold uppercase leading-[18px] text-white">
                {t('takeUp')} <img src={arrow} alt="arrow" />
              </button>
              <button className="flex w-full items-center justify-center gap-[5px] rounded-[5px] bg-primary py-[15px] text-[15px] font-semibold uppercase leading-[18px] text-white">
                {t('takeDown')}{' '}
                <img className="rotate-180" src={arrow} alt="arrow" />
              </button>
            </div>
            <p className="text-center text-[13px] leading-4 text-[#5B5B5B]">
              {cardData.gameID}
            </p>
          </div>
        )}
      </div>
      <div className="game-card-footer relative z-10 flex flex-col items-center">
        <span className="text-[13px] font-semibold leading-4 text-[#5B5B5B]">
          2.28x <span className="font-normal">{t('payment')}</span>
        </span>
        <button className="text-[17px] font-semibold uppercase leading-[21px] text-primary">
          {t('down')}
        </button>
      </div>
    </div>
  )
}
