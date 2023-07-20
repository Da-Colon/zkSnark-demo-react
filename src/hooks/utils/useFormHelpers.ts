import { KeyboardEvent, useCallback } from 'react';

export const useFormHelpers = () => {
  const restrictChars = useCallback((event: KeyboardEvent<HTMLDivElement>) => {
    // eslint-disable-next-line no-useless-escape
    if (/^[eE\-\/+]$/.test(event.key)) {
      event.preventDefault();
    }
  }, []);

  return { restrictChars };
};
