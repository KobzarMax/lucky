import avatar from '../../asset/avatar.png'
import { useTranslation } from 'react-i18next'

export const Referals = () => {
  const { t } = useTranslation(['translations'])
  const referals = [
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    },
    {
      avatar: avatar,
      bonus: '12',
      invited: '13.05.2023'
    }
  ]

  return (
    <div>
      <h2 className="mx-auto mb-2.5 max-w-[1202px] text-[15px] font-semibold leading-[18px] text-white">
        {t('yourReferals')}
      </h2>
      <div className="ticker-wrap">
        <div className="ticker mb-16 flex items-center justify-between gap-[15px]">
          {referals.map((referal, index) => (
            <div
              key={index}
              className="ticker__item flex items-center justify-center gap-2.5"
            >
              <img src={referal.avatar} alt="avatar" />
              <div>
                <p className="text-[13px] leading-4 text-[#5B5B5B]">
                  {t('yourBonus')}{' '}
                  <span className="font-semibold text-primary">
                    {referal.bonus}$
                  </span>
                </p>
                <p className="text-[13px] leading-4 text-[#5B5B5B]">
                  {t('invited')}{' '}
                  <span className="text-white">{referal.invited}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
