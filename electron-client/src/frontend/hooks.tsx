import { useEffect, useRef } from 'react';

export const useClickOutside = (handleOnClickOutside: (event: MouseEvent | TouchEvent) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handleOnClickOutside(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handleOnClickOutside]);

  return ref;
};
