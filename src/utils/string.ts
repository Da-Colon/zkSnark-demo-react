export function createAddressSubstring(address: string) {
  return `${address.substring(0, 6)}...${address.slice(-4)}`;
}

export function capitalize(str: string) {
  return str.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
}