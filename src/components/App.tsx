import Home from 'pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Nav } from './Nav'

function App() {
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

  const handleEarnPartnerInViewChange = (inView) => {
    setVisible(inView)
  }

  const handleHowItWorksInViewChange = (inHowView) => {
    setHowVisible(inHowView)
  }

  return (
    <BrowserRouter>
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
      </Routes>
      <Footer isMobile={isMobile} />
      {isMobile && <Nav visible={visible} isMobile={isMobile} />}
    </BrowserRouter>
  )
}

export default App
