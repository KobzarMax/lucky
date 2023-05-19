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

  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const contentRefs = useRef<(HTMLParagraphElement | null)[]>([])

  const toggleAccordion = (index: number): void => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const faqItems: FAQItem[] = [
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Dolor morbi non arcu risus quis varius quam quisque. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Laoreet sit amet cursus sit amet dictum. Ipsum faucibus vitae aliquet nec ullamcorper sit. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultricies lacus sed turpis tincidunt id aliquet risus. Laoreet sit amet cursus sit. Habitant morbi tristique senectus et netus et malesuada. Feugiat pretium nibh ipsum consequat nisl vel. Est placerat in egestas erat imperdiet sed. Id diam maecenas ultricies mi. Porta lorem mollis aliquam ut. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Placerat in egestas erat imperdiet sed euismod. Tristique magna sit amet purus gravida quis blandit.r'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Dolor morbi non arcu risus quis varius quam quisque. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Laoreet sit amet cursus sit amet dictum. Ipsum faucibus vitae aliquet nec ullamcorper sit. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultricies lacus sed turpis tincidunt id aliquet risus. Laoreet sit amet cursus sit. Habitant morbi tristique senectus et netus et malesuada. Feugiat pretium nibh ipsum consequat nisl vel. Est placerat in egestas erat imperdiet sed. Id diam maecenas ultricies mi. Porta lorem mollis aliquam ut. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Placerat in egestas erat imperdiet sed euismod. Tristique magna sit amet purus gravida quis blandit.r'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Dolor morbi non arcu risus quis varius quam quisque. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Laoreet sit amet cursus sit amet dictum. Ipsum faucibus vitae aliquet nec ullamcorper sit. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultricies lacus sed turpis tincidunt id aliquet risus. Laoreet sit amet cursus sit. Habitant morbi tristique senectus et netus et malesuada. Feugiat pretium nibh ipsum consequat nisl vel. Est placerat in egestas erat imperdiet sed. Id diam maecenas ultricies mi. Porta lorem mollis aliquam ut. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Placerat in egestas erat imperdiet sed euismod. Tristique magna sit amet purus gravida quis blandit.r'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Dolor morbi non arcu risus quis varius quam quisque. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Laoreet sit amet cursus sit amet dictum. Ipsum faucibus vitae aliquet nec ullamcorper sit. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultricies lacus sed turpis tincidunt id aliquet risus. Laoreet sit amet cursus sit. Habitant morbi tristique senectus et netus et malesuada. Feugiat pretium nibh ipsum consequat nisl vel. Est placerat in egestas erat imperdiet sed. Id diam maecenas ultricies mi. Porta lorem mollis aliquam ut. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Placerat in egestas erat imperdiet sed euismod. Tristique magna sit amet purus gravida quis blandit.r'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Dolor morbi non arcu risus quis varius quam quisque. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Laoreet sit amet cursus sit amet dictum. Ipsum faucibus vitae aliquet nec ullamcorper sit. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultricies lacus sed turpis tincidunt id aliquet risus. Laoreet sit amet cursus sit. Habitant morbi tristique senectus et netus et malesuada. Feugiat pretium nibh ipsum consequat nisl vel. Est placerat in egestas erat imperdiet sed. Id diam maecenas ultricies mi. Porta lorem mollis aliquam ut. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Placerat in egestas erat imperdiet sed euismod. Tristique magna sit amet purus gravida quis blandit.r'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Dolor morbi non arcu risus quis varius quam quisque. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Laoreet sit amet cursus sit amet dictum. Ipsum faucibus vitae aliquet nec ullamcorper sit. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultricies lacus sed turpis tincidunt id aliquet risus. Laoreet sit amet cursus sit. Habitant morbi tristique senectus et netus et malesuada. Feugiat pretium nibh ipsum consequat nisl vel. Est placerat in egestas erat imperdiet sed. Id diam maecenas ultricies mi. Porta lorem mollis aliquam ut. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Placerat in egestas erat imperdiet sed euismod. Tristique magna sit amet purus gravida quis blandit.r'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Dolor morbi non arcu risus quis varius quam quisque. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Laoreet sit amet cursus sit amet dictum. Ipsum faucibus vitae aliquet nec ullamcorper sit. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultricies lacus sed turpis tincidunt id aliquet risus. Laoreet sit amet cursus sit. Habitant morbi tristique senectus et netus et malesuada. Feugiat pretium nibh ipsum consequat nisl vel. Est placerat in egestas erat imperdiet sed. Id diam maecenas ultricies mi. Porta lorem mollis aliquam ut. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Placerat in egestas erat imperdiet sed euismod. Tristique magna sit amet purus gravida quis blandit.r'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Dolor morbi non arcu risus quis varius quam quisque. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Laoreet sit amet cursus sit amet dictum. Ipsum faucibus vitae aliquet nec ullamcorper sit. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultricies lacus sed turpis tincidunt id aliquet risus. Laoreet sit amet cursus sit. Habitant morbi tristique senectus et netus et malesuada. Feugiat pretium nibh ipsum consequat nisl vel. Est placerat in egestas erat imperdiet sed. Id diam maecenas ultricies mi. Porta lorem mollis aliquam ut. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Placerat in egestas erat imperdiet sed euismod. Tristique magna sit amet purus gravida quis blandit.r'
    },
    {
      title: 'Lorem ipsum dolor sit amet, consectetur',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus. Dolor morbi non arcu risus quis varius quam quisque. Eleifend donec pretium vulputate sapien nec sagittis aliquam malesuada. Laoreet sit amet cursus sit amet dictum. Ipsum faucibus vitae aliquet nec ullamcorper sit. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Ultricies lacus sed turpis tincidunt id aliquet risus. Laoreet sit amet cursus sit. Habitant morbi tristique senectus et netus et malesuada. Feugiat pretium nibh ipsum consequat nisl vel. Est placerat in egestas erat imperdiet sed. Id diam maecenas ultricies mi. Porta lorem mollis aliquam ut. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Placerat in egestas erat imperdiet sed euismod. Tristique magna sit amet purus gravida quis blandit.r'
    }
  ]

  useEffect(() => {
    contentRefs.current = contentRefs.current.slice(0, faqItems.length)
  }, [faqItems.length])
  return (
    <div className="mb-[87px] mt-[60px]">
      <h2 className="mb-[30px] text-center text-[25px] font-bold leading-[30px] text-white">
        {t('faq')}
      </h2>
      <div className="mx-auto flex max-w-[965px] flex-col items-center justify-center gap-2.5">
        {faqItems.map((faqItem, index) => (
          <div
            key={index}
            className="faq-item h-[58px] w-full rounded-[10px] px-5"
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
