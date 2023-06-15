import { Link } from 'react-router-dom'
import documents from '@/asset/Files.svg'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'
import React from 'react'

export const DocumentsButton: React.FC = () => {
  const { t } = useTranslation(['translations'])
  return (
    <Link to="rules" className={styles['documents-link']}>
      {t('documents')} <img src={documents} alt="documents" />
    </Link>
  )
}
