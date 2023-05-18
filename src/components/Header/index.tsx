import Sticky from 'react-stickynode'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../asset/logo.svg'
import avatar from '../../asset/avatar.png'
import coin from '../../asset/coin.svg'
import globe from '../../asset/globe.svg'
import creditcard from '../../asset/creditcard.svg'

function Header() {
  const { t, i18n } = useTranslation(['home'])
  const paidOuts = [
    {
      avatar: avatar,
      number: '90.111'
    }
  ]
  const languages = ['en', 'ru']
  const [isSticky, setIsSticky] = useState(false)
  const [language, setLanguage] = useState(languages[0])
  const [languageView, setLanguageView] = useState(false)
  function handleStateChange(status: Sticky.Status): void {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true)
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false)
    }
  }

  const toggleLanguage = (
    event: React.MouseEvent<HTMLParagraphElement>
  ): void => {
    const target = event.target as HTMLElement
    const parentNode = target.parentNode as HTMLElement
    if (parentNode.classList.contains('languages')) {
      if (target.innerHTML === 'en') {
        console.log('en')
        i18n.changeLanguage('en')
        setLanguage('en')
      } else if (target.innerHTML === 'ru') {
        i18n.changeLanguage('ru')
        setLanguage('ru')
      }
    }
    setLanguageView(!languageView)
  }

  return (
    <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
      <header
        className={`${
          isSticky ? 'sticky' : 'unStiky'
        } header flex h-20 w-full items-center justify-between pl-[75px] pr-[131px]`}
      >
        <div className="flex items-center justify-start gap-20">
          <img src={logo} alt="lucky hamster logo" />
          <div className="flex items-center justify-start">
            <div className="mr-4 flex flex-col items-start justify-start text-xs font-medium">
              <p className="text-white">{t('paidOut')}</p>
              <p className="text-dark_green">$1412412</p>
            </div>
            <div>
              {paidOuts.map((paidOut, index) => (
                <div
                  key={index}
                  className="paid-out flex items-center justify-start gap-2.5 rounded-[15px] py-2 pl-2.5 pr-[12.5px]"
                >
                  <img
                    className="h-[25px] w-[25px] rounded-full"
                    src={paidOut.avatar}
                    alt="avatar"
                  />
                  <span className="text-dark_green text-[13px] font-semibold leading-4">
                    {paidOut.number}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start">
          <div className="mr-[19xp] flex items-center justify-start rounded-[30px] bg-[#211b2566] px-[15px] py-[5px]">
            <img className="mr-[5px]" src={coin} alt="coin" />
            <span className="text-dark_gray text-[15px] font-medium uppercase leading-[18px]">
              $2 000
            </span>
          </div>
          <div className="relative mr-6 flex items-center justify-start">
            <img className="mr-[5px]" src={globe} alt="globe" />
            <p
              className="text-dark_gray cursor-pointer text-[15px] font-medium uppercase leading-[18px]"
              onClick={toggleLanguage}
            >
              {language}
            </p>
            {languageView && (
              <div className="languages absolute right-0 top-full rounded-md">
                <p
                  className="text-dark_gray mb-2 cursor-pointer text-[15px] font-medium uppercase leading-[18px]"
                  onClick={toggleLanguage}
                >
                  en
                </p>
                <p
                  className="text-dark_gray cursor-pointer text-[15px] font-medium uppercase leading-[18px]"
                  onClick={toggleLanguage}
                >
                  ru
                </p>
              </div>
            )}
          </div>
          <button className="flex h-11 max-w-[185px] items-center justify-center gap-3 whitespace-nowrap p-5 py-[18px] text-[15px] font-medium leading-[18px] text-white">
            {t('connectWallet')} <img src={creditcard} alt="credit card" />
          </button>
        </div>
      </header>
    </Sticky>
  )
}

export default Header
