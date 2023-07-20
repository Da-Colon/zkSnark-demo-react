import { goerli } from 'wagmi/chains';

export const goerliConfig: any = {
  chainId: 5,
  name: goerli.name,
  color: 'gold.300',
  nativeTokenSymbol: goerli.nativeCurrency.symbol,
  nativeTokenIcon: '../../..//images/coin-icon-eth.svg',
  wagmiChain: goerli,
  contracts: {},
};
