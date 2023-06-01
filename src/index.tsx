import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { store } from './redux/store'
import App from './components/App'
import './components/index.css'

import './components/i18n'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'

import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { polygonMumbai } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: import.meta.env.VITE_WALLETCONNECT_NAME,
  projectId: import.meta.env.VITE_WALLETCONNECT_ID,
  chains
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient
})

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'

import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { polygonMumbai} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, publicClient } = configureChains(
    [polygonMumbai],
    [publicProvider()]
  );
  
  const { connectors } = getDefaultWallets({
    appName: import.meta.env.VITE_WALLETCONNECT_NAME,
    projectId: import.meta.env.VITE_WALLETCONNECT_ID,
    chains,
  });
  
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors,
    publicClient,
  });

  
const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains}>
          <App />
        </RainbowKitProvider>
      </WagmiConfig>
    </Provider>
  </React.StrictMode>
)
