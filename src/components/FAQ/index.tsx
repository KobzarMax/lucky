import { useTranslation } from 'react-i18next'
import { useState, useRef, useEffect } from 'react'
import caretDown from '../../asset/CaretDown.svg'
import questionCircle from '../../asset/faqicon.svg'

interface FAQItem {
  title: string
  text: string
}

export const FAQ = (): JSX.Element => {
  const { t } = useTranslation(['home'])

  const [openIndices, setOpenIndices] = useState<number[]>([])
  const contentRefs = useRef<(HTMLParagraphElement | null)[]>([])

  const toggleAccordion = (index: number): void => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index))
    } else {
      setOpenIndices([...openIndices, index])
    }
  }

  const faqItems = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos tempora libero sunt praesentium, vitae repellat pariatur earum tempore magni.'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos tempora libero sunt praesentium, vitae repellat pariatur earum tempore magni.'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos tempora libero sunt praesentium, vitae repellat pariatur earum tempore magni.'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos tempora libero sunt praesentium, vitae repellat pariatur earum tempore magni.'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos tempora libero sunt praesentium, vitae repellat pariatur earum tempore magni.'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos tempora libero sunt praesentium, vitae repellat pariatur earum tempore magni.'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos tempora libero sunt praesentium, vitae repellat pariatur earum tempore magni.'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos tempora libero sunt praesentium, vitae repellat pariatur earum tempore magni.'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos tempora libero sunt praesentium, vitae repellat pariatur earum tempore magni.'
    }
  ]

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqItems.length)
  }, [faqItems.length])
  return (
    <div className="mb-[100px] mt-[60px]">
      <h2 className="mb-[30px] text-center text-[25px] font-bold leading-[30px] text-white">
        {t('faq')}
      </h2>
      <div className="mx-auto flex max-w-[965px] flex-col items-center justify-center gap-2.5">
        {faqItems.map((faqItem, index) => (
          <div key={index} className="faq-item w-full rounded-[10px] px-5 pb-4">
            <div
              className="flex cursor-pointer items-center justify-between py-[17px]"
              onClick={() => toggleAccordion(index)}
              style={{
                borderRadius: openIndices.includes(index)
                  ? '10px 10px 0 0'
                  : '10px'
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
                className={`
                  ${
                    openIndices.includes(index) ? 'rotate-180' : 'rotate-0'
                  } transition-all duration-300
                `}
              />
            </div>
            <p
              ref={(el) => (contentRefs.current[index] = el)}
              className="text-[15px] leading-[18px] text-white"
              style={{
                maxHeight: openIndices.includes(index)
                  ? `${contentRefs.current[index]?.scrollHeight}px`
                  : '0',
                opacity: openIndices.includes(index) ? 1 : 0,
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
