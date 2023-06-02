import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import logo from 'asset/logo.svg'
import coin from 'asset/coin.svg'
import creditcard from 'asset/creditcard.svg'
import { Link } from 'react-router-dom'
import { TranslateControls } from 'components/TranslateControl'
import { Chain } from 'components/Chain'
import ConnectIt from 'web3/Provider'
import { Nav } from 'components/Nav'
import mobileLogo from 'asset/mobile-logo.svg'

import { useAppSelector } from 'redux/hooks'
import { selectPlatform } from 'features/global/globalSlice'

function Header({ howVisible }) {
  const { t } = useTranslation(['home'])
  const [sentence, setSentence] = useState<string>(t('connectWallet') || '')

  const { isMobile } = useAppSelector(selectPlatform)

  console.log('mob', isMobile)

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
              className="h-[68px] max-w-[120px] lg:h-full lg:max-[120px]"
              src={isMobile ? mobileLogo : logo}
              alt="lucky hamster logo"
            />
          </Link>
        
          {!isMobile && <Nav />}
        </div>
        <div className="flex items-center justify-start">
          {/* {!isMobile && (
            <div className="mr-[19xp] flex items-center justify-start rounded-[30px] bg-[#211b2566] px-[30px]">
              <img className="mr-[5px]" src={coin} alt="coin" />
              <span className="text-dark_gray text-[15px] font-medium uppercase leading-[18px]">
                $2 000
              </span>
            </div>
          )} */}
          <TranslateControls isMobile={isMobile} />
          {/* {isConnected && <Chain isMobile={isMobile} />}  */}

          <ConnectIt isMobile={isMobile} />
        </div>
      </div>
    </header>
  )
}

export default Header
