import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import logo from '../../asset/logo.svg'
import twitter from '../../asset/TwitterLogo.svg'
import telegram from '../../asset/TelegramLogo.svg'
import discord from '../../asset/DiscordLogo.svg'
import mobileLogo from '../../asset/mobile-logo.svg'

interface FooterProps {
  isMobile: boolean
}

function Footer({ isMobile }: FooterProps): JSX.Element {
  const { t } = useTranslation(['home'])
  const location = useLocation()

  const isGameRoute = location.pathname === '/game'

  return (
    <footer className="footer">
      {!isGameRoute && (
        <div className="footer-nav-wrapper grid grid-cols-2 pb-5 pl-[13px] pr-[12px] lg:flex lg:items-center lg:justify-between lg:pb-0 lg:pl-[77px] lg:pr-[74px]">
          <Link className="logo" to={'/'}>
            <img
              className="max-w-[95px]"
              src={isMobile ? mobileLogo : logo}
              alt="lucky hamster logo"
            />
          </Link>
          <div className="footer-nav flex w-full flex-col items-center justify-start gap-[13px] lg:ml-[205px] lg:flex-row lg:gap-[30px]">
            <Link
              className="text-dark_gray text-[15px] leading-[15px]"
              to={'terms'}
            >
              {t('termsOfUse')}
            </Link>
            <Link
              className="text-dark_gray text-[15px] leading-[15px]"
              to={'privacy'}
            >
              {t('privacyPolicy')}
            </Link>
            <Link
              className="text-dark_gray text-[15px] leading-[15px]"
              to={'affiliate'}
            >
              {t('affiliateProgram')}
            </Link>
          </div>
          <div className="social-links flex items-center justify-end gap-[15px] lg:justify-start">
            <a
              href="#"
              className="flex h-[25px] w-[25px] items-center justify-center"
            >
              <img
                className="h-[25px] w-[25px]"
                src={twitter}
                alt="twitter link"
              />
            </a>
            <a
              href="#"
              className="flex h-[25px] w-[25px] items-center justify-center"
            >
              <img
                className="h-[25px] w-[25px]"
                src={telegram}
                alt="telegram link"
              />
            </a>
            <a
              href="#"
              className="flex h-[25px] w-[25px] items-center justify-center"
            >
              <img
                className="h-[25px] w-[25px]"
                src={discord}
                alt="discord link"
              />
            </a>
          </div>
        </div>
      )}
    </footer>
  )
}

export default Footer
