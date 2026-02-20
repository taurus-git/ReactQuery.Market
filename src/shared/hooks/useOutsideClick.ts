import { RefObject, useEffect, useRef } from 'react';

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  handler: () => void,
): RefObject<T | null> {
  const ref = useRef<T>(null);

  const handleRef = useRef(handler);

  useEffect(() => {
    handleRef.current = handler;
  }, [handler]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handleRef.current();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return ref;
}
