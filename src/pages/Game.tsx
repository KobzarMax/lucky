import gameCards from '../asset/game-cards.svg'
import arrow from '../asset/arrowup.svg'
import { GameTimer } from 'components/GameTimer'

function Game() {
  return (
    <div id="game">
      <div className="pt-[90px]">
        <div className="flex items-center justify-end gap-[152px]">
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
          <div>
            <GameTimer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game
