import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import classNames from 'classnames'
import styles from './HowItWorks.module.css'
import { oportunity, rewards, safety, transparency } from '@/images'
import { DescriptionItem, HowItWorksProps } from './howItWorks'

export const HowItWorks: React.FC<HowItWorksProps> = ({
  onHowItWorksInViewChange
}) => {
  const { t } = useTranslation(['translations'])
  const descriptions: DescriptionItem[] = [
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
  const [ref, inHowView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px'
  })

  useEffect(() => {
    onHowItWorksInViewChange(inHowView)
  }, [inHowView, onHowItWorksInViewChange])

  const howItWorksClass = classNames(styles.howItWorks)
  const howItTitleClass = styles.howItTitle
  const howItSubtitleClass = styles.howWorksSubtitle
  const descriptionWrapClass = styles.descriptionWrap
  const descriptionsClass = classNames(
    styles.descriptions,
    styles.descriptionWrap
  )
  const descriptionClass = styles.description

  return (
    <div ref={ref} className={howItWorksClass}>
      <h2 className={howItTitleClass}>
        {t('howWorks')}{' '}
        <span className="text-primary">{t('howWorksName')}</span>{' '}
        {t('howWorksEnd')} ?
      </h2>
      <p className={howItSubtitleClass}>{t('howWorksSubtitle')}</p>
      <div className={descriptionWrapClass}>
        <div
          style={{ WebkitOverflowScrolling: 'touch' }}
          className={descriptionsClass}
        >
          {descriptions.map((description, index) => (
            <div key={index} className={descriptionClass}>
              <img
                className="relative z-10 mx-auto mb-[10px]"
                src={description.icon}
                alt={description.title}
              />
              <div className="relative z-10">
                <p className={styles.descriptionTitle}>{description.title}</p>
                <p className={styles.descriptionText}>{description.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
