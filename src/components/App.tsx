import Home from 'pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

function App() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
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
  return (
    <BrowserRouter>
      <Header isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />} />
      </Routes>
      <Footer isMobile={isMobile} />
    </BrowserRouter>
  )
}

export default App
