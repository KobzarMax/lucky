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
      name: 'BNB Smart Chain',
      icon: bnb
    },
    {
      name: 'Lucky Hamster',
      icon: bnb
    },
    {
      name: 'BNB Smart Chain',
      icon: bnb
    },
    {
      name: 'ETH',
      icon: bnb
    },
    {
      name: 'BNB Smart Chain',
      icon: bnb
    },
    {
      name: 'Lucky Hamster',
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
    <div
      className={`relative inline-block text-left`}
      onClick={handleToggleOpen}
    >
      <div className="mr-[18px] flex cursor-pointer items-center justify-start gap-[5px] lg:mr-[30px]">
        <img src={selectedChain.icon} alt={selectedChain.name} />
        {!isMobile && (
          <span className="text-medium text-dark_gray text-[15px] leading-[18px]">
            {selectedChain.name}
          </span>
        )}
        <img
          className={`transition-all duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          src={caretDown}
          alt="Caret Down"
        />
      </div>
      {isOpen && (
        <div className="options absolute -left-4 z-10 mt-4 w-full py-[15px] pl-5 pr-2.5 lg:w-56">
          <div className="options-inner">
            {chains.map((chain: Chain, index: number) => (
              <div
                key={index}
                className={`option text-medium text-dark_gray jc flex cursor-pointer items-center justify-center gap-[5px] py-2 pr-4 text-[15px] leading-[18px] lg:justify-start ${
                  selectedChain.name === chain.name ? 'selected' : ''
                }`}
                onClick={() => handleChainChange(chain)}
              >
                <img src={chain.icon} alt={chain.name} />
                {!isMobile && <span>{chain.name}</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
