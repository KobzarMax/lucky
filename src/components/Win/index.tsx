import trophy from '../../asset/trophy-in-hand.svg'
import Confetti from 'react-confetti'

interface WinProps {
  show: boolean
  toggleShow: () => void
}

export const Win = ({ show, toggleShow }: WinProps) => {
  return (
    <div className={`win-overlay w-full ${show ? 'hidden' : 'flex'}`}>
      <Confetti />
      <div className="win-item">
        <p className="text-basic text-dark_green mb-2.5 font-semibold">
          Ты выиграл!
        </p>
        <p className="max-w-[157px] text-center text-[13px] font-medium leading-4 text-white">
          It’s BNB Smart Chain only feature
        </p>
        <img className="mb-[15px]" src={trophy} alt="trophy" />
        <p className="mb-[15px] text-center text-[10px] font-medium leading-3 text-white">
          Our Pools, Limit, Trading Competition, Prediction, Lottery and NFTs
          features are currently available only on BNB Chain! Come over and join
          the community in the fun!
        </p>
        <button className="text-basic border-dark_green mb-[5px] flex w-full items-center justify-center rounded-[5px] border-2 py-[15px] font-semibold text-white">
          Switch to BNB Smart Chain
        </button>
        <button className="text-basic border-dark_green mb-2.5 flex w-full items-center justify-center rounded-[5px] border-2 py-[15px] font-semibold text-white">
          Disconnect Wallet
        </button>
        <button
          onClick={toggleShow}
          className="text-basic border-dark_green bg-dark_green flex w-full items-center justify-center rounded-[5px] border-2 py-[15px] font-semibold text-white"
        >
          Stay on Ethereum
        </button>
      </div>
    </div>
  )
}
