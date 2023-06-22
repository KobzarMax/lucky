import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import classNames from 'classnames'
import styles from './DocumentsButton.module.css'
import { documents } from '@/images'

export const DocumentsButton: React.FC = () => {
  const { t } = useTranslation(['translations'])

  const linkClasses = classNames(styles['documents-link'])

  return (
    <Link to="rules" className={linkClasses}>
      {t('documents')} <img src={documents} alt="documents" />
    </Link>
  )
}
