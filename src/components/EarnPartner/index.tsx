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
    <div className="mt-[100px] flex items-start justify-between px-[100px]">
      <div>
        <h2 className="mb-[15px] text-[25px] font-bold leading-[30px] text-white">
          {t('earnLikePartner')}{' '}
          <span className="text-primary">{t('partner')}</span>
        </h2>
        <p className="mb-[29px] max-w-[565px] text-[15px] leading-[18px] text-white">
          {t('earnLikePartnerSubtitle1')}{' '}
          <span className="text-primary">{t('25%')} </span>
          {t('earnLikePartnerSubtitle2')}
        </p>
        <div className="flex items-center justify-start gap-[15px]">
          <TelegramButton />
          <DocumentsButton />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        {partnerPosibilities.map((posibility, index) => (
          <div
            key={index}
            className="posibility flex h-[103px] w-[465px] items-center justify-start gap-3 pb-5 pl-[70px] pr-[60px] pt-[21px]"
          >
            <img src={posibility.icon} alt={posibility.title} />
            <div>
              <p className="mb-[5px] pl-2.5 text-[17px] font-semibold capitalize leading-[21px] text-white">
                {posibility.title}
              </p>
              <p className="max-w-[235px] pl-2.5 text-[15px] leading-[18px] text-white">
                {posibility.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
