import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import caret from '../../asset/CaretDown.svg'
import play from '../../asset/PlayCircle.svg'
import trophy from '../../asset/Trophy.svg'
import arrow from '../../asset/arrowup.svg'
import info from '../../asset/Info.svg'

interface Round {
  roundID: string
  status: string
  yourPosition: string
  yourWin: number
  sum: number
  lastPrice: number
  price: number
  priseFond: number
  up: number
  down: number
}

interface AsideRoundProps {
  round: Round
}

export const AsideRound = ({ round }: AsideRoundProps): JSX.Element => {
  const { t } = useTranslation(['home'])
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleAccordion = (): void => {
    setIsExpanded((prevState) => !prevState)
  }

  return (
    <div className="w-full">
      <button
        className={`round-header flex w-full items-center justify-between ${
          isExpanded ? '' : 'border-b border-[#313131]'
        } pb-[15px] pt-2.5`}
        onClick={toggleAccordion}
      >
        <div className="flex items-center justify-start gap-[17px]">
          <div className="flex flex-col items-center justify-center">
            <p className="text-[13px] leading-4 text-[#707070] ">
              {t('round')}
            </p>
            <span className="text-[15px] font-semibold leading-[18px] text-white">
              {round.roundID}
            </span>
          </div>
          {round.status === 'now' && (
            <div className="flex items-center justify-start gap-[5px]">
              <img src={play} alt="play" />{' '}
              <span className="text-dark_green text-[15px] leading-[18px]">
                {t('now')}
              </span>
            </div>
          )}
        </div>
        <img
          src={caret}
          alt="caret"
          className={`${
            isExpanded ? 'rotate-180' : ''
          } transition-transform duration-300`}
        />
      </button>
      <div
        className={`round-content ${
          isExpanded ? 'block' : 'hidden'
        } transition-all duration-300`}
      >
        <div className="mt-[23px] rounded-[10px] border border-[#252525] p-2.5">
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-basic font-semibold text-[#707070]">
              {t('history')}
            </p>
            <p className="text-basic text-dark_green flex items-center justify-center gap-[5px] font-semibold">
              {t('win')}
              <img className="trophy" src={trophy} alt="trophy" />
            </p>
          </div>
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[13px] leading-4 text-[#707070]">
              {t('yourChoice')}
            </p>
            <p className="bg-primary flex items-center justify-center gap-[5px] rounded-[5px] px-2.5 py-[5px] text-[13px] font-medium uppercase leading-4 text-white">
              <img className={`rotate-180`} src={arrow} alt="arrow" />
              {t('down')}
            </p>
          </div>
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[13px] leading-4 text-[#707070]">
              {t('yourPosition')}
            </p>
            <p className="text-[13px] font-medium leading-4 text-white">
              {round.yourPosition}
            </p>
          </div>
          <div className="mb-2.5 flex items-start justify-between">
            <p className="text-[13px] leading-4 text-[#707070]">
              {t('yourWin')}
            </p>
            <p className="text-dark_green flex flex-col items-end justify-start text-[13px] font-medium leading-4">
              {round.yourWin}{' '}
              <span className="text-[10px] leading-3 text-[#707070]">
                $1.76
              </span>
            </p>
          </div>
          <div className="mb-[33px] flex items-center justify-between">
            <p className="text-[13px] leading-4 text-[#707070]">{t('sum')}</p>
            <p className="flex items-center justify-center gap-[5px] text-[13px] font-medium leading-4 text-[#707070]">
              {round.sum} <img src={info} alt="info" />
            </p>
          </div>
        </div>
        <div className="border-dark_green mt-[21px] rounded-[10px] border p-2.5">
          <p className="text-[13px] font-semibold leading-4 text-[#707070]">
            {t('finalPrice')}
          </p>
          <div className="mb-5 flex items-center justify-between">
            <p className="text-basic text-dark_green font-semibold">
              {round.lastPrice}
            </p>
            <p className="bg-dark_green flex items-center justify-center gap-[5px] rounded-[5px] px-2.5 py-[5px] text-[13px] font-medium uppercase leading-4 text-white">
              <img src={arrow} alt="arrow" /> {t('up')}
            </p>
          </div>
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[13px] leading-4 text-[#707070]">{t('price')}</p>
            <p className="text-[13px] font-medium leading-4 text-white">
              {round.price}
            </p>
          </div>
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-[13px] font-medium leading-4 text-[#707070]">
              {t('priseFond')}
            </p>
            <p className="text-[13px] font-semibold leading-4 text-white">
              {round.priseFond}
            </p>
          </div>
          <div className="mb-[5px] flex items-center justify-between">
            <p className="text-[10px] leading-3 text-[#707070]">{t('up')}</p>
            <p className="text-[10px] font-semibold leading-3 text-white">
              {round.up}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[10px] leading-3 text-[#707070]">{t('down')}</p>
            <p className="text-[10px] font-semibold leading-3 text-white">
              {round.down}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
