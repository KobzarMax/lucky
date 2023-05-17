import React from 'react'
import { useTranslation } from 'react-i18next'
import chartup from '../../asset/chartup.svg'
import chartdown from '../../asset/chartdown.svg'
import arrowup from '../../asset/arrowup.svg'
import avatar from '../../asset/avatar.png'
import down from '../../asset/down.svg'

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
    }
  ]
  return (
    <div>
      <p>
        {t('latest')} {t('games')}
      </p>
      <div>
        {latestGames.map((latestGame, index) => (
          <div key={index} className={`${latestGame.status}`}>
            <div>
              <div>
                <img src={latestGame.avatar} alt="avatar" />
                {latestGame.id}
              </div>
              <div>
                <img src={arrowup} alt="status arrow " />
              </div>
            </div>
            <div>
              <div>
                <p>{latestGame.funds}</p>
                <p>{latestGame.percents}</p>
              </div>
              {latestGame.status === 'up' && (
                <img src={chartup} alt="chartup" />
              )}
              {latestGame.status === 'down' && (
                <img src={chartdown} alt="chartdown" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LatestGames
