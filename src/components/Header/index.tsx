import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { TranslateControls } from '@/components/TranslateControl'
import { Nav } from '@/components/Nav'
import logo from '../../asset/logo.svg'
import coin from '../../asset/coin.svg'
import mobileLogo from '../../asset/mobile-logo.svg'
import ConnectIt from '@/web3/Provider'

interface HeaderProps {
  isMobile: boolean
  howVisible: boolean
}

function Header({ isMobile, howVisible }: HeaderProps): JSX.Element {
  const { t, i18n } = useTranslation(['translations'])
  const [sentence, setSentence] = useState<string>(t('connectWallet') || '')
  const [headerView, setHeaderView] = useState<boolean>(howVisible)

  useEffect(() => {
    // Split the sentence and extract the first word
    const firstWord: string = sentence.split(' ')[0]

    // Update the sentence based on the device type
    if (isMobile) {
      setSentence(firstWord)
    } else {
      setSentence(t('connectWallet') || '') // Reset the sentence to the original on desktop
    }
  }, [isMobile, t, sentence])

  useEffect(() => {
    function handleScroll() {
      const scrolledContentHeight = window.innerHeight >= 1000 // Modify this condition as needed
      if (scrolledContentHeight) {
        setHeaderView(true)
      } else {
        setHeaderView(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const languageChanged = () => {
      setSentence(t('connectWallet') || '')
    }

    i18n.on('languageChanged', languageChanged)
    return () => {
      i18n.off('languageChanged', languageChanged)
    }
  }, [t, i18n])

  return (
    <header
      className={`${
        headerView ? 'sticky' : 'unStiky'
      } header flex min-h-[64px] w-full items-center`}
    >
      <div className="flex w-full items-center justify-between px-[13px] py-0 lg:px-[75px]">
        <div className="flex items-center justify-start gap-12">
          <Link to="/" className="logo-wrapper">
            <img
              className="lg:max-[120px] h-[68px]  max-w-[80px] md:max-w-[120px] lg:h-full"
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
              <span className="text-[15px] font-medium uppercase leading-[18px] text-dark_gray">
                $2 000
              </span>
            </div>
          )} */}
          <TranslateControls isMobile={isMobile} />

          <ConnectIt isMobile={isMobile} />
        </div>
      </div>
    </header>
  )
}

export default Header
