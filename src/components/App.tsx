import Home from '@/pages/Home'
import Game from '@/pages/Game'
import Rules from '@/pages/Rules'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React, { useState, useEffect, Suspense, FC } from 'react'
import { useAppDispatch } from '@/redux/hooks'
import { platform } from '@/features/global/globalSlice'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Nav } from '@/components/Nav'
import { ModalInfo } from '@/components/ModalInfo'
import 'scroll-smooth'
import Leaderboard from '@/pages/Leaderboard'

const App: FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [howVisible, setHowVisible] = useState<boolean>(false)
  const dispatch = useAppDispatch()
  const isRulesRoute = location.pathname === '/rules'

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 1024)
      dispatch(platform(window.innerWidth <= 1024))
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return (): void => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (isMobile && isRulesRoute) {
      setVisible(true)
    }
  }, [isMobile, isRulesRoute])

  useEffect(() => {
    window.addEventListener('scroll', smoothScroll)
    return () => {
      window.removeEventListener('scroll', smoothScroll)
    }
  }, [])

  const smoothScroll = (): void => {
    window.scroll({
      top: window.scrollY,
      behavior: 'smooth'
    })
  }

  const handleEarnPartnerInViewChange = (inView: any) => {
    setVisible(inView)
  }

  const handleHowItWorksInViewChange = (inHowView: any) => {
    setHowVisible(inHowView)
  }

  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Header howVisible={howVisible} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onEarnPartnerInViewChange={handleEarnPartnerInViewChange}
                onHowItWorksInViewChange={handleHowItWorksInViewChange}
              />
            }
          />
          <Route path="rules" element={<Rules />} />
          <Route
            path="leaderboard"
            element={<Leaderboard isMobile={isMobile} />}
          />
          <Route path="game" element={<Game />} />
        </Routes>
        <Footer visible={visible} isMobile={isMobile} />
        <ModalInfo />
        <div className={isMobile ? '' : 'hidden'}>
          <Nav visible={visible} isMobile={isMobile} />
        </div>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
