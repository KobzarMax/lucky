import React, { MutableRefObject, useEffect } from 'react'
import { CountDown } from '@/components/Countdown'
import { useTranslation } from 'react-i18next'
import 'flowbite'
import twitter from '@/asset/TwitterLogo.svg'
import telegram from '@/asset/TelegramLogo.svg'
import discord from '@/asset/DiscordLogo.svg'
import styles from './index.module.css'

export const ModalInfo: React.FC = () => {
  const { t } = useTranslation(['translations'])

  return (
    <div id="popup-modal" tabIndex={1} className={`${styles.modalWrap} hidden`}>
      <div className={styles.modalWrapInner}>
        <div className={styles.modalContent}>
          <button
            type="button"
            className={styles.modalButton}
            data-modal-hide="popup-modal"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>

          <div className={styles.modalTextContent}>
            <h1 className={styles.modalTitle}>Game starts in</h1>
            <CountDown />
            <p className={styles.modalText}>Stay tuned!</p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink}>
                <img
                  className={styles.socialLinkImage}
                  src={twitter}
                  alt="twitter link"
                />
              </a>
              <a href="#" className={styles.socialLink}>
                <img
                  className={styles.socialLinkImage}
                  src={telegram}
                  alt="telegram link"
                />
              </a>
              <a href="#" className={styles.socialLink}>
                <img
                  className={styles.socialLinkImage}
                  src={discord}
                  alt="discord link"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
