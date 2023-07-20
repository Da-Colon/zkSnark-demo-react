import '@rainbow-me/rainbowkit/styles.css';

import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  injectedWallet,
  metaMaskWallet,
  coinbaseWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createClient, createStorage } from 'wagmi';
import * as wagmiChains from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

// @note This allows any evm compatible chain to be used
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mappedAllChains = Object.entries(wagmiChains).map(([_, value]) => value);
export const { chains, provider } = configureChains(mappedAllChains, [
  infuraProvider({ apiKey: import.meta.env.VITE_INFURA_API_KEY }),
  alchemyProvider({ apiKey: import.meta.env.VITE_ALCHEMY_API_KEY }),
  publicProvider(),
]);

const defaultWallets = [
  injectedWallet({ chains }),
  metaMaskWallet({ chains }),
  coinbaseWallet({ appName: 'AA Demo', chains }),
];

const connectors = connectorsForWallets([
  {
    groupName: 'Supported',
    wallets: defaultWallets,
  },
]);

export const wagmiClient = createClient({
  autoConnect: true,
  storage:
    typeof window !== 'undefined'
      ? createStorage({
        storage: window.localStorage,
      })
      : undefined,
  connectors,
  provider,
});
