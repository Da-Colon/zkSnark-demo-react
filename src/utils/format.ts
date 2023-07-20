/**
 * Formats a number or a numeric string as a currency string.
 * 
 * If the currency is not specified, it defaults to 'USD'. If the locale is not specified, it will attempt to use the runtime's (like the browser's) default settings.
 *
 * @export
 * @param {string | number} value - The numeric value to be formatted.
 * @param {string} [currency = 'USD'] - The currency code. Defaults to 'USD' if not specified.
 * @param {string | undefined} [locale] - The locale code. If not specified, it will attempt to use the runtime's default locale.
 * @returns {string} The formatted currency string.
 * @throws {Error} Throws an error if the value is a string that cannot be parsed into a number.
 */
export function formatCurrency(value: string | number, currency = 'USD', locale = "en-us"): string {
  let numericValue: number;

  // Convert to number if it's a string
  if (typeof value === 'string') {
    numericValue = parseFloat(value);
    // Check if the value is a valid number
    if (isNaN(numericValue)) {
      throw new Error(`Invalid number: ${value}`);
    }
  } else {
    numericValue = value;
  }
  
  return new Intl.NumberFormat(locale, { style: 'currency', currency: currency } ).format(numericValue);
}
