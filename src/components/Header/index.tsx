import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { TranslateControls } from '@/components/TranslateControl'
import { Chain } from '@/components/Chain'
import { Nav } from '@/components/Nav'
import { ethers } from 'ethers'
import logo from '../../asset/logo.svg'
import coin from '../../asset/coin.svg'
import creditcard from '../../asset/creditcard.svg'
import mobileLogo from '../../asset/mobile-logo.svg'

interface HeaderProps {
  isMobile: boolean
  howVisible: boolean
}

function Header({ isMobile, howVisible }: HeaderProps): JSX.Element {
  const { t, i18n } = useTranslation(['translations'])
  const [sentence, setSentence] = useState<string>(t('connectWallet') || '')
  const [headerView, setHeaderView] = useState<boolean>(howVisible)
  const [connectedWallet, setConnectedWallet] = useState<ethers.Signer | null>(
    null
  )

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

  async function connectWallet() {
    try {
      if (window.ethereum) {
        // Request access to the user's accounts
        await window.ethereum.request({ method: 'eth_requestAccounts' })

        // Create an ethers.js provider using the current window.ethereum object
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        // Get the signer (connected wallet) from the provider
        const signer = provider.getSigner()
        setConnectedWallet(signer)

        // Perform any desired operations with the connected wallet
        const balance = await signer.getBalance()
        console.log('Wallet balance:', ethers.utils.formatEther(balance))
      } else {
        console.error('Please install MetaMask or use a Web3-enabled browser.')
      }
    } catch (error) {
      console.error('Error connecting wallet:', error)
    }
  }

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
    <header className={`${headerView ? 'sticky' : 'unStiky'} header w-full`}>
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
              <span className="text-[15px] font-medium uppercase leading-[18px] text-dark_gray">
                $2 000
              </span>
            </div>
          )}
          <TranslateControls isMobile={isMobile} />
          <Chain isMobile={isMobile} />
          <button
            onClick={connectWallet}
            className="flex h-[30px] max-w-[243px] items-center justify-center gap-3 whitespace-nowrap px-5 py-[7px] text-[13px] font-medium leading-4 text-white lg:h-11 lg:py-[18px] lg:text-[15px] lg:leading-[18px]"
          >
            {sentence} {!isMobile && <img src={creditcard} alt="credit card" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
