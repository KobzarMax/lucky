import createAccount from '../../asset/UserCirclePlus.svg'
import creditCard from '../../asset/creditcard-hexagen.svg'
import startPortfolio from '../../asset/Copyright.svg'
import { useTranslation } from 'react-i18next'
import { TelegramButton } from 'components/TelegramButton'
import { DocumentsButton } from 'components/DocumentsButton'

export const EarnPartner = () => {
  const { t } = useTranslation(['home'])
  const partnerPosibilities = [
    {
      icon: createAccount,
      title: 'Create your account',
      text: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      icon: creditCard,
      title: 'Connect bank account',
      text: 'Lorem ipsum dolor sit amet, consectetur'
    },
    {
      icon: startPortfolio,
      title: 'Start build portfolio',
      text: 'Lorem ipsum dolor sit amet, consectetur'
    }
  ]
  return (
    <div className="relative mt-[104px] flex flex-col items-start justify-between px-0 lg:mt-[100px] lg:flex-row lg:px-[100px]">
      <div className="max-w-full">
        <h2 className="mb-[11px] text-xl font-bold leading-6 text-white lg:mb-[15px] lg:text-[25px] lg:leading-[30px]">
          {t('earnLikePartner')}{' '}
          <span className="text-primary">{t('partner')}</span>
        </h2>
        <p className="mb-[15px] max-w-[565px] text-[15px] leading-[18px] text-white lg:mb-[29px]">
          {t('earnLikePartnerSubtitle1')}{' '}
          <span className="text-primary">{t('25%')} </span>
          {t('earnLikePartnerSubtitle2')}
        </p>
        <div className="flex flex-col items-start justify-start gap-[15px] lg:flex-row lg:items-center">
          <TelegramButton />
          <DocumentsButton />
        </div>
      </div>
      <div className="mt-[39px] flex w-full flex-row items-center justify-start gap-20 overflow-x-auto lg:mt-0 lg:flex-col lg:justify-center lg:gap-5 lg:overflow-x-hidden">
        {partnerPosibilities.map((posibility, index) => (
          <div
            key={index}
            className="posibility relative flex h-[334px] w-full min-w-[265px] max-w-[265px] flex-col items-center justify-center gap-3 px-0 py-5 lg:h-[103px] lg:w-[465px]  lg:min-w-[465px] lg:max-w-[465px] lg:flex-row lg:justify-start lg:pl-[70px] lg:pr-[60px]"
          >
            <img
              className="relative z-10"
              src={posibility.icon}
              alt={posibility.title}
            />
            <div className="relative z-10">
              <p className="mb-[5px] pl-2.5 text-center text-[17px] font-semibold leading-[21px] text-white lg:text-left">
                {posibility.title}
              </p>
              <p className="max-w-[235px] pl-2.5 text-center text-[15px] leading-[18px] text-white lg:text-left">
                {posibility.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
