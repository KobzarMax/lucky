import gameCards from '../asset/game-cards.svg'
import arrow from '../asset/arrowup.svg'
import questionMark from '../asset/Question.svg'
import trophy from '../asset/Trophy.svg'
import clockCounter from '../asset/ClockCounterClockwise.svg'
import { GameTimer } from '@/components/GameTimer'
import { Referals } from '@/components/Referals'
import { GameCard } from '@/components/GameCard'
import { Aside } from '@/components/Aside'
import { useState } from 'react'

function Game() {
  const [asideView, setAsideView] = useState(true)

  const toggleAside = () => {
    setAsideView(!asideView)
  }

  const games = [
    {
      status: 'ended',
      lastPrice: '$1.8848',
      fixedPrice: '$1.8905',
      presentPool: '4.9641',
      gameID: '#91999'
    },
    {
      status: 'active',
      lastPrice: '$1.8848',
      fixedPrice: '$1.8905',
      presentPool: '4.9641',
      gameID: '#92002'
    },
    {
      status: 'togo',
      lastPrice: '$1.8848',
      fixedPrice: '$1.8905',
      presentPool: '0.0001',
      gameID: '#92001'
    }
  ]

  return (
    <div id="game" className="relative overflow-hidden">
      <div className="pt-[90px]">
        <Referals />
        <div className="mb-[33px] flex items-center justify-end gap-[152px]">
          <div className="flex max-w-[150px] items-center justify-center gap-2.5 rounded-[49px] bg-[#2b2b2b99] px-5 py-1">
            <button className="arrow-slider-button">
              <img
                className="-rotate-90 cursor-pointer"
                src={arrow}
                alt="arrow"
              />
            </button>
            <img src={gameCards} alt="game cards" />
            <button className="arrow-slider-button">
              <img
                className="rotate-90 cursor-pointer"
                src={arrow}
                alt="arrow"
              />
            </button>
          </div>
          <div className="flex items-center justify-center gap-2.5 pr-[119px]">
            <GameTimer />
            <div className="flex cursor-pointer items-center justify-center rounded-[15px] bg-[#2b2b2b99] p-[14px] transition-all duration-300 hover:bg-[#2b2b2bcc]">
              <img src={questionMark} alt="question" />
            </div>
            <div className="flex cursor-pointer items-center justify-center rounded-[15px] bg-[#2b2b2b99] p-[14px] transition-all duration-300 hover:bg-[#2b2b2bcc]">
              <img src={trophy} alt="trophy" />
            </div>
            <div className="flex cursor-pointer items-center justify-center rounded-[15px] bg-[#2b2b2b99] p-[14px] transition-all duration-300 hover:bg-[#2b2b2bcc]">
              <img src={clockCounter} alt="clockCounter" />
            </div>
          </div>
        </div>
        <div className="mb-[52px] flex items-center justify-center gap-[41px]">
          {games.map((game, index) => (
            <GameCard key={index} cardData={game} />
          ))}
        </div>
      </div>
      {asideView && <Aside asideView={toggleAside} />}
    </div>
  )
}

export default Game
