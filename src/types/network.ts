import { Chain } from 'wagmi';

export type NetworkType = {
  chainId: number,
  name: string,
  color: string,
  nativeTokenSymbol: string,
  nativeTokenIcon: string,
  wagmiChain: Chain,
}

