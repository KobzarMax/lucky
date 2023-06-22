import React from 'react'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import Confetti from 'react-confetti'
import styles from './Win.module.css'
import { WinProps } from './win'
import { trophyInHand } from '@/images'

export const Win: React.FC<WinProps> = ({ show, toggleShow }) => {
  const { t } = useTranslation(['translations'])

  const winOverlayClasses = classNames(
    styles['win-overlay'],
    'w-full',
    { hidden: show },
    { flex: !show }
  )

  const winItemClasses = classNames(styles['win-item'])

  const mb15Classes = classNames('mb-[15px]')

  const switchToBnbClasses = classNames(styles.switchToBnb)

  const disconnectWalletClasses = classNames(styles.disconnectWallet)

  const stayOnEthereumClasses = classNames(styles.stayOnEthereum)

  return (
    <div className={winOverlayClasses}>
      <Confetti />
      <div className={winItemClasses}>
        <p className={styles.youWon}>{t('youWon')}</p>
        <p className={styles.bnbOnlyFeature}>{t('bnbOnlyFeature')}</p>
        <img className={mb15Classes} src={trophyInHand} alt="trophy" />
        <p className={styles.winText}>{t('winText')}</p>
        <button className={switchToBnbClasses}>{t('switchToBnb')}</button>
        <button className={disconnectWalletClasses}>
          {t('disconnectWallet')}
        </button>
        <button onClick={toggleShow} className={stayOnEthereumClasses}>
          {t('stayOnEthereum')}
        </button>
      </div>
    </div>
  )
}
