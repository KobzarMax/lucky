import { useTranslation } from 'react-i18next'
import prohibit from '@/asset/Prohibit.svg'
import arrow from '@/asset/arrowup.svg'
import play from '@/asset/PlayCircle.svg'
import React, { useEffect, useState, useRef, useCallback } from 'react'
import bnb from '@/asset/BNB.svg'
import clock from '@/asset/Clock.svg'
import { GameData } from '@/interfaces'
import styles from './index.module.css'

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
  const positionInputRef = useRef<HTMLDivElement>(null)
  const [positionInputValue, setPositionInputValue] = useState<string>('')

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

  const togglePositionInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value
    setPositionInput(!positionInput)
    setCardRotation((rotation) => (rotation === 180 ? 0 : 180))
    setPositionInputValue(value)
  }
  const toggleStarting = () => {
    setStarting(!starting)
    setPositionInput(!positionInput)
    setCardRotation((rotation) => (rotation === 180 ? 0 : 180))
  }

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        positionInputRef.current &&
        positionInput &&
        !positionInputRef.current.contains(event.target as Node)
      ) {
        setPositionInput(false)
        setCardRotation(0)
      }
    },
    [positionInput]
  )

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleClickOutside])

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
      className={`${starting ? '' : styles[cardData.status]} ${
        styles['game-card-wrapper']
      } ${styles[`card-${cardRotation}`]} ${styles.gameCardWrapper}`}
    >
      <div className={styles.gameCardHeader}>
        {!positionInput && (
          <>
            <button onClick={toggleShow} className={styles.gameUpButton}>
              {t('up')}
            </button>
            {!positionInput && !starting && (
              <span className={styles.gamePaymentValue}>
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
              <div className={styles.timeFinishWrap}>
                <img src={prohibit} alt="prohibit" />
                <span className={styles.timeFinishValue}>
                  {t('timeFinish')}
                </span>
              </div>
              <div
                className={`${styles['game-card-main-inner']} ${styles.gameCardMainInner}`}
              >
                <p className={styles.lastPrice}>{t('lastPrice')}</p>
                <div className={styles.flexHelper}>
                  <p className={styles.cardDataLastPrice}>
                    {cardData.lastPrice}
                  </p>
                  <div className={styles.cardDataLastPriceContent}>
                    <img className="rotate-180" src={arrow} alt="arrow" />{' '}
                    $-0.0040
                  </div>
                </div>
                <div className={styles.fixedPrice}>
                  <p>{t('fixedPrice')}</p>
                  <span>{cardData.fixedPrice}</span>
                </div>
                <div className={styles.presentPool}>
                  <p>{t('presentPool')}</p>
                  <span>{cardData.presentPool}</span>
                </div>
              </div>
              <p className={styles.cardDataGameID}>{cardData.gameID}</p>
            </div>
          )}
          {cardData.status === 'active' && (
            <div>
              <div className={styles.cardActiveHead}>
                <img src={play} alt="play" />
                <span className={styles.headActive}>{t('active')}</span>
                <div className={styles.headTimeWrap}>
                  <div className={styles.headTimeItem}>
                    {timeLeft.hours.toString().padStart(2, '0')}
                    {t('h')}
                  </div>
                  <div className={styles.headTimeItem}>
                    {timeLeft.minutes.toString().padStart(2, '0')}
                    {t('m')}
                  </div>
                  <div className={styles.headTimeItem}>
                    {timeLeft.seconds.toString().padStart(2, '0')}
                    {t('s')}
                  </div>
                </div>
              </div>
              <div className={styles.headTimeLine}></div>
              <div
                className={`${styles['game-card-main-inner']} ${styles.gameCardMainInner}`}
              >
                <p className={styles.lastPrice}>{t('lastPrice')}</p>
                <div className={styles.flexHelper}>
                  <p className={styles.cardDataLastPrice}>
                    {cardData.lastPrice}
                  </p>
                  <div className={styles.cardDataLastPriceContent}>
                    <img className="rotate-180" src={arrow} alt="arrow" />{' '}
                    $-0.0040
                  </div>
                </div>
                <div className={styles.fixedPrice}>
                  <p>{t('fixedPrice')}</p>
                  <span>{cardData.fixedPrice}</span>
                </div>
                <div className={styles.presentPool}>
                  <p>{t('presentPool')}</p>
                  <span>{cardData.presentPool}</span>
                </div>
              </div>
              <p className={styles.cardDataGameID}>{cardData.gameID}</p>
            </div>
          )}
          {cardData.status === 'togo' && (
            <div>
              <div className={styles.nextWrap}>
                <img className="opacity-50" src={play} alt="play" />
                <span className={styles.nextText}>{t('next')}</span>
              </div>
              <div
                className={`${styles['game-card-main-inner']} ${styles.gameCardMainInner}`}
              >
                <div className={styles.togoPresentPool}>
                  <p>{t('presentPool')}</p>
                  <span>{cardData.presentPool}</span>
                </div>
                <button
                  onClick={togglePositionInput}
                  value={'up'}
                  className={styles.cardGreenButton}
                >
                  {t('takeUp')} <img src={arrow} alt="arrow" />
                </button>
                <button
                  onClick={togglePositionInput}
                  value={'down'}
                  className={styles.cardRedButton}
                >
                  {t('takeDown')}{' '}
                  <img className="rotate-180" src={arrow} alt="arrow" />
                </button>
              </div>
              <p className={styles.cardDataGameID}>{cardData.gameID}</p>
            </div>
          )}
        </div>
      )}
      {positionInput && !starting && (
        <div
          ref={positionInputRef}
          className={`${styles['game-card-main']} w-full scale-x-[-1]`}
        >
          <div>
            <div
              className={`${styles['game-card-main-inner']} ${styles.gameCardMainInner}`}
            >
              <div>
                <div className={styles.flexHelper}>
                  <p className={styles.choosePosition}>{t('choosePosition')}</p>
                  <div
                    className={`${styles[positionInputValue]} ${styles.positionInputValue}`}
                  >
                    <img className="arrow" src={arrow} alt="arrow" />
                    {positionInputValue === 'up' && (
                      <span className={styles.gameUpButton}>{t('up')}</span>
                    )}
                    {positionInputValue === 'down' && (
                      <span className={styles.positionInputValueDown}>
                        {t('down')}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-[15px]">
                  <div className={styles.bidWrap}>
                    <span className={styles.bidText}>{t('bid')}</span>
                    <img src={bnb} alt="bnb" />
                  </div>
                  <div className="w-full">
                    <input
                      className={styles.cardInput}
                      type="number"
                      placeholder="0.0"
                    />
                    <p className={styles.balanceValue}>
                      {t(`balance`)}: $2 000
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
                <div className={styles.ranges}>
                  <div
                    onClick={() => handleRangeItemClick(10)}
                    className={styles.rangeItem}
                  >
                    10%
                  </div>
                  <div
                    onClick={() => handleRangeItemClick(25)}
                    className={styles.rangeItem}
                  >
                    25%
                  </div>
                  <div
                    onClick={() => handleRangeItemClick(50)}
                    className={styles.rangeItem}
                  >
                    50%
                  </div>
                  <div
                    onClick={() => handleRangeItemClick(75)}
                    className={styles.rangeItem}
                  >
                    75%
                  </div>
                  <div
                    onClick={() => handleRangeItemClick(100)}
                    className={styles.rangeItem}
                  >
                    {t('max')}
                  </div>
                </div>
                <button
                  onClick={toggleStarting}
                  className={styles.cardGreenButton}
                >
                  {t('connectWallet')}
                </button>
                <p className={styles.connectWithInput}>
                  {t('connectWithInput')}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {starting && (
        <div className={`${styles['game-card-main']} w-full`}>
          <div>
            <p className={styles.later}>
              <img src={clock} alt="clock" /> {t('later')}
            </p>
            <div
              className={`${styles['game-card-main-inner']} ${styles.gameCardMainInner} py-[29px]`}
            >
              <div>
                <p className={styles.entranceStart}>{t('entranceStart')}</p>
                <div className={styles.timer}>
                  {timer < 10 ? `00:0${timer}` : `00:${timer}`}
                </div>
              </div>
            </div>
            <p className={styles.startingGameID}>{cardData.gameID}</p>
          </div>
        </div>
      )}
      <div className={styles.gameCardFooter}>
        {!positionInput && (
          <>
            {!positionInput && !starting && (
              <span className={styles.gamePaymentValue}>
                2.28x <span className="font-normal">{t('payment')}</span>
              </span>
            )}
            <button
              onClick={() => {
                toggleShow
              }}
              className={styles.positionInputValueDown}
            >
              {t('down')}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
