import { createContext, useContext, Context } from "react";
import { goerliConfig } from "./networks/goerli";

// Create and export a context for network information
export const NetworkContext = createContext({} as any);

// Custom hook to use the network context
export const useNetwork = (): any => useContext(NetworkContext as Context<any>)

// List of supported networks
export const supportedChains = [goerliConfig];

// List of supported WAGMI chains
export const supportedWagmiChains = supportedChains.map(config => config.wagmiChain);

// Function to get the network configuration based on the chain ID
export const getNetworkConfig = (chainId: number): Partial<any> => {
  if (chainId === 31337) return goerliConfig;

  return supportedChains.find(chain => chain.chainId === chainId) || {} as Partial<any>;
};
