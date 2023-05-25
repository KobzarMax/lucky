import { useTranslation } from 'react-i18next'
import avatar from '../../asset/avatar.png'

export const LeaderTable = () => {
  const { t } = useTranslation(['home'])

  const users = [
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
    }
  ]

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="mx-auto my-[75.5px] w-full max-w-[1162px]">
          <thead>
            <tr>
              <th className="text-primary whitespace-nowrap px-[35px] py-[30px] text-xs font-normal uppercase leading-[15px]"></th>
              <th className="text-primary py-[30px] pr-[45px] text-xs font-normal uppercase leading-[15px]">
                {t('user')}
              </th>
              <th className="text-primary whitespace-nowrap px-[35px] py-[30px] text-xs font-normal uppercase leading-[15px]">
                {t('totalWin')}
              </th>
              <th className="text-primary whitespace-nowrap px-[35px] py-[30px] text-xs font-normal uppercase leading-[15px]">
                {t('winChance')}
              </th>
              <th className="text-primary whitespace-nowrap px-[35px] py-[30px] text-xs font-normal uppercase leading-[15px]">
                {t('roundsWIn')}
              </th>
              <th className="text-primary whitespace-nowrap px-[35px] py-[30px] text-xs font-normal uppercase leading-[15px]">
                {t('playedRounds')}
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className={`${user.winStatus}`}>
                <td className="text-primary pb-[15px] pt-6 text-center text-[18px] font-semibold leading-[18px]">
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
    </div>
  )
}
