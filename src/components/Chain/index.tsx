import matic from '../../asset/matic-logo.svg'
// import caretDown from '../../asset/CaretDown.svg'
import { useNetwork } from 'wagmi'

interface Chain {
  name: string
  //icon: string
}

export const Chain = ({ isMobile }: any) => {
  const { chain, chains } = useNetwork()

  // const chains: Chain[] = [
  //   {
  //     name: 'BNB Smart Chain',
  //     icon: bnb
  //   },
  // ]

  // const [selectedChain, setSelectedChain] = useState(chain?.name)
  // const [isOpen, setIsOpen] = useState<boolean>(false)

  // const handleToggleOpen = (): void => {
  //   setIsOpen(!isOpen)
  // }

  // const handleChainChange = (chain: Chain): void => {
  //   setSelectedChain(chain)
  //   setIsOpen(false)
  // }

  return (
    <div className={`chains-wrapper relative inline-block text-left`}>
      <div className="mr-[18px] flex cursor-pointer items-center justify-start gap-[5px] lg:mr-[30px]">
        <img className="w-[20px]" src={matic} alt={chain?.name} />
        {!isMobile && (
          <span className="text-medium text-[15px] leading-[18px] text-dark_gray">
            {chain && chain.name}
          </span>
        )}
        {/* <img
          className={`transition-all duration-300`}
          src={caretDown}
          alt="Caret Down"
        /> */}
      </div>
      {/* <div className="options absolute -left-24 top-[50%] z-10 mt-4 w-52 py-[15px] pl-5 pr-2.5 lg:-left-4 lg:w-56">
        <div className="options-inner">
          {chains.map((chain: Chain, index: number) => (
            <div
              key={index}
              className={`option text-medium flex cursor-pointer items-center justify-start gap-[5px] py-2 pr-4 text-[15px] leading-[18px] text-dark_gray ${
                selectedChain.name === chain.name ? 'selected' : ''
              }`}
              onClick={() => handleChainChange(chain)}
            >
              <img src={chain.icon} alt={chain.name} />
              <span
                className={`${
                  selectedChain.name === chain.name
                    ? 'selected font-semibold text-primary'
                    : ''
                }`}
              >
                {chain.name}
              </span>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}
