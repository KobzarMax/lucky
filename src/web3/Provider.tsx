import '@rainbow-me/rainbowkit/styles.css'
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  connectorsForWallets
} from '@rainbow-me/rainbowkit'
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import creditcard from 'asset/creditcard.svg'

const { chains, provider } = configureChains(
  [polygonMumbai],
  [alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_ID }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: import.meta.env.VITE_WALLETCONNECT_NAME,
  projectId: import.meta.env.VITE_WALLETCONNECT_ID,
  chains
})
const config = createConfig({
  autoConnect: true,
  connectors,
  provider
})

const ConnectIt = ({ isMobile }) => {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: '#FF1B5E',
          accentColorForeground: 'white',
          borderRadius: 'large',
          fontStack: 'rounded',
          overlayBlur: 'small'
        })}
      >
        <ConnectButton.Custom>
          {({
            account,
            chain,
            openAccountModal,
            openChainModal,
            openConnectModal,
            authenticationStatus,
            mounted
          }) => {
            // Note: If your app doesn't use authentication, you
            // can remove all 'authenticationStatus' checks
            const ready = mounted && authenticationStatus !== 'loading'
            const connected =
              ready &&
              account &&
              chain &&
              (!authenticationStatus ||
                authenticationStatus === 'authenticated')

            return (
              <div
                {...(!ready && {
                  'aria-hidden': true,
                  style: {
                    opacity: 0,
                    pointerEvents: 'none',
                    userSelect: 'none'
                  }
                })}
              >
                {(() => {
                  if (!connected) {
                    return (
                      <button
                        className="flex h-[30px] max-w-[243px] items-center justify-center gap-3 whitespace-nowrap px-5 py-[7px] text-[13px] font-medium leading-4 text-white lg:h-11 lg:py-[18px] lg:text-[15px] lg:leading-[18px] hover:scale-105 ease-out duration-300"
                        onClick={openConnectModal}
                        type="button"
                      >
                        Connect Wallet
                        {!isMobile && (
                          <img src={creditcard} alt="credit card" />
                        )}
                      </button>
                    )
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        className="flex h-[30px] max-w-[243px]  items-center justify-center gap-3 whitespace-nowrap px-5 py-[7px] text-[13px] font-medium leading-4 text-white lg:h-11 lg:py-[18px] lg:text-[15px] lg:leading-[18px] hover:scale-105 ease-out duration-300"
                        style={{ backgroundColor: 'red' }}
                        onClick={openChainModal}
                        type="button"
                      >
                        Wrong network
                      </button>
                    )
                  }

                  return (
                    <div className='flex justify-center items-center'>
                      <div
                        onClick={openChainModal}
                        className={`chains-wrapper relative inline-block text-left`}
                      >
                        <div className="mr-[18px] flex cursor-pointer items-center justify-start gap-[5px] lg:mr-[30px]">
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 25,
                                height: 25,
                                borderRadius: 999,
                                overflow: 'hidden',
                                marginRight: 4
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? 'Chain icon'}
                                  src={chain.iconUrl}
                                  style={{ width: 25, height: 25 }}
                                />
                              )}
                            </div>
                          )}

                          {!isMobile && (
                            <span className="text-medium text-dark_gray text-[15px] leading-[18px]">
                              {chain.name}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        className="flex h-[30px] max-w-[243px] items-center justify-center gap-3 whitespace-nowrap px-5 py-[7px] text-[13px] font-medium leading-4 text-white lg:h-11 lg:py-[18px] lg:text-[15px] lg:leading-[18px] hover:scale-105 ease-out duration-300"
                        onClick={openAccountModal}
                        type="button"
                      >
                        {account.displayName}
                        {!isMobile && (
                          <img src={creditcard} alt="Lucky Hamster wallet" />
                        )}
                      </button>
                    </div>
                  )
                })()}
              </div>
            )
          }}
        </ConnectButton.Custom>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default ConnectIt
