import { useTranslation } from 'react-i18next'
import decentralize from '../../asset/deventralize.svg'
import transperancy from '../../asset/transperancy.svg'
import safety from '../../asset/safety.svg'
import tag from '../../asset/Tag.svg'

export const HowItWorks = () => {
  const { t } = useTranslation(['home'])
  const descriptions = [
    {
      icon: decentralize,
      title: 'Decentralize',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: transperancy,
      title: 'Transperancy',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: safety,
      title: 'Safety',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      icon: tag,
      title: 'Low commisions',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ]
  return (
    <div className="mt-[97.5px]">
      <h2 className="mb-[19px] text-center text-[25px] font-bold leading-[30px] text-white">
        {t('howWorks')}{' '}
        <span className="text-primary">{t('howWorksName')}</span> ?
      </h2>
      <p className="mx-auto mb-[30px] max-w-[765px] text-center text-[15px] leading-[18px] text-white">
        {t('howWorksSubtitle')}
      </p>
      <div className="flex items-center justify-center gap-[30px]">
        {descriptions.map((description, index) => (
          <div
            key={index}
            className="description h-[334px] w-[265px] px-2.5 pb-[72px] pt-[30px]"
          >
            <img
              className="mx-auto mb-[30px]"
              src={description.icon}
              alt={description.title}
            />
            <p className="mb-[5px] pl-2.5 text-[17px] font-semibold capitalize leading-[21px] text-white">
              {description.title}
            </p>
            <p className="max-w-[235px] pl-2.5 text-[15px] leading-[18px] text-white">
              {description.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
