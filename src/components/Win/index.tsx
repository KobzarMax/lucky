import trophy from '@/asset/trophy-in-hand.svg'
import Confetti from 'react-confetti'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'
import React from 'react'

interface WinProps {
  show: boolean
  toggleShow: () => void
}

export const Win: React.FC<WinProps> = ({ show, toggleShow }) => {
  const { t } = useTranslation(['translations'])
  return (
    <div
      className={`${styles['win-overlay']} w-full ${show ? 'hidden' : 'flex'}`}
    >
      <Confetti />
      <div className={styles['win-item']}>
        <p className={styles.youWon}>{t('youWon')}</p>
        <p className={styles.bnbOnlyFeature}>{t('bnbOnlyFeature')}</p>
        <img className="mb-[15px]" src={trophy} alt="trophy" />
        <p className={styles.winText}>{t('winText')}</p>
        <button className={styles.switchToBnb}>{t('switchToBnb')}</button>
        <button className={styles.disconnectWallet}>
          {t('disconnectWallet')}
        </button>
        <button onClick={toggleShow} className={styles.stayOnEthereum}>
          {t('stayOnEthereum')}
        </button>
      </div>
    </div>
  )
}
