
import { useTranslation } from 'react-i18next'
import { CountDown } from 'components/Countdown'




export const Timer = () => {
  const { t } = useTranslation(['home'])




  return (
    <div className="timer relative z-10 mr-[30px] mt-[269px] lg:absolute lg:right-[47px] lg:top-[255px] lg:mr-0 lg:mt-0">
      <p className="mb-2.5 text-center text-[15px] leading-[18px] text-white">
        {t('gameStartsIn')}
      </p>
      <CountDown/>
    </div>
  )
}
