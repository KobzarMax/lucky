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
import creditcard from '../asset/creditcard.svg'
import { useTranslation } from 'react-i18next'
import styles from './index.module.css'

interface platform {
  isMobile: boolean
}

const { chains, provider }: any = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_ID }),
    publicProvider()
  ]
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
} as any)

const ConnectIt = ({ isMobile }: platform) => {
  const { t } = useTranslation(['translations'])
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
          }: any) => {
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
                        className={styles.connectWallet}
                        onClick={openConnectModal}
                        type="button"
                      >
                        {t('connectWallet')}
                        {!isMobile && (
                          <img src={creditcard} alt="credit card" />
                        )}
                      </button>
                    )
                  }

                  if (chain.unsupported) {
                    return (
                      <button
                        className={styles.wrongNetwork}
                        style={{ backgroundColor: 'red' }}
                        onClick={openChainModal}
                        type="button"
                      >
                        Wrong network
                      </button>
                    )
                  }

                  return (
                    <div className={styles.openChainWrap}>
                      <div
                        onClick={openChainModal}
                        className={styles.openChainInner}
                      >
                        <div className={styles.hasIcon}>
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
                            <span className={styles.chainName}>
                              {chain.name}
                            </span>
                          )}
                        </div>
                      </div>

                      <button
                        className={styles.connectWallet}
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
