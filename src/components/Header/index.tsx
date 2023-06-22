import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { TranslateControls } from '@/components/TranslateControl'
import { Nav } from '@/components/Nav'
import mobileLogo from '@/asset/mobile-logo.svg'
import ConnectIt from '@/web3/Provider'
import styles from './Header.module.css'
import { useAppSelector } from '@/redux/hooks'
import { selectPlatform } from '@/features/global/globalSlice'
import { HeaderProps } from './header'
import { logo } from '@/images'
import classNames from 'classnames'

const Header: React.FC<HeaderProps> = ({ howVisible }) => {
  const { t, i18n } = useTranslation(['translations'])
  const [sentence, setSentence] = useState<string>(t('connectWallet') || '')

  const [headerView, setHeaderView] = useState<boolean>(howVisible)

  const { isMobile } = useAppSelector(selectPlatform)

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

  const headerClass = classNames({
    [styles.sticky]: howVisible,
    unStiky: !howVisible,
    [styles['header']]: true
  })

  const logoClass = 'logo-wrapper'
  const headerImageClass = styles.headerImage
  const headerActionsClass = styles.headerActions

  return (
    <header className={headerClass}>
      <div className={styles.headerInner}>
        <div className={styles.headerImageWrap}>
          <Link to="/" className={logoClass}>
            <img
              className={headerImageClass}
              src={isMobile ? mobileLogo : logo}
              alt="lucky hamster logo"
            />
          </Link>
          {!isMobile && <Nav />}
        </div>
        <div className={headerActionsClass}>
          {/* {!isMobile && (
            <div className="mr-[19xp] flex items-center justify-start rounded-[30px] bg-header_bg_opacity40 px-[30px]">
              <img className="mr-[5px]" src={coin} alt="coin" />
              <span className="text-dark_gray text-[15px] font-medium uppercase leading-[18px]">
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
