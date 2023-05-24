import { useState } from 'react'
import bnb from '../../asset/bnb-logo.svg'
import caretDown from '../../asset/CaretDown.svg'

interface Chain {
  name: string
  icon: string
}

export const Chain = ({ isMobile }) => {
  const chains: Chain[] = [
    {
      name: 'BNB Smart Chain',
      icon: bnb
    },
    {
      name: 'ETH',
      icon: bnb
    },
    {
      name: 'Smart Chain',
      icon: bnb
    },
    {
      name: 'Lucky Hamster',
      icon: bnb
    },
    {
      name: 'BNB Chain',
      icon: bnb
    },
    {
      name: 'ETH Smart',
      icon: bnb
    },
    {
      name: 'BNB Smart',
      icon: bnb
    },
    {
      name: 'Lucky Hamster BNB',
      icon: bnb
    }
  ]

  const [selectedChain, setSelectedChain] = useState<Chain>(chains[0])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleToggleOpen = (): void => {
    setIsOpen(!isOpen)
  }

  const handleChainChange = (chain: Chain): void => {
    setSelectedChain(chain)
    setIsOpen(false)
  }

  return (
    <div className={`chains-wrapper relative inline-block text-left`}>
      <div className="mr-[18px] flex cursor-pointer items-center justify-start gap-[5px] lg:mr-[30px]">
        <img src={selectedChain.icon} alt={selectedChain.name} />
        {!isMobile && (
          <span className="text-medium text-dark_gray text-[15px] leading-[18px]">
            {selectedChain.name}
          </span>
        )}
        <img
          className={`transition-all duration-300`}
          src={caretDown}
          alt="Caret Down"
        />
      </div>
      <div className="options absolute -left-24 top-[50%] z-10 mt-4 w-52 py-[15px] pl-5 pr-2.5 lg:-left-4 lg:w-56">
        <div className="options-inner">
          {chains.map((chain: Chain, index: number) => (
            <div
              key={index}
              className={`option text-medium text-dark_gray flex cursor-pointer items-center justify-start gap-[5px] py-2 pr-4 text-[15px] leading-[18px] ${
                selectedChain.name === chain.name ? 'selected' : ''
              }`}
              onClick={() => handleChainChange(chain)}
            >
              <img src={chain.icon} alt={chain.name} />
              <span
                className={`${
                  selectedChain.name === chain.name
                    ? 'selected text-primary font-semibold'
                    : ''
                }`}
              >
                {chain.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
