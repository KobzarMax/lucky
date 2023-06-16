import { FC, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import MobileDetect from 'mobile-detect'
import styles from '@/components/index.module.css'

const Rules: FC = () => {
  const { t } = useTranslation(['translations'])
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    const calculateHeight = () => {
      const windowHeight = window.innerHeight
      const md = new MobileDetect(window.navigator.userAgent)
      const isMobile = md.mobile()
      let calculatedHeight = windowHeight - 250

      if (isMobile) {
        calculatedHeight -= 100
      }
      setHeight(calculatedHeight)
    }

    calculateHeight()

    window.addEventListener('resize', calculateHeight)

    return () => {
      window.removeEventListener('resize', calculateHeight)
    }
  }, [])

  return (
    <div className={styles.rulesWrap}>
      <div className={styles.rulesInner}>
        <h1 className={styles.rulesTitle}>{t('rulesTitle')}</h1>

        <div
          style={{ height: `${height}px` }}
          className={styles.rulesTextWrapper}
        >
          <p className={styles.rulesSubtitle}>{t('rulesSubtitle')}</p>
          <p className={styles.rulesCategory}>{t('basicRules')}</p>
          <p className={styles.rulesText}>{t('basicRules11')}</p>
          <p className={styles.rulesText}>{t('basicRules12')}</p>
          <p className={styles.rulesText}>{t('basicRules13')}</p>
          <p className={styles.rulesCategory}>{t('rightsTitle')}</p>
          <p className={styles.rulesText}>{t('rights21')}</p>
          <p className={styles.rulesText}>{t('rights22')}</p>
          <p className={styles.rulesText}>{t('rights23')}</p>
          <p className={styles.rulesCategory}>{t('confTitle')}</p>
          <p className={styles.rulesText}>{t('rights21')}</p>
          <p className={styles.rulesText}>{t('rights22')}</p>
          <p className={styles.rulesText}>{t('rights23')}</p>
        </div>
      </div>
    </div>
  )
}

export default Rules
