import React, { MutableRefObject, useEffect } from 'react'
import { CountDown } from '@/components/Countdown'
import { useTranslation } from 'react-i18next'
import 'flowbite'
import classNames from 'classnames'
import styles from './ModalInfo.module.css'
import { twitter, telegram, discord } from '@/images'

export const ModalInfo: React.FC = () => {
  const { t } = useTranslation(['translations'])

  const modalWrapClass = classNames(styles.modalWrap, 'hidden')
  const modalWrapInnerClass = styles.modalWrapInner
  const modalContentClass = styles.modalContent
  const modalButtonClass = styles.modalButton
  const modalTitleClass = styles.modalTitle
  const modalTextContentClass = styles.modalTextContent
  const modalTextClass = styles.modalText
  const socialLinksClass = styles.socialLinks
  const socialLinkClass = styles.socialLink
  const socialLinkImageClass = styles.socialLinkImage

  return (
    <div id="popup-modal" tabIndex={1} className={modalWrapClass}>
      <div className={modalWrapInnerClass}>
        <div className={modalContentClass}>
          <button
            type="button"
            className={modalButtonClass}
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

          <div className={modalTextContentClass}>
            <h1 className={modalTitleClass}>Game starts in</h1>
            <CountDown />
            <p className={modalTextClass}>Stay tuned!</p>
            <div className={socialLinksClass}>
              <a href="#" className={socialLinkClass}>
                <img
                  className={socialLinkImageClass}
                  src={twitter}
                  alt="twitter link"
                />
              </a>
              <a href="#" className={socialLinkClass}>
                <img
                  className={socialLinkImageClass}
                  src={telegram}
                  alt="telegram link"
                />
              </a>
              <a href="#" className={socialLinkClass}>
                <img
                  className={socialLinkImageClass}
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
