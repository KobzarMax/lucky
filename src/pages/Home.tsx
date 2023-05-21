import { useTranslation } from 'react-i18next'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import illustration from '../asset/illustration.png'
import mobileIllustration from '../asset/mobile-illlustration.png'
import LatestGames from 'components/LatestGames'
import { HowItWorks } from 'components/HowItWorks'
import { EarnPartner } from 'components/EarnPartner'
import { CTA } from 'components/CTA'
import { News } from 'components/News'
import { useState, useEffect } from 'react'
import { FAQ } from 'components/FAQ'

function Home({ isMobile }) {
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
    const total = Date.parse(endDate) - Date.parse(new Date())
    const seconds = 60
    const minutes = Math.floor((total / 1000 / 60) % 60)
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    return { total, days, hours, minutes, seconds }
  }

  console.log(remainingTime)

  return (
    <div className="relative overflow-x-hidden pl-[13px] pr-[12px] lg:px-[78px]">
      <div className="flex flex-col items-stretch justify-between lg:flex-row">
        <div className="relative z-10 mt-[157px] w-full max-w-[665px] lg:mt-[254px]">
          <h1
            className="text-w mb-2.5 text-[30px] font-bold leading-[37px] text-white lg:mb-[15px] lg:text-[40px] lg:leading-[49px]
          "
          >
            <span className="text-primary">{t('luckyHamster')}</span> -{' '}
            {t('playForFunEarnForProfit')}
          </h1>
          <p className="mb-[15px] text-[15px] leading-[18px] text-white lg:mb-[30px]">
            {t('homeSubtitle')}
          </p>
          <div className="flex flex-col items-start justify-start gap-[11px] lg:flex-row lg:items-center">
            <button className="play-now flex items-center justify-center px-[64.5px] py-[15px] text-[15px] font-semibold leading-[18px] text-white">
              {t('playNow')}
            </button>
            <button className="documentation flex items-center justify-center px-[13.5px] py-[15px] text-[15px] font-semibold leading-[18px] text-white">
              {t('documentation')}
            </button>
          </div>
        </div>
        <div className="relative w-[108%] lg:w-full">
          <img
            className="absolute right-[14px] top-[-128px] w-[108%] lg:right-0 lg:top-0 lg:w-full"
            src={isMobile ? mobileIllustration : illustration}
            alt="lucky hamster illustrations"
          />

          <div className="timer relative z-10 mr-[30px] mt-[269px] lg:absolute lg:right-[47px] lg:top-[255px] lg:mr-0 lg:mt-0">
            <p className="mb-2.5 text-center text-[15px] leading-[18px] text-white">
              {t('gameStartsIn')}
            </p>
            <div className="flex items-center justify-center gap-2.5">
              <CountdownCircleTimer
                isPlaying
                duration={remainingTime.days * 60 * 60 * 24}
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
                        {
                          (remainingTime / 60 / 60 / 24)
                            .toString()
                            .split('.')[0]
                        }
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
                duration={remainingTime.minutes * 60}
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
        </div>
      </div>
      <LatestGames />
      <HowItWorks />
      <EarnPartner />
      <CTA />
      <News />
      <FAQ />
    </div>
  )
}

export default Home
