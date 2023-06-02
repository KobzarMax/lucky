import Home from 'pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { platform } from 'features/global/globalSlice'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { Nav } from 'components/Nav'
import { ModalInfo } from 'components/ModalInfo'
import 'scroll-smooth'

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [visible, setVisible] = useState<boolean>(false)
  const [howVisible, setHowVisible] = useState<boolean>(false)
  const dispatch = useAppDispatch()

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

  const handleEarnPartnerInViewChange = (inView: any) => {
    setVisible(inView)
  }

  const handleHowItWorksInViewChange = (inHowView: any) => {
    setHowVisible(inHowView)
  }

  useEffect(() => {
    window.addEventListener('scroll', smoothScroll)
    return () => {
      window.removeEventListener('scroll', smoothScroll)
    }
  }, [])

  const smoothScroll = () => {
    window.scroll({
      top: window.scrollY,
      behavior: 'smooth'
    })
  }

  return (
    <BrowserRouter>
      <Header howVisible={howVisible} />

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
      </Routes>

      <Footer isMobile={isMobile} />
      <ModalInfo />
      {isMobile && <Nav visible={visible} isMobile={isMobile} />}
    </BrowserRouter>
  )
}

export default App
