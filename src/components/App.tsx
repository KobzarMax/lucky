import Home from '@/pages/Home'
import Game from '@/pages/Game'
import Rules from '@/pages/Rules'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect, Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Nav } from './Nav'
import 'scroll-smooth'
import Leaderboard from '@/pages/Leaderboard'

function App(): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [howVisible, setHowVisible] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = (): void => {
      setIsMobile(window.innerWidth <= 1024)
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return (): void => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleEarnPartnerInViewChange = (inView: boolean): void => {
    const scrolledHeight = window.scrollY
    if (inView || scrolledHeight >= 1000) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }

  const handleHowItWorksInViewChange = (inHowView: boolean): void => {
    setHowVisible(inHowView)
  }

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

  return (
    <BrowserRouter>
      <Suspense fallback="loading">
        <Header howVisible={howVisible} isMobile={isMobile} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onEarnPartnerInViewChange={handleEarnPartnerInViewChange}
                onHowItWorksInViewChange={handleHowItWorksInViewChange}
                isMobile={isMobile}
              />
            }
          />
          <Route path="rules" element={<Rules />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="game" element={<Game isMobile={isMobile} />} />
        </Routes>
        <Footer isMobile={isMobile} />
        {isMobile && <Nav visible={visible} isMobile={isMobile} />}
      </Suspense>
    </BrowserRouter>
  )
}

export default App
