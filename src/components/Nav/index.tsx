import { NavLink } from 'react-router-dom'
import exchange from '../../asset/ChartLineUp.svg'
import liquidity from '../../asset/CurrencyCircleDollar.svg'
import leaderboard from '../../asset/Trophy.svg'
import dots from '../../asset/DotsThreeOutline.svg'
import signOut from '../../asset/SignOut.svg'
import { useTranslation } from 'react-i18next'

export const Nav = () => {
  const { t } = useTranslation(['home'])
  return (
    <div>
      <div className="flex items-center justify-start gap-5">
        <NavLink
          className="text-dark_gray flex items-center justify-start gap-[5px] text-[15px] leading-[18px]"
          to={'exchange'}
        >
          <img src={exchange} alt="exchange" /> {t('exchange')}
        </NavLink>
        <NavLink
          className="text-dark_gray flex items-center justify-start gap-[5px] text-[15px] leading-[18px]"
          to={'liquidity'}
        >
          <img src={liquidity} alt="liquidity" /> {t('liquidity')}
        </NavLink>
        <NavLink
          className="text-dark_gray flex items-center justify-start gap-[5px] text-[15px] leading-[18px]"
          to={'leaderboard'}
        >
          <img src={leaderboard} alt="leaderboard" /> {t('leaderboard')}
        </NavLink>
        <div className="after:bg- more-link after:bg-primary relative cursor-pointer after:absolute after:-right-0.5 after:top-0 after:h-[5px] after:w-[5px] after:rounded-full after:content-['']">
          <img src={dots} alt="dots" />
          <div className="more-links absolute bottom-full right-0 z-10 flex flex-col items-start justify-start rounded-[15px] py-5 lg:left-0 lg:top-full">
            <NavLink
              className="text-dark_gray flex items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'info'}
            >
              {t('info')}
            </NavLink>
            <NavLink
              className="text-dark_gray flex items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'ifo'}
            >
              {t('IFO')}
            </NavLink>
            <NavLink
              className="text-dark_gray justify-between_gray flex items-center whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'partnership-program'}
            >
              {t('partnership')}
            </NavLink>
            <NavLink
              className="text-dark_gray flex items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'vote'}
            >
              {t('vote')}
            </NavLink>
            <NavLink
              className="text-dark_gray flex w-full items-center justify-between whitespace-nowrap border-y border-[#292929] px-5 py-2.5 text-[15px] leading-[18px]"
              to={'ratings'}
            >
              {t('ratings')}
            </NavLink>
            <NavLink
              className="text-dark_gray justify-between_gray flex w-full items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'blog'}
            >
              {t('blog')} <img src={signOut} alt="sign out" />
            </NavLink>
            <NavLink
              className="text-dark_gray justify-between_gray flex w-full items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px]"
              to={'docs'}
            >
              {t('documents')} <img src={signOut} alt="sign out" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
