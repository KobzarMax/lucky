import { NavLink, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import exchange from '../../asset/ChartLineUp.svg'
import liquidity from '../../asset/CurrencyCircleDollar.svg'
import leaderboard from '../../asset/Trophy.svg'
import dots from '../../asset/DotsThreeOutline.svg'
import signOut from '../../asset/SignOut.svg'
import play from '../../asset/Play.svg'

interface NavProps {
  isMobile?: boolean
  visible?: boolean
}

export const Nav = ({ isMobile, visible }: NavProps): JSX.Element => {
  const { t } = useTranslation(['translations'])

  return (
    <div
      className={`${
        visible ? 'active' : ''
      } nav fixed bottom-[-1px] left-0 z-10 w-full lg:relative`}
    >
      <div className="flex items-center justify-center gap-[30px] py-[15px] pl-[13px] pr-3 lg:justify-start lg:gap-5 lg:py-0">
        <NavLink
          className="flex  flex-col items-center justify-start gap-[5px] text-[10px] leading-3 text-dark_gray lg:flex-row lg:text-[15px] lg:leading-[18px]"
          to={'exchange'}
        >
          <img src={exchange} alt="exchange" /> {t('exchange')}
        </NavLink>
        <NavLink
          className="flex  flex-col items-center justify-start gap-[5px] text-[10px] leading-3 text-dark_gray lg:flex-row lg:text-[15px] lg:leading-[18px]"
          to={'liquidity'}
        >
          <img src={liquidity} alt="liquidity" /> {t('liquidity')}
        </NavLink>
        {isMobile && (
          <Link
            to={'game'}
            className="play flex h-[50px] min-w-[50px] items-center justify-center rounded-full bg-primary"
          >
            <img className="relative z-20" src={play} alt="play" />
          </Link>
        )}
        <NavLink
          className="flex  flex-col items-center justify-center gap-[5px] text-center text-[10px] leading-3 text-dark_gray lg:flex-row lg:text-[15px] lg:leading-[18px]"
          to={'leaderboard'}
        >
          <img src={leaderboard} alt="leaderboard" /> {t('leaderboard')}
        </NavLink>
        <div className="more-link relative cursor-pointer after:absolute after:-right-0.5 after:top-0 after:h-[5px] after:w-[5px] after:rounded-full after:bg-primary after:content-['']">
          <img src={dots} alt="dots" />
          <div className="more-links absolute bottom-[200%] right-[-30px] z-10 flex flex-col items-start justify-start rounded-[15px] py-5 lg:bottom-auto lg:left-0 lg:right-auto lg:top-full">
            <NavLink
              className="flex items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px] text-dark_gray"
              to={'info'}
            >
              {t('info')}
            </NavLink>
            <NavLink
              className="flex items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px] text-dark_gray"
              to={'ifo'}
            >
              {t('IFO')}
            </NavLink>
            <NavLink
              className="justify-between_gray flex items-center whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px] text-dark_gray"
              to={'partnership-program'}
            >
              {t('partnership')}
            </NavLink>
            <NavLink
              className="flex items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px] text-dark_gray"
              to={'vote'}
            >
              {t('vote')}
            </NavLink>
            <NavLink
              className="flex w-full items-center justify-between whitespace-nowrap border-y border-[#292929] px-5 py-2.5 text-[15px] leading-[18px] text-dark_gray"
              to={'ratings'}
            >
              {t('ratings')}
            </NavLink>
            <NavLink
              className="justify-between_gray flex w-full items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px] text-dark_gray"
              to={'blog'}
            >
              {t('blog')} <img src={signOut} alt="sign out" />
            </NavLink>
            <NavLink
              className="justify-between_gray flex w-full items-center justify-between whitespace-nowrap px-5 py-2.5 text-[15px] leading-[18px] text-dark_gray"
              to={'rules'}
            >
              {t('documents')} <img src={signOut} alt="sign out" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
