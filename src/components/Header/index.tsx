import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import logo from '../../asset/logo.svg'
import coin from '../../asset/coin.svg'
import creditcard from '../../asset/creditcard.svg'
import { Link } from 'react-router-dom'
import { TranslateControls } from 'components/TranslateControl'
import { Chain } from 'components/Chain'
import { Nav } from 'components/Nav'
import mobileLogo from '../../asset/mobile-logo.svg'

function Header({ isMobile, howVisible }) {
  const { t } = useTranslation(['home'])
  const [sentence, setSentence] = useState<string>(t('connectWallet') || '')

  console.log(howVisible)

  useEffect(() => {
    // Split the sentence and extract the first word
    const firstWord: string = sentence.split(' ')[0]

    // Update the sentence based on the device type
    if (isMobile) {
      setSentence(firstWord)
    } else {
      setSentence(t('connectWallet') || '') // Reset the sentence to the original on desktop
    }
  }, [isMobile])
  return (
    <header className={`${howVisible ? 'sticky' : 'unStiky'} header w-full`}>
      <div className="flex items-center justify-between px-[13px] py-0 lg:px-[75px]">
        <div className="flex items-center justify-start gap-12">
          <Link to="/" className="logo-wrapper">
            <img
              className="h-[68px] max-w-[68px] lg:h-full lg:max-w-full"
              src={isMobile ? mobileLogo : logo}
              alt="lucky hamster logo"
            />
          </Link>
          {!isMobile && <Nav />}
        </div>
        <div className="flex items-center justify-start">
          {!isMobile && (
            <div className="mr-[19xp] flex items-center justify-start rounded-[30px] bg-[#211b2566] px-[30px]">
              <img className="mr-[5px]" src={coin} alt="coin" />
              <span className="text-dark_gray text-[15px] font-medium uppercase leading-[18px]">
                $2 000
              </span>
            </div>
          )}
          <TranslateControls isMobile={isMobile} />
          <Chain isMobile={isMobile} />
          <button className="flex h-[30px] max-w-[243px] items-center justify-center gap-3 whitespace-nowrap px-5 py-[7px] text-[13px] font-medium leading-4 text-white lg:h-11 lg:py-[18px] lg:text-[15px] lg:leading-[18px]">
            {sentence} {!isMobile && <img src={creditcard} alt="credit card" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
