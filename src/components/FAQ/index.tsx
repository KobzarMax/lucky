import { useTranslation } from 'react-i18next'
import React, { useState, useRef, useEffect } from 'react'
import classNames from 'classnames'
import styles from './FAQ.module.css'
import { FAQItem } from './faq'
import { caret, questionCircle } from '@/images'

export const FAQ: React.FC = () => {
  const { t } = useTranslation(['translations'])
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
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLParagraphElement | null)[]>([])

  const toggleAccordion = (index: number): void => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqItems.length)
  }, [faqItems.length])

  const faqWrapClasses = classNames(styles.faqWrap)
  const faqItemClasses = (index: number) =>
    classNames(styles['faq-item'], styles.faqItem, {
      'pb-[17px]': openIndex === index,
      'pb-0': openIndex !== index
    })

  return (
    <div className={faqWrapClasses}>
      <h2 className={styles.faqTitle}>{t('faq')}</h2>
      <div className={styles.faqItems}>
        {faqItems.map((faqItem, index) => (
          <div key={index} className={faqItemClasses(index)}>
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
                src={caret}
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
