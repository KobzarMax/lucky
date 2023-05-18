import documents from '../../asset/files.svg'
import { useTranslation } from 'react-i18next'

export const DocumentsButton = () => {
  const { t } = useTranslation(['home'])
  return (
    <a
      href="#"
      className="documents-link flex max-w-[200px] h-12 items-center justify-center gap-2.5 py-[15px] pl-[25px] pr-[29px] text-[15px] font-semibold leading-[18px] text-white"
    >
      {t('documents')} <img src={documents} alt="documents" />
    </a>
  )
}
