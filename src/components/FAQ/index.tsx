import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'
import caretDown from 'asset/CaretDown.svg'
import questionCircle from 'asset/faqicon.svg'

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
    <div className="mb-[79px] mt-[39px] lg:mb-[87px] lg:mt-[60px]">
      <h2 className="mb-6 text-center text-xl font-bold leading-6 text-white lg:mb-[30px] lg:text-[25px] lg:leading-[30px]">
        {t('faq')}
      </h2>
      <div className="mx-auto flex max-w-[965px] flex-col items-center justify-center gap-2.5">
        {faqItems.map((faqItem, index) => (
          <div
            key={index}
            className="faq-item w-full rounded-[10px] px-2.5 lg:px-5"
          >
            <div
              className="flex cursor-pointer items-center justify-between py-[17px]"
              onClick={() => toggleAccordion(index)}
              style={{
                borderRadius: openIndex === index ? '10px 10px 0 0' : '10px'
              }}
            >
              <div className="flex items-center justify-start gap-2.5">
                <img src={questionCircle} alt="question" />
                <p className="text-[15px] font-semibold leading-[18px] text-white">
                  {faqItem.title}
                </p>
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
              className="text-[15px] leading-[18px] text-white"
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
