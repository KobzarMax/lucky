import { Link } from 'react-router-dom'
import logo from '../../asset/logo.svg'
import { useTranslation } from 'react-i18next'
import twitter from '../../asset/TwitterLogo.svg'
import telegram from '../../asset/TelegramLogo.svg'
import discord from '../../asset/DiscordLogo.svg'

function Footer() {
  const { t } = useTranslation(['home'])
  return (
    <footer className="footer">
      <div className="flex items-center justify-between pl-[38px] pr-[17.7px]">
        <img src={logo} alt="lucky hamster logo" />
        <div className="ml-[205px] flex w-full items-center justify-start gap-[30px]">
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
        <div className="flex items-center justify-start gap-[15px]">
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
    </footer>
  )
}

export default Footer
