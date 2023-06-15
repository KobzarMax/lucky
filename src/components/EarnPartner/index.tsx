import createAccount from '@/asset/UserCirclePlus.svg'
import wallet from '@/asset/wallet.svg'
import coins from '@/asset/coins.svg'
import { useTranslation } from 'react-i18next'
import { TelegramButton } from '@/components/TelegramButton'
import { DocumentsButton } from '@/components/DocumentsButton'
import { useInView } from 'react-intersection-observer'
import React, { useEffect } from 'react'
import styles from './index.module.css'

interface EarnPartnerProps {
  onEarnPartnerInViewChange: (inView: boolean) => void
}

export const EarnPartner: React.FC<EarnPartnerProps> = ({onEarnPartnerInViewChange}: EarnPartnerProps) => {
  const { t } = useTranslation(['translations'])

  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px'
  })

  useEffect(() => {
    onEarnPartnerInViewChange(inView)
  }, [inView, onEarnPartnerInViewChange])

  interface PartnerPosibility {
    icon: string
    title: string
    text: string
  }

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
  return (
    <div ref={ref} className={styles.earnPartnerWrap}>
      <div className="w-full max-w-full">
        <h2 className={styles.earnLikePartner}>
          {t('earnLikePartner')}{' '}
          <span className="text-primary">{t('partner')}</span> ?
        </h2>
        <p className={styles.earnLikePartnerSubtitle1}>
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
          <div
            key={index}
            className={`${styles['posibility']} ${styles.posibilityItem}`}
          >
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
