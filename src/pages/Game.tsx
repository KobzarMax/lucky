import { Referals } from '@/components/Referals'
import { Aside } from '@/components/Aside'
import { Win } from '@/components/Win'
import React, { useState, useEffect, useRef } from 'react'
import { GameFooter } from '@/components/GameFooter'
import { GameContent } from '@/components/GameContent'

const Game: React.FC = () => {
  const [asideView, setAsideView] = useState<boolean>(false)
  const [show, setShow] = useState<boolean>(true)
  const asideRef = useRef<HTMLDivElement>(null)

  const [isWidgetVisible, setWidgetVisible] = useState(false)
  const [widgetHeight, setWidgetHeight] = useState<string>('216px')

  const increaseHeight = () => {
    if (isWidgetVisible) {
      setWidgetHeight('60vh')
    }
  }

  const decreaseHeight = () => {
    if (isWidgetVisible) {
      setWidgetHeight('20vh')
    }
  }

  const toggleWidget = () => {
    setWidgetVisible(!isWidgetVisible)
  }

  useEffect(() => {
    if (isWidgetVisible || !isWidgetVisible) {
      setWidgetHeight('216px')
    }
  }, [isWidgetVisible])

  const toggleShow = (): void => {
    setShow(!show)
  }

  const toggleAside = (): void => {
    setAsideView(!asideView)
    if (isWidgetVisible) {
      setWidgetVisible(false)
      setWidgetHeight('216px')
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (
      asideRef.current &&
      !asideRef.current.contains(event.target as Node) &&
      asideView === true
    ) {
      setAsideView(false)
    }
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      handleClickOutside(event)
    }

    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [asideView])

  return (
    <div
      id="game"
      className="relative max-h-[92vh] min-h-[90vh] overflow-hidden sm:max-h-[100vh] lg:min-h-[100vh]"
    >
      <Win toggleShow={toggleShow} show={show} />
      <div className="pt-[90px]">
        <Referals />
        <GameContent
          toggleWidget={toggleWidget}
          toggleAside={toggleAside}
          isWidgetVisible={isWidgetVisible}
          toggleShow={toggleShow}
          setWidgetVisible={setWidgetVisible}
        />
      </div>
      <GameFooter
        increaseHeight={increaseHeight}
        widgetHeight={widgetHeight}
        decreaseHeight={decreaseHeight}
        isWidgetVisible={isWidgetVisible}
        setWidgetVisible={setWidgetVisible}
      />
      <div ref={asideRef}>
        <Aside asideView={asideView} toggleView={toggleAside} />G
      </div>
    </div>
  )
}

export default Game
