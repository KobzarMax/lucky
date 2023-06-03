import React from 'react'
import { useTranslation } from 'react-i18next'
import chartup from 'asset/chartup.svg'
import chartdown from 'asset/chartdown.svg'
import arrowup from 'asset/arrowup.svg'
import avatar from 'asset/hamster.png'
import down from 'asset/down.svg'
import border from 'asset/latest-games-border.svg'

const LatestGames: React.FC = () => {
  const { t } = useTranslation(['translations'])
  const latestGames = [
    {
      id: '0x139812hud1',
      funds: '$132',
      percents: '336%',
      status: 'up'
    },
    {
      id: '0x7b1a99db99',
      funds: '$512',
      percents: '387%',
      status: 'down'
    },
    {
      id: '0x24564c36f8',
      funds: '$48.379',
      percents: '298%',
      status: 'up'
    },
    {
      id: '0xdf40a43ea0',
      funds: '$726',
      percents: '153%',
      status: 'down'
    },
    {
      id: '0xa54b95de9a',
      funds: '$972',
      percents: '213%',
      status: 'up'
    },
    {
      id: '0xe19c41c8de',
      funds: '$395',
      percents: '157%',
      status: 'down'
    },
    {
      id: '0x671827faff',
      funds: '$70',
      percents: '300%',
      status: 'up'
    },
    {
      id: '0x8f992d12a4',
      funds: '$490',
      percents: '276%',
      status: 'down'
    },
    {
      id: '0x690ad5d477',
      funds: '$586',
      percents: '243%',
      status: 'down'
    },
    {
      id: '0x6d57e05cc2',
      funds: '$33',
      percents: '105%',
      status: 'down'
    },
    {
      id: '0x48ff68216f',
      funds: '$885',
      percents: '356%',
      status: 'up'
    },
    {
      id: '0x7b8bece2d0',
      funds: '$664',
      percents: '32%',
      status: 'down'
    },
    {
      id: '0xdeca0a29b7',
      funds: '$285',
      percents: '376%',
      status: 'up'
    },
    {
      id: '0x51f8e7e3b1',
      funds: '$828',
      percents: '337%',
      status: 'down'
    },
    {
      id: '0xf7a8f9634c',
      funds: '$109',
      percents: '353%',
      status: 'up'
    },
    {
      id: '0x5866ea8257',
      funds: '$482',
      percents: '242%',
      status: 'down'
    },
    {
      id: '0xbea24e1448',
      funds: '$233',
      percents: '331%',
      status: 'up'
    },
    {
      id: '0x536d52dd5d',
      funds: '$55',
      percents: '299%',
      status: 'down'
    },
    {
      id: '0x980a15d00a',
      funds: '$78',
      percents: '349%',
      status: 'down'
    },
    {
      id: '0x62075a9e2',
      funds: '$201',
      percents: '374%',
      status: 'down'
    }
  ]

  return (
    <div className="z-index-[999] relative mt-[27px] lg:mt-[151px]">
      <p className="mb-[17px] text-[17px] font-bold capitalize leading-[21px] text-white lg:mb-4 lg:text-xl lg:leading-[24px]">
        <img className="inline-block" src={down} alt="down" /> {t('latest')}{' '}
        <span className="lowercase text-primary">{t('games')}</span>
      </p>
      <div className="ticker-wrap">
        <div className="ticker flex items-center justify-between gap-[35px]">
          {latestGames.map((latestGame, index) => (
            <div
              key={index}
              className={`${latestGame.status} ticker__item hexagon relative h-[150px] min-w-[265px] px-5 pb-[26.5px] pt-[33px]`}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center justify-start gap-[5px]">
                  <img width={25} src={avatar} alt="Lucky Hamster icon" />
                  <span className="text-[15px] font-semibold leading-[18px]">
                    {latestGame.id}
                  </span>
                </div>
                <div className="status-arrow">
                  <img src={arrowup} alt="status arrow " />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="mb-[5px] text-xl font-semibold leading-6">
                    {latestGame.funds}
                  </p>
                  <p className="text-[13px] leading-[16px] text-dark_gray">
                    {latestGame.percents}
                  </p>
                </div>
                {latestGame.status === 'up' && (
                  <img src={chartup} alt="chartup" />
                )}
                {latestGame.status === 'down' && (
                  <img src={chartdown} alt="chartdown" />
                )}
              </div>
              <img
                className="absolute bottom-0 left-0"
                src={border}
                alt="border"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LatestGames
