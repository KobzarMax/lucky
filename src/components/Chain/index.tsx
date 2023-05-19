import React, { useState } from 'react'
import bnb from '../../asset/bnb-logo.svg'
import caretDown from '../../asset/CaretDown.svg'

interface Chain {
  name: string
  icon: string
}

export const Chain: React.FC = () => {
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
      <div className="mr-[30px] flex cursor-pointer items-center justify-start gap-[5px]">
        <img src={selectedChain.icon} alt={selectedChain.name} />
        <span className="text-medium text-[15px] leading-[18px] text-dark_gray">
          {selectedChain.name}
        </span>
        <img
          className={`transition-all duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          src={caretDown}
          alt="Caret Down"
        />
      </div>
      {isOpen && (
        <div className="options absolute -left-4 z-10 mt-4 w-56 py-1">
          {chains.map((chain: Chain, index: number) => (
            <div
              key={index}
              className={`option text-medium flex cursor-pointer items-center justify-start gap-[5px] px-4 py-2 text-[15px] leading-[18px] text-dark_gray ${
                selectedChain.name === chain.name ? 'selected' : ''
              }`}
              onClick={() => handleChainChange(chain)}
            >
              <img src={chain.icon} alt={chain.name} />
              <span>{chain.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
