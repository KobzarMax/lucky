import Sticky from 'react-stickynode'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../asset/logo.svg'
import coin from '../../asset/coin.svg'
import creditcard from '../../asset/creditcard.svg'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { TranslateControls } from 'components/TranslateControl'
import { Chain } from 'components/Chain'
import { Nav } from 'components/Nav'

function Header() {
  const { t } = useTranslation(['home'])
  const [isSticky, setIsSticky] = useState(false)
  const location = useLocation()
  function handleStateChange(status: Sticky.Status): void {
    if (status.status === Sticky.STATUS_FIXED) {
      setIsSticky(true)
    } else if (status.status === Sticky.STATUS_ORIGINAL) {
      setIsSticky(false)
    }
  }

  return (
    <Sticky innerZ={1001} top={0} onStateChange={handleStateChange}>
      <header
        className={`${
          location.pathname !== '/' || isSticky ? 'sticky' : 'unStiky'
        } header w-full`}
      >
        <div className="flex items-center justify-between px-[75px]">
          <div className="flex items-center justify-start gap-12">
            <Link to="/" className="logo-wrapper">
              <img src={logo} alt="lucky hamster logo" />
            </Link>
            <Nav />
          </div>
          <div className="flex items-center justify-start">
            <div className="mr-[19xp] flex items-center justify-start rounded-[30px] bg-[#211b2566] px-[30px]">
              <img className="mr-[5px]" src={coin} alt="coin" />
              <span className="text-[15px] font-medium uppercase leading-[18px] text-dark_gray">
                $2 000
              </span>
            </div>
            <TranslateControls />
            <Chain />
            <button className="flex h-11 max-w-[243px] items-center justify-center gap-3 whitespace-nowrap p-5 py-[18px] text-[15px] font-medium leading-[18px] text-white">
              {t('connectWallet')} <img src={creditcard} alt="credit card" />
            </button>
          </div>
        </div>
      </header>
    </Sticky>
  )
}

export default Header
