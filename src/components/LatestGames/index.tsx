import React from 'react'
import { useTranslation } from 'react-i18next'
import chartup from '../../asset/chartup.svg'
import chartdown from '../../asset/chartdown.svg'
import arrowup from '../../asset/arrowup.svg'
import avatar from '../../asset/avatar.png'
import down from '../../asset/down.svg'
import border from '../../asset/latest-games-border.svg'

const LatestGames: React.FC = () => {
  const { t } = useTranslation(['home'])
  const latestGames = [
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '$30.1428',
      percents: '200%',
      status: 'up'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '$30.1428',
      percents: '200%',
      status: 'up'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '$30.1428',
      percents: '200%',
      status: 'up'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '$30.1428',
      percents: '200%',
      status: 'up'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '$30.1428',
      percents: '200%',
      status: 'up'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '$30.1428',
      percents: '200%',
      status: 'up'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '$30.1428',
      percents: '200%',
      status: 'up'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '$30.1428',
      percents: '200%',
      status: 'up'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    },
    {
      avatar: avatar,
      id: '139812hud12j',
      funds: '-$21.634',
      percents: '200%',
      status: 'down'
    }
  ]
  return (
    <div className="mt-[27px] lg:mt-[151px]">
      <p className="mb-[17px] text-[17px] font-bold capitalize leading-[21px] text-white lg:mb-4 lg:text-xl lg:leading-[24px]">
        <img className="inline-block" src={down} alt="down" /> {t('latest')}{' '}
        <span className="text-primary lowercase">{t('games')}</span>
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
                  <img src={latestGame.avatar} alt="avatar" />
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
                  <p className="text-dark_gray text-[13px] leading-[16px]">
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
