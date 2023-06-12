import { useTranslation } from 'react-i18next'
import prohibit from '../../asset/Prohibit.svg'
import arrow from '../../asset/arrowup.svg'
import play from '../../asset/PlayCircle.svg'
import { useEffect, useState } from 'react'
import bnb from '../../asset/BNB.svg'
import clock from '../../asset/Clock.svg'

interface GameData {
  status: string
  lastPrice: string
  fixedPrice: string
  presentPool: string
  gameID: string
}

interface GameCardProps {
  cardData: GameData
  toggleShow: () => void
}

interface TimeLeft {
  hours: number
  minutes: number
  seconds: number
}

export const GameCard: React.FC<GameCardProps> = ({ cardData, toggleShow }) => {
  const { t } = useTranslation(['translations'])
  const targetDate = new Date('2023-06-01T00:00:00')
  const [positionInput, setPositionInput] = useState<boolean>(false)
  const [inputRangeValue, setInputRangeValue] = useState<number>(50)
  const [starting, setStarting] = useState<boolean>(false)
  const [timer, setTimer] = useState(60)
  const [cardRotation, setCardRotation] = useState<number>(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1)
    }, 1000)

    if (timer === 0) {
      setStarting(false)
      clearInterval(interval)
    }

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval)
  }, [timer])

  const handleRangeItemClick = (value: number) => {
    setInputRangeValue(value)
  }

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

  const togglePositionInput = () => {
    setPositionInput(!positionInput)
    setCardRotation((rotation) => (rotation === 180 ? 0 : 180))
  }
  const toggleStarting = () => {
    setStarting(!starting)
    setPositionInput(!positionInput)
    setCardRotation((rotation) => (rotation === 180 ? 0 : 180))
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
      className={`${
        starting ? '' : cardData.status
      } game-card-wrapper card-${cardRotation} flex min-h-[400px] min-w-[360px] max-w-[360px] flex-col items-center justify-between overflow-hidden py-10 duration-300`}
    >
      <div className="game-card-header relative z-10 flex flex-col items-center">
        {!positionInput && (
          <>
            <button
              onClick={toggleShow}
              className="text-dark_green text-[17px] font-semibold uppercase leading-[21px]"
            >
              {t('up')}
            </button>
            {!positionInput && !starting && (
              <span className="text-[13px] font-semibold leading-4 text-[#5B5B5B]">
                1.78x <span className="font-normal">{t('payment')}</span>
              </span>
            )}
          </>
        )}
      </div>
      {!positionInput && !starting && (
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
                  <p className="text-primary text-xl font-bold uppercase leading-6">
                    {cardData.lastPrice}
                  </p>
                  <div className="bg-primary flex items-center justify-center gap-[5px] rounded-[5px] px-2.5 py-[5px] text-[15px] font-medium uppercase leading-[18px] text-white">
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
                <span className="text-dark_green mr-[5px] text-[13px] font-semibold uppercase leading-4">
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
                className={`after:bg-dark_green relative mx-auto my-2.5 h-[5px] max-w-[298px] bg-[#252525] after:absolute after:left-0 after:top-0 after:z-10 after:block after:h-[5px] after:w-[208px] after:max-w-[298px] after:content-['']`}
              ></div>
              <div className="game-card-main-inner mb-[5px] w-full rounded-[20px] p-5">
                <p className="mb-[5px] text-xs font-semibold uppercase leading-[15px] text-[#464646]">
                  {t('lastPrice')}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-primary text-xl font-bold uppercase leading-6">
                    {cardData.lastPrice}
                  </p>
                  <div className="bg-primary flex items-center justify-center gap-[5px] rounded-[5px] px-2.5 py-[5px] text-[15px] font-medium uppercase leading-[18px] text-white">
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
                <button
                  onClick={togglePositionInput}
                  className="bg-dark_green my-2.5 flex w-full items-center justify-center gap-[5px] rounded-[5px] py-[15px] text-[15px] font-semibold uppercase leading-[18px] text-white"
                >
                  {t('takeUp')} <img src={arrow} alt="arrow" />
                </button>
                <button
                  onClick={togglePositionInput}
                  className="bg-primary flex w-full items-center justify-center gap-[5px] rounded-[5px] py-[15px] text-[15px] font-semibold uppercase leading-[18px] text-white"
                >
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
      )}
      {positionInput && !starting && (
        <div className="game-card-main w-full scale-x-[-1]">
          <div>
            <div className="game-card-main-inner mb-[5px] w-full rounded-[20px] p-5">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[17px] font-semibold leading-[21px] text-white">
                    Определение позиции
                  </p>
                  <div className="flex items-center justify-start gap-[5px]">
                    <img className="arrow" src={arrow} alt="arrow" />
                    <span className="text-dark_green text-[17px] font-semibold leading-[21px]">
                      ВВЕРХ
                    </span>
                  </div>
                </div>
                <div className="mt-[15px]">
                  <div className="mb-[5px] flex items-end justify-between">
                    <span className="text-xs leading-[15px] text-[#757575]">
                      Ставка
                    </span>
                    <img src={bnb} alt="bnb" />
                  </div>
                  <div className="w-full">
                    <input
                      className="w-full rounded-[5px] border-none bg-[#2D2D2D] text-white outline-none focus:border-none focus:border-transparent focus:shadow-none focus:outline-none active:outline-none"
                      type="number"
                      placeholder="0.0"
                    />
                    <p className="mt-[5px] text-right text-xs leading-[15px] text-[#757575]">
                      Баланс: $2 000
                    </p>
                  </div>
                </div>
                <div className="mt-[5px] w-full">
                  <input
                    value={inputRangeValue}
                    style={{ backgroundSize: `${inputRangeValue}% 100%` }}
                    className="w-full"
                    min="0"
                    max="100"
                    type="range"
                    onChange={(e) => setInputRangeValue(Number(e.target.value))}
                  />
                </div>
                <div className="ranges mb-[15px] mt-2.5 flex items-center justify-center gap-[11px]">
                  <div
                    onClick={() => handleRangeItemClick(10)}
                    className="range-item cursor-pointer rounded-[15px] bg-[#313131] px-[15px] py-[5px] text-xs font-medium leading-[15px] text-white"
                  >
                    10%
                  </div>
                  <div
                    onClick={() => handleRangeItemClick(25)}
                    className="range-item cursor-pointer rounded-[15px] bg-[#313131] px-[15px] py-[5px] text-xs font-medium leading-[15px] text-white"
                  >
                    25%
                  </div>
                  <div
                    onClick={() => handleRangeItemClick(50)}
                    className="range-item cursor-pointer rounded-[15px] bg-[#313131] px-[15px] py-[5px] text-xs font-medium leading-[15px] text-white"
                  >
                    50%
                  </div>
                  <div
                    onClick={() => handleRangeItemClick(75)}
                    className="range-item cursor-pointer rounded-[15px] bg-[#313131] px-[15px] py-[5px] text-xs font-medium leading-[15px] text-white"
                  >
                    75%
                  </div>
                  <div
                    onClick={() => handleRangeItemClick(100)}
                    className="range-item cursor-pointer rounded-[15px] bg-[#313131] px-[15px] py-[5px] text-xs font-medium leading-[15px] text-white"
                  >
                    MAX
                  </div>
                </div>
                <button
                  onClick={toggleStarting}
                  className="bg-dark_green my-2.5 flex w-full items-center justify-center gap-[5px] rounded-[5px] py-[15px] text-[15px] font-semibold uppercase leading-[18px] text-white"
                >
                  Подключить кошелек
                </button>
                <p className="mt-[5px] text-xs leading-[15px] text-[#757575]">
                  Вы не сможете удалить или поменять свою позицию после того,
                  как её займете.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {starting && (
        <div className="game-card-main w-full">
          <div>
            <p className="mb-2.5 flex items-center justify-center gap-[5px] text-center text-[13px] leading-4 text-[#5B5B5B]">
              <img src={clock} alt="clock" /> Позже
            </p>
            <div className="game-card-main-inner mb-[5px] w-full rounded-[20px] p-5 py-[29px]">
              <div>
                <p className="text-center text-[15px] font-semibold leading-[18px] text-white">
                  Начало входа
                </p>
                <div className="starting-timer text-center text-[25px] font-bold leading-[30px] text-white">
                  {timer < 10 ? `00:0${timer}` : `00:${timer}`}
                </div>
              </div>
            </div>
            <p className="mt-2.5 text-center text-[13px] leading-4 text-[#5B5B5B]">
              {cardData.gameID}
            </p>
          </div>
        </div>
      )}
      <div className="game-card-footer relative z-10 flex flex-col items-center">
        {!positionInput && (
          <>
            {!positionInput && !starting && (
              <span className="text-[13px] font-semibold leading-4 text-[#5B5B5B]">
                2.28x <span className="font-normal">{t('payment')}</span>
              </span>
            )}
            <button
              onClick={() => {
                toggleShow
              }}
              className="text-primary text-[17px] font-semibold uppercase leading-[21px]"
            >
              {t('down')}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
