import { useTranslation } from 'react-i18next'
import avatar from '../../asset/avatar.png'

interface LeaderTableProps {
  isMobile?: boolean
}

export const LeaderTable = ({ isMobile }: LeaderTableProps) => {
  const { t } = useTranslation(['translations'])

  const users = [
    {
      place: 1,
      userId: '139812hud12j',
      winChance: '60,15%',
      totalWin: '2 336,731979',
      winRounds: '7 519',
      totalRounds: '12 501',
      funds: '4 512, 78',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 2,
      userId: '139812hud12j',
      winChance: '60,15%',
      totalWin: '2 336,731979',
      winRounds: '7 519',
      totalRounds: '12 501',
      funds: '4 512, 78',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 3,
      userId: '139812hud12j',
      winChance: '60,15%',
      totalWin: '2 336,731979',
      winRounds: '7 519',
      totalRounds: '12 501',
      funds: '4 512, 78',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 4,
      userId: '139812hud12j',
      winChance: '60,15%',
      totalWin: '2 336,731979',
      winRounds: '7 519',
      totalRounds: '12 501',
      funds: '4 512, 78',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 5,
      userId: '139812hud12j',
      winChance: '60,15%',
      totalWin: '2 336,731979',
      winRounds: '7 519',
      totalRounds: '12 501',
      funds: '4 512, 78',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 6,
      userId: '139812hud12j',
      winChance: '60,15%',
      totalWin: '2 336,731979',
      winRounds: '7 519',
      totalRounds: '12 501',
      funds: '4 512, 78',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 7,
      userId: '139812hud12j',
      winChance: '60,15%',
      totalWin: '2 336,731979',
      winRounds: '7 519',
      totalRounds: '12 501',
      funds: '4 512, 78',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 8,
      userId: '139812hud12j',
      winChance: '60,15%',
      totalWin: '2 336,731979',
      winRounds: '7 519',
      totalRounds: '12 501',
      funds: '4 512, 78',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 9,
      userId: '139812hud12j',
      winChance: '60,15%',
      totalWin: '2 336,731979',
      winRounds: '7 519',
      totalRounds: '12 501',
      funds: '4 512, 78',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 10,
      userId: '139812hud12j',
      winChance: '60,15%',
      totalWin: '2 336,731979',
      winRounds: '7 519',
      totalRounds: '12 501',
      funds: '4 512, 78',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 11,
      userId: '139812hud12j',
      winChance: '60,15%',
      totalWin: '2 336,731979',
      winRounds: '7 519',
      totalRounds: '12 501',
      funds: '4 512, 78',
      winStatus: 'positive',
      avatar: avatar
    }
  ]

  return (
    <div>
      <div className="overflow-x-auto">
        {!isMobile && (
          <div className="table-wrapper mx-auto my-[75.5px] h-[420px]  max-h-[420px] w-full max-w-[1162px] overflow-y-scroll">
            <table className="relative w-full border-collapse">
              <thead>
                <tr>
                  <th className="sticky top-0 whitespace-nowrap px-[35px] py-[30px] text-xs font-normal uppercase leading-[15px] text-primary"></th>
                  <th className="sticky top-0 py-[30px] pr-[45px] text-xs font-normal uppercase leading-[15px] text-primary">
                    {t('user')}
                  </th>
                  <th className="sticky top-0 whitespace-nowrap px-[35px] py-[30px] text-xs font-normal uppercase leading-[15px] text-primary">
                    {t('totalWin')}
                  </th>
                  <th className="sticky top-0 whitespace-nowrap px-[35px] py-[30px] text-xs font-normal uppercase leading-[15px] text-primary">
                    {t('winChance')}
                  </th>
                  <th className="sticky top-0 whitespace-nowrap px-[35px] py-[30px] text-xs font-normal uppercase leading-[15px] text-primary">
                    {t('roundsWIn')}
                  </th>
                  <th className="sticky top-0 whitespace-nowrap px-[35px] py-[30px] text-xs font-normal uppercase leading-[15px] text-primary">
                    {t('playedRounds')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index} className={`${user.winStatus}`}>
                    <td className="pb-[15px] pt-6 text-center text-[18px] font-semibold leading-[18px] text-primary">
                      #{user.place}
                    </td>
                    <td className="flex items-center justify-start pb-[15px] pt-6">
                      <img src={user.avatar} alt="user avatar" />
                      <span className=" ml-[5px] text-[15px] font-semibold leading-[18px] text-white">
                        {user.userId}
                      </span>
                    </td>
                    <td className="pb-[15px] pr-[45px] pt-6">
                      <p className="total ml-auto mr-0 w-fit text-right text-sm font-medium leading-[17px]">
                        {user.totalWin}
                      </p>
                      <p className="text-right text-[10px] leading-3 text-[#5B5B5B]">
                        ${user.funds}
                      </p>
                    </td>
                    <td className="pb-[15px] pt-6 text-center text-sm font-medium leading-[17px] text-white">
                      {user.winChance}
                    </td>
                    <td className="pb-[15px] pt-6 text-center text-sm font-medium leading-[17px] text-white">
                      {user.winRounds}
                    </td>
                    <td className="pb-[15px] pt-6 text-center text-sm font-medium leading-[17px] text-white">
                      {user.totalRounds}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {isMobile && (
          <div className="table-mobile-leaders my-[75.5px] overflow-x-auto pl-[13px] pr-3">
            <div className="table-wrapper">
              {users.map((user, index) => (
                <div
                  key={index}
                  className={`${user.winStatus} border-b border-dark_gray`}
                >
                  <div className="flex items-center justify-between p-4">
                    <div className="text-center text-[18px] font-semibold leading-[18px] text-primary">
                      #{user.place}
                    </div>
                    <div className="flex items-center justify-between">
                      <img src={user.avatar} alt="user avatar" />
                      <span className=" ml-[5px] text-[15px] font-semibold leading-[18px] text-white">
                        {user.userId}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className="whitespace-nowrap text-xs font-normal uppercase leading-[15px] text-primary">
                      {t('winChance')}
                    </div>
                    <div className="text-center text-sm font-medium leading-[17px] text-white">
                      {user.winChance}
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className="whitespace-nowrap text-xs font-normal uppercase leading-[15px] text-primary">
                      {t('totalWin')}
                    </div>
                    <div>
                      <p className="total ml-auto mr-0 w-fit text-right text-sm font-medium leading-[17px]">
                        {user.totalWin}
                      </p>
                      <p className="text-right text-[10px] leading-3 text-[#5B5B5B]">
                        ${user.funds}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div className="whitespace-nowrap text-xs font-normal uppercase leading-[15px] text-primary">
                      {t('roundsWIn')}
                    </div>
                    <div className="text-center text-sm font-medium leading-[17px] text-white">
                      {user.winRounds}/{user.totalRounds}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
