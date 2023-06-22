import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import classNames from 'classnames'
import styles from './Footer.module.css'
import React from 'react'
import { FooterProps } from './footer'
import { mobileLogo, logo, twitter, telegram, discord } from '@/images'

const Footer: React.FC<FooterProps> = ({ isMobile, visible }) => {
  const { t } = useTranslation(['translations'])
  const location = useLocation()

  const isGameRoute = location.pathname === '/game'
  const isRulesRoute = location.pathname === '/rules'

  const footerClasses = classNames(styles.footer, {
    hidden: isGameRoute || (isRulesRoute && isMobile)
  })

  const footerNavClasses = classNames(styles.footerNav, styles['footer-nav'], {
    'lg:ml-0': !isGameRoute,
    'lg:ml-[205px]': isGameRoute
  })

  const footerNavWrapperClasses = classNames(
    styles['footer-nav-wrapper'],
    styles.footerNavWrapper,
    {
      'pb-[13px]': !visible,
      'pb-[100px]': visible
    }
  )

  return (
    <footer className={footerClasses}>
      {!isGameRoute && (
        <div className={footerNavClasses}>
          <div className={footerNavWrapperClasses}>
            <Link className={styles.logo} to={'/'}>
              <img
                className="max-w-[95px]"
                src={isMobile ? mobileLogo : logo}
                alt="lucky hamster logo"
              />
            </Link>

            <div className={`${styles['footer-nav']} ${styles.footerLinks}`}>
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
