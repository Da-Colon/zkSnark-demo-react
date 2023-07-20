// Import required modules and types
import { ReactNode, useEffect, useState } from "react";
import { NetworkContext, getNetworkConfig } from "./helpers";
import { useProvider } from "wagmi";

export const NetworkProvider = ({ children }: { children: ReactNode }) => {
  const provider = useProvider();
  
  const [config, setConfig] = useState<Partial<any>>(getNetworkConfig(provider.network.chainId));
  // Update config when the provider changes
  useEffect(() => {
    setConfig(getNetworkConfig(provider.network.chainId));
  }, [provider]);
  
  return <NetworkContext.Provider value={config as any}>{children}</NetworkContext.Provider>
}
