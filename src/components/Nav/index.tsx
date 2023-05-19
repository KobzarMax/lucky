import { NavLink } from 'react-router-dom'
import exchange from '../../asset/ChartLineUp.svg'
import liquidity from '../../asset/CurrencyCircleDollar.svg'
import leaderboard from '../../asset/Trophy.svg'
import dots from '../../asset/DotsThreeOutline.svg'

export const Nav = () => {
  return (
    <div>
      <div className="flex items-center justify-start gap-5">
        <NavLink
          className="flex items-center justify-start gap-[5px] text-[15px] leading-[18px] text-dark_gray"
          to={'exchange'}
        >
          <img src={exchange} alt="exchange" /> Exchange
        </NavLink>
        <NavLink
          className="flex items-center justify-start gap-[5px] text-[15px] leading-[18px] text-dark_gray"
          to={'liquidity'}
        >
          <img src={liquidity} alt="liquidity" /> Exchange
        </NavLink>
        <NavLink
          className="flex items-center justify-start gap-[5px] text-[15px] leading-[18px] text-dark_gray"
          to={'leaderboard'}
        >
          <img src={leaderboard} alt="leaderboard" /> Leaderboard
        </NavLink>
        <div className="after:bg- more-link relative cursor-pointer after:absolute after:-right-0.5 after:top-0 after:h-[5px] after:w-[5px] after:rounded-full after:bg-primary after:content-['']">
          <img src={dots} alt="dots" />
        </div>
      </div>
    </div>
  )
}
