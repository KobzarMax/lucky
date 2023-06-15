import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import styles from './index.module.css'
import logo from '@/asset/logo.svg'
import twitter from '@/asset/TwitterLogo.svg'
import telegram from '@/asset/TelegramLogo.svg'
import discord from '@/asset/DiscordLogo.svg'
import mobileLogo from '@/asset/mobile-logo.svg'
import React from 'react'

interface FooterProps {
  isMobile: boolean
  visible: boolean
}

const Footer: React.FC<FooterProps> = ({ isMobile, visible }) => {
  const { t } = useTranslation(['translations'])
  const location = useLocation()

  const isGameRoute = location.pathname === '/game'
  const isRulesRoute = location.pathname === '/rules'

  return (
    <footer
      className={`${isGameRoute ? 'hidden' : ''} ${
        isRulesRoute ? styles.isRulesRoute : ''
      } ${styles['footer']}`}
    >
      {!isGameRoute && (
        <div
          className={`${styles.footerNav} ${styles['footer-nav']} ${
            !isGameRoute ? 'lg:ml-0' : 'lg:ml-[205px]'
          }`}
        >
          <div
            className={`${styles['footer-nav-wrapper']} ${
              styles.footerNavWrapper
            }  ${!visible ? 'pb-[13px]' : 'pb-[100px]'} `}
          >
            <Link className="logo" to={'/'}>
              <img
                className="max-w-[95px]"
                src={isMobile ? mobileLogo : logo}
                alt="lucky hamster logo"
              />
            </Link>

            <div className={(styles['footer-nav'], styles.footerLinks)}>
              <Link className={styles.footerLink} to={'terms'}>
                {t('termsOfUse')}
              </Link>
              <Link className={styles.footerLink} to={'privacy'}>
                {t('privacyPolicy')}
              </Link>
              <Link className={styles.footerLink} to={'affiliate'}>
                {t('affiliateProgram')}
              </Link>
            </div>
            <div className={`${styles['social-links']} ${styles.socialLinks}`}>
              <a href="#" className={styles.socialLink}>
                <img
                  className={styles.socialImage}
                  src={twitter}
                  alt="twitter link"
                />
              </a>
              <a href="#" className={styles.socialLink}>
                <img
                  className={styles.socialImage}
                  src={telegram}
                  alt="telegram link"
                />
              </a>
              <a href="#" className={styles.socialLink}>
                <img
                  className={styles.socialImage}
                  src={discord}
                  alt="discord link"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
