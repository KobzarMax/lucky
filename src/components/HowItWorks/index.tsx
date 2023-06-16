import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import styles from './HowItWorks.module.css'
import { DescriptionItem } from '@/interfaces'
import { oportunity, rewards, safety, transparency } from '@/consts'

interface HowItWorksProps {
  onHowItWorksInViewChange: (inView: boolean) => void
}

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
  return (
    <div ref={ref} className={styles.howItWorks}>
      <h2 className={styles.howItTitle}>
        {t('howWorks')}{' '}
        <span className="text-primary">{t('howWorksName')}</span>{' '}
        {t('howWorksEnd')} ?
      </h2>
      <p className={styles.howWorksSubtitle}>{t('howWorksSubtitle')}</p>
      <div className={`${styles.descriptionWrap}`}>
        <div className={`${styles.descriptions} ${styles.descriptionWrap}`}>
          {descriptions.map((description, index) => (
            <div
              key={index}
              className={styles.description}
              onTouchStart={(event) => event.stopPropagation()}
            >
              <img
                className="mx-auto mb-[10px]"
                src={description.icon}
                alt={description.title}
              />
              <p className={styles.descriptionTitle}>{description.title}</p>
              <p className={styles.descriptionText}>{description.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
