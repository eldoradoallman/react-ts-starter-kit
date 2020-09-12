import { useState, useEffect } from 'react';

type ReturnType = [string, (value: string) => void];

export const useLocalStorage = (key: string, initialValue = ''): ReturnType => {
  const [value, setValue] = useState<string>((): string => {
    return localStorage.getItem(key) || initialValue;
  });

  useEffect(() => {
    if (value === '') {
      localStorage.clear();

      return;
    }

    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};
