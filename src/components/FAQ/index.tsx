import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'
import caretDown from '@/asset/CaretDown.svg'
import questionCircle from '@/asset/faqicon.svg'
import styles from './index.module.css'

interface FAQItem {
  title: string
  text: string
}

export const FAQ = (): JSX.Element => {
  const { t } = useTranslation(['translations'])

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLParagraphElement | null)[]>([])

  const toggleAccordion = (index: number): void => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const faqItems: FAQItem[] = [
    {
      title: t('faqText1'),
      text: t('faqDescription1')
    },
    {
      title: t('faqText2'),
      text: t('faqDescription2')
    },
    {
      title: t('faqText3'),
      text: t('faqDescription3')
    },
    {
      title: t('faqText4'),
      text: t('faqDescription4')
    },
    {
      title: t('faqText5'),
      text: t('faqDescription5')
    },
    {
      title: t('faqText6'),
      text: t('faqDescription6')
    }
  ]

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqItems.length)
  }, [faqItems.length])
  return (
    <div className={styles.faqWrap}>
      <h2 className={styles.faqTitle}>{t('faq')}</h2>
      <div className={styles.faqItems}>
        {faqItems.map((faqItem, index) => (
          <div
            key={index}
            className={`${styles['faq-item']} ${styles.faqItem} ${
              openIndex === index ? 'pb-[17px]' : 'pb-0'
            }`}
          >
            <div
              className={styles.toggleAccordion}
              onClick={() => toggleAccordion(index)}
              style={{
                borderRadius: openIndex === index ? '10px 10px 0 0' : '10px'
              }}
            >
              <div className={styles.faqTitleWrap}>
                <img src={questionCircle} alt="question" />
                <p className={styles.faqItemTitle}>{faqItem.title}</p>
              </div>
              <img
                src={caretDown}
                alt="caret"
                style={{
                  transform: openIndex === index ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.3s ease'
                }}
              />
            </div>
            <p
              ref={(el) => (contentRefs.current[index] = el)}
              className={styles.faqItemText}
              style={{
                maxHeight:
                  openIndex === index
                    ? `${contentRefs.current[index]?.scrollHeight}px`
                    : '0',
                opacity: openIndex === index ? 1 : 0,
                transition: 'max-height 0.3s ease, opacity 0.3s ease',
                overflow: 'hidden'
              }}
            >
              {faqItem.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
