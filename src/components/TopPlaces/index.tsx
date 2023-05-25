import avatar from '../../asset/big-avatar.png'
import { useTranslation } from 'react-i18next'

export const TopPlaces = () => {
  const { t } = useTranslation(['home'])
  const rating = [
    {
      place: 1,
      userId: '139812hud12j',
      winChance: '51.87%',
      totalWin: '62,571107',
      winRounds: '11 041',
      totalRounds: '21 287',
      funds: '120,78',
      winStatus: 'negative',
      avatar: avatar
    },
    {
      place: 2,
      userId: '139812hud12j',
      winChance: '59.23%',
      totalWin: '10 617,047296',
      winRounds: '10 576',
      totalRounds: '17 856',
      funds: '20 491,57',
      winStatus: 'positive',
      avatar: avatar
    },
    {
      place: 3,
      userId: '139812hud12j',
      winChance: '60.49%',
      totalWin: '3 050,363175',
      winRounds: '7 617',
      totalRounds: '12 592',
      funds: '5 886,97',
      winStatus: 'positive',
      avatar: avatar
    }
  ]

  return (
    <div>
      <div className="rating flex flex-col items-center justify-center gap-9">
        {rating.map((ratingPlace, index) => (
          <div
            key={index}
            className={`${ratingPlace.winStatus} rating-place flex flex-col items-center justify-start`}
          >
            <p className="place mb-[5px] mt-[15px] text-center text-[25px] font-semibold leading-[30px]">
              #{ratingPlace.place}
            </p>
            <div className="avatar-wrapper mb-2.5 flex items-center justify-center">
              <img
                className="avatar"
                src={ratingPlace.avatar}
                alt="user avatar"
              />
            </div>
            <p className="mb-[17px] text-[15px] font-semibold leading-[18px] text-white">
              {ratingPlace.userId}
            </p>
            <div className="w-full px-5">
              <div className="mb-[5px] flex items-center justify-between">
                <p className="text-xs leading-[15px] text-[#5B5B5B]">
                  {t('winChance')}
                </p>
                <p className="text-sm font-medium leading-[17px] text-white">
                  {ratingPlace.winChance}
                </p>
              </div>
              <div className="mb-[5px] flex items-center justify-between">
                <p className="text-xs leading-[15px] text-[#5B5B5B]">
                  {t('totalWin')}
                </p>
                <div>
                  <p className="total text-sm font-medium leading-[17px]">
                    {ratingPlace.totalWin}
                  </p>
                  <p className="text-right text-[10px] leading-3 text-[#5B5B5B]">
                    ${ratingPlace.funds}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-xs leading-[15px] text-[#5B5B5B]">
                  {t('roundsWIn')}
                </p>
                <p className="text-sm font-medium leading-[17px] text-white">
                  {ratingPlace.winRounds}/{ratingPlace.totalRounds}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
