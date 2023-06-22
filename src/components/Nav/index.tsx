import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import styles from './Nav.module.css'
import React from 'react'
import { NavProps } from './nav'
import { gear, playNav, trophy } from '@/images'

export const Nav: React.FC<NavProps> = ({ isMobile, visible }) => {
  const { t } = useTranslation(['translations'])

  const navClass = classNames(
    visible ? styles.active : '',
    styles.nav,
    styles.navMain
  )
  const modalClass = styles.modal
  const playClass = classNames(styles.play, isMobile ? '' : styles.playHidden)
  const navLinkClass = styles.navLink

  return (
    <div className={navClass}>
      <div className={styles.navInner}>
        <div
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          className={modalClass}
        >
          <img src={trophy} alt="Win" /> {t('win')}
        </div>
        <div
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          className={playClass}
        >
          <img className="relative z-20" src={playNav} alt="play" />
        </div>
        <NavLink className={navLinkClass} to={'/'}>
          <img src={gear} alt="Instructions" /> {t('documentation')}
        </NavLink>
        {/* <NavLink
          className="text-dark_gray  flex flex-col items-center justify-start gap-[5px] text-[10px] leading-3 lg:flex-row lg:text-[15px] lg:leading-[18px]"
          to={'leaderboard'}
        >
          <img src={leaderboard} alt="leaderboard" /> {t('leaderboard')}
        </NavLink>  */}
        {/* <div className="more-link after:bg-primary relative cursor-pointer after:absolute after:-right-0.5 after:top-0 after:h-[5px] after:w-[5px] after:rounded-full after:content-['']">
          <img src={dots} alt="dots" />
          <div className="more-links absolute bottom-[200%] right-[-30px] z-10 flex flex-col items-start justify-start rounded-[15px] py-5 lg:bottom-auto lg:left-0 lg:right-auto lg:top-full">
            <NavLink
              className="text-dark_gray flex items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'info'}
            >
              {t('info')}
            </NavLink>
            <NavLink
              className="text-dark_gray flex items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'ifo'}
            >
              {t('IFO')}
            </NavLink>
            <NavLink
              className="text-dark_gray justify-between_gray flex items-center whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'partnership-program'}
            >
              {t('partnership')}
            </NavLink>
            <NavLink
              className="text-dark_gray flex items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'vote'}
            >
              {t('vote')}
            </NavLink>
            <NavLink
              className="text-dark_gray flex w-full items-center justify-between whitespace-nowrap border-y border-dark_gray_border px-5 py-2.5 text-[15px] leading-[18px]"
              to={'ratings'}
            >
              {t('ratings')}
            </NavLink>
            <NavLink
              className="text-dark_gray justify-between_gray flex w-full items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'blog'}
            >
              {t('blog')} <img src={signOut} alt="sign out" />
            </NavLink>
            <NavLink
              className="text-dark_gray justify-between_gray flex w-full items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'docs'}
            >
              {t('documents')} <img src={signOut} alt="sign out" />
            </NavLink>
          </div>
        </div> */}
      </div>
    </div>
  )
}
