import { utils } from 'ethers';
import { useCallback, useEffect, useState } from "react";
import { useProvider } from "wagmi";
import { createAddressSubstring } from '../../utils/string';

// @todo add caching

interface AddressDisplayOptions {
  ensCheck?: boolean;
  trunicate?: boolean;
}

const initialOptions: AddressDisplayOptions = {
  ensCheck: true,
  trunicate: true,
}
/**
 * This hook will return a formatted address string
 * @dev This hook will store ens results in indexeddb for future use
 * @param address string
 * @param options? { ensCheck: boolean }
 */
export function useAddressDisplay(address?: string | null, options: AddressDisplayOptions = initialOptions) {
  const { ensCheck, trunicate } = options
  const [addressDisplay, setAddressDisplay] = useState<string>()
  const provider = useProvider({chainId: 1});

  const loadDisplayName = useCallback(async (_address: string) => {
    if (ensCheck && provider) {
      const ensName = await provider.lookupAddress(_address)
      if (ensName) {
        setAddressDisplay(ensName)
        return
      }
    }
    if (trunicate) {
      setAddressDisplay(createAddressSubstring(_address))
    } else {
      setAddressDisplay(_address)
    }
  }, [provider, ensCheck, trunicate])

  useEffect(() => {
    if (!address || !utils.isAddress(address)) return
    loadDisplayName(address)

  }, [address, loadDisplayName])


  return { addressDisplay, loadDisplayName }
}