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
    <div className="mt-[57px] lg:mt-[97.5px]">
      <h2 className="mb-2.5  text-center text-xl font-bold leading-6 text-white lg:mb-[19px] lg:text-[25px] lg:leading-[30px]">
        {t('howWorks')}{' '}
        <span className="text-primary">{t('howWorksName')}</span> ?
      </h2>
      <p className="mx-auto mb-1.5 max-w-[765px] text-center text-[15px] leading-[18px] text-white lg:mb-[30px]">
        {t('howWorksSubtitle')}
      </p>
      <div className="flex items-center justify-start gap-[30px] lg:justify-center">
        {descriptions.map((description, index) => (
          <div
            key={index}
            className="description h-[334px] min-w-[265px] px-2.5 pb-[72px] pt-[30px]"
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
