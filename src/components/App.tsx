import Home from '@/pages/Home'
import Game from '@/pages/Game'
import Rules from '@/pages/Rules'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect, Suspense } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { platform } from '../features/global/globalSlice'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Nav } from '../components/Nav'
import { ModalInfo } from '../components/ModalInfo'
import 'scroll-smooth'
import Leaderboard from '@/pages/Leaderboard'

function App(): JSX.Element {
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
          <Route
            path="leaderboard"
            element={<Leaderboard isMobile={isMobile} />}
          />
          <Route path="game" element={<Game isMobile={isMobile} />} />
        </Routes>
        <Footer isMobile={isMobile} />
        <ModalInfo />
        {isMobile && <Nav visible={visible} isMobile={isMobile} />}
      </Suspense>
    </BrowserRouter>
  )
}

export default App

// const [counter, setCounter] = useState(216)
// const intervalRef = useRef<any>(null)
// const windowSize = useRef([window.innerWidth, window.innerHeight])

// const [coords, setCoords] = useState({ x: 0, y: 216 })

// useEffect(() => {
//   const handleWindowMouseMove = (event: any) => {
//     setCoords({
//       x: event.clientX,
//       y: windowSize.current[1] - event.clientY
//     })
//   }

//   window.addEventListener('mousemove', handleWindowMouseMove)

//   return () => {
//     window.removeEventListener('mousemove', handleWindowMouseMove)
//   }
// }, [])

// useEffect(() => {
//   return () => stopCounter() // when App is unmounted we should stop counter
// }, [])

// const widgetHeight = counter

// const startCounter = () => {
//   if (intervalRef.current) return
//   if (isWidgetVisible) {
//     intervalRef.current = setInterval(() => {
//       setCoords((prevCoords) => {
//         const newY = windowSize.current[1] - prevCoords.y
//         setCounter(newY) // Update counter with the current mouse position
//         console.log(prevCoords)
//         return prevCoords
//       })
//     }, 100)
//   }
// }

// const stopCounter = () => {
//   if (intervalRef.current) {
//     clearInterval(intervalRef.current)
//     intervalRef.current = null
//   }
// }
