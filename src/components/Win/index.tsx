import trophy from '../../asset/trophy-in-hand.svg'
import Confetti from 'react-confetti'
import { useTranslation } from 'react-i18next'

interface WinProps {
  show: boolean
  toggleShow: () => void
}

export const Win = ({ show, toggleShow }: WinProps) => {
  const { t } = useTranslation(['translations'])
  return (
    <div className={`win-overlay w-full ${show ? 'hidden' : 'flex'}`}>
      <Confetti />
      <div className="win-item">
        <p className="text-basic mb-2.5 font-semibold text-dark_green">
          {t('youWon')}
        </p>
        <p className="max-w-[157px] text-center text-[13px] font-medium leading-4 text-white">
          {t('bnbOnlyFeature')}
        </p>
        <img className="mb-[15px]" src={trophy} alt="trophy" />
        <p className="mb-[15px] text-center text-[10px] font-medium leading-3 text-white">
          {t('winText')}
        </p>
        <button className="text-basic mb-[5px] flex w-full items-center justify-center rounded-[5px] border-2 border-dark_green py-[15px] font-semibold text-white">
          {t('switchToBnb')}
        </button>
        <button className="text-basic mb-2.5 flex w-full items-center justify-center rounded-[5px] border-2 border-dark_green py-[15px] font-semibold text-white">
          {t('disconnectWallet')}
        </button>
        <button
          onClick={toggleShow}
          className="text-basic flex w-full items-center justify-center rounded-[5px] border-2 border-dark_green bg-dark_green py-[15px] font-semibold text-white"
        >
          {t('stayOnEthereum')}
        </button>
      </div>
    </div>
  )
}
