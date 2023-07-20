import { RainbowKitProvider, midnightTheme } from "@rainbow-me/rainbowkit"
import { ReactNode } from "react"
import { WagmiConfig } from "wagmi"
import { wagmiClient, chains } from "../../rainbow-kit.config"
import { NetworkProvider } from "./network"
import { Provider } from "react-redux";
import store from '../providers/store'
export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        chains={chains}
        modalSize="compact"
        theme={midnightTheme()}
      >
        <NetworkProvider>
          <Provider store={store}>

            {children}
          </Provider>
        </NetworkProvider>
      </RainbowKitProvider>
    </WagmiConfig>)
}