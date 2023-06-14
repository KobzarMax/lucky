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
  const { t } = useTranslation(['translations'])
  const location = useLocation()

  const isGameRoute = location.pathname === '/game'
  const isRulesRoute = location.pathname === '/rules'
  const isHomeRoute = location.pathname === '/'

  return (
    <footer
      className={`${isGameRoute ? 'hidden' : ''} ${
        isRulesRoute ? 'fixed bottom-0 w-full' : ''
      } footer`}
    >
      {!isGameRoute && (
        <div
          className={`footer-nav flex w-full flex-col items-center justify-start gap-[13px] ${
            !isGameRoute ? 'lg:ml-0' : 'lg:ml-[205px]'
          } lg:flex-row lg:gap-[30px]`}
        >
          <div
            className={`footer-nav-wrapper grid w-full grid-cols-2 gap-2 ${
              isGameRoute ? 'pb-[13px]' : 'pb-[100px]'
            } pl-[13px] pr-[12px] pt-[13px] lg:flex lg:items-center lg:justify-between lg:pb-5 lg:pl-[77px] lg:pr-[74px]`}
          >
            <Link className="logo" to={'/'}>
              <img
                className="max-w-[95px]"
                src={isMobile ? mobileLogo : logo}
                alt="lucky hamster logo"
              />
            </Link>

            <div className="footer-nav flex w-full flex-col items-center justify-start gap-[13px] lg:ml-[205px] lg:flex-row lg:gap-[30px]">
              <Link
                className="text-[15px] leading-[15px] text-dark_gray"
                to={'terms'}
              >
                {t('termsOfUse')}
              </Link>
              <Link
                className="text-[15px] leading-[15px] text-dark_gray"
                to={'privacy'}
              >
                {t('privacyPolicy')}
              </Link>
              <Link
                className="text-[15px] leading-[15px] text-dark_gray"
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
        </div>
      )}
    </footer>
  )
}

export default Footer
