import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import { TelegramButton } from '@/components/TelegramButton'
import { DocumentsButton } from '@/components/DocumentsButton'
import { useInView } from 'react-intersection-observer'
import styles from './EarnPartner.module.css'
import { coins, createAccount, wallet } from '@/images'
import { EarnPartnerProps, PartnerPosibility } from './earnPartner'

export const EarnPartner: React.FC<EarnPartnerProps> = ({
  onEarnPartnerInViewChange
}: EarnPartnerProps) => {
  const { t } = useTranslation(['translations'])
  const partnerPosibilities: PartnerPosibility[] = [
    {
      icon: createAccount,
      title: t('createYourAccount'),
      text: t('createYourAccountSubtitle')
    },
    {
      icon: wallet,
      title: t('connectBankAccount'),
      text: t('connectBankAccountSubtitle')
    },
    {
      icon: coins,
      title: t('startBuildPortfolio'),
      text: t('startBuildPortfolioSubtitle')
    }
  ]
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px'
  })

  useEffect(() => {
    onEarnPartnerInViewChange(inView)
  }, [inView, onEarnPartnerInViewChange])

  const earnPartnerWrapClasses = classNames(styles.earnPartnerWrap)
  const earnLikePartnerClasses = classNames(styles.earnLikePartner)
  const earnLikePartnerSubtitle1Classes = classNames(
    styles.earnLikePartnerSubtitle1
  )
  const posibilityItemClasses = classNames(
    styles['posibility'],
    styles.posibilityItem
  )

  return (
    <div ref={ref} className={earnPartnerWrapClasses}>
      <div className="w-full max-w-full">
        <h2 className={earnLikePartnerClasses}>
          {t('earnLikePartner')}{' '}
          <span className="text-primary">{t('partner')}</span> ?
        </h2>
        <p className={earnLikePartnerSubtitle1Classes}>
          <span className="font-bold text-primary">
            {' '}
            {t('earnLikePartnerSubtitle1')}
          </span>{' '}
          {t('earnLikePartnerSubtitle2')}
        </p>
        <div className={styles.earnButtons}>
          <TelegramButton />
          <DocumentsButton />
        </div>
      </div>
      <div className={styles.partnerPosibilities}>
        {partnerPosibilities.map((posibility, index) => (
          <div key={index} className={posibilityItemClasses}>
            <img
              className="relative z-10"
              src={posibility.icon}
              alt={posibility.title}
            />
            <div className="relative z-10">
              <p className={styles.posibilityTitle}>{posibility.title}</p>
              <p className={styles.posibilityText}>{posibility.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
