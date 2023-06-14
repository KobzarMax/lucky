import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import transparency from '../../asset/transparency.svg'
import safety from '../../asset/safety.svg'
import oportunity from '../../asset/oportunity.svg'
import rewards from '../../asset/rewards.svg'

export const HowItWorks = ({ onHowItWorksInViewChange }: any) => {
  const { t } = useTranslation(['translations'])
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
      title: t('transperancy'),
      text: t('transperancyText')
    },
    {
      icon: safety,
      title: t('safety'),
      text: t('safetyText')
    },
    {
      icon: oportunity,
      title: t('opportunity'),
      text: t('opportunityText')
    },
    {
      icon: rewards,
      title: t('rewards'),
      text: t('rewardsText')
    }
  ]
  return (
    <div ref={ref} className="relative z-40 mt-[57px] lg:mt-[97.5px]">
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
