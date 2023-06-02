import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import transparency from 'asset/transparency.svg'
import safety from 'asset/safety.svg'
import oportunity from 'asset/oportunity.svg'
import rewards from 'asset/rewards.svg'

export const HowItWorks = ({ onHowItWorksInViewChange }) => {
  const { t } = useTranslation(['home'])
  const [ref, inHowView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px'
  })

  useEffect(() => {
    onHowItWorksInViewChange(inHowView)
  }, [inHowView, onHowItWorksInViewChange])
  const descriptions = [
    {
      icon: transparency,
      title: t('tranparency'),
      text: 'Full transparency and honesty in our decentralized blockchain game. The results are stored on the public blockchain for verification. No manipulation or rigging - just fair play.'
    },
    {
      icon: safety,
      title: t('safety'),
      text: 'Our blockchain tech ensures strong security and reliability. Predictions and transactions are encrypted and stored in a distributed node network, guarding against hacks and external risks.'
    },
    {
      icon: oportunity,
      title: t('opportunity'),
      text: 'Equal opportunities for all in our game. Experience and status are irrelevant - actively predict markets and earn rewards for accurate forecasts. We believe in equality for all.'
    },
    {
      icon: rewards,
      title: t('rewards'),
      text: 'Earn money with our game. Predict market movements, get tokens/cryptocurrency. Exchange rewards for cash or wick for games/investments. Financial success depends on your skills and intuition.'
    }
  ]
  return (
    <div ref={ref} className="mt-[57px] lg:mt-[97.5px]">
      <h2 className="mb-2.5  text-center text-xl font-bold leading-6 text-white lg:mb-[19px] lg:text-[25px] lg:leading-[30px]">
        {t('howWorks')}{' '}
        <span className="text-primary">{t('howWorksName')}</span>{' '}
        {t('howWorksEnd')} ?
      </h2>
      <p className="mx-auto mb-1.5 max-w-[765px] text-center text-[15px] leading-[23px] text-white lg:mb-[30px]">
        {t('howWorksSubtitle')}
      </p>
      <div className="flex items-center justify-start gap-[30px] overflow-x-scroll lg:justify-center lg:overflow-x-hidden">
        {descriptions.map((description, index) => (
          <div
            key={index}
            className="description h-[334px] min-w-[265px] px-2.5 pb-[72px] pt-[20px]"
            onTouchStart={(event) => event.stopPropagation()}
          >
            <img
              className="mx-auto mb-[10px]"
              src={description.icon}
              alt={description.title}
            />
            <p className="mb-[10px] pl-2.5 text-[17px] font-semibold capitalize leading-[21px] text-white">
              {description.title}
            </p>
            <p className="max-w-[235px] pl-2.5 text-[15px] leading-[20px] text-white">
              {description.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
