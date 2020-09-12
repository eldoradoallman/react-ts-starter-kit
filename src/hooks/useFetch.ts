import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';

interface UseFetchError {
  message: string;
}

interface Config<K> extends AxiosRequestConfig {
  data?: K;
}

interface UseFetchState<T, K> {
  config?: Config<K>;
  isLoading: boolean;
  data?: T;
  error?: UseFetchError;
}

type ReturnType<T, K> = [T, (options: Config<K>) => void];

export const useFetch = <T, K>(
  url: string
): ReturnType<UseFetchState<T, K>, K> => {
  const baseUrl = 'https://jsonplaceholder.typicode.com';

  const initialState: UseFetchState<T, K> = {
    config: undefined,
    isLoading: false,
    data: undefined,
    error: undefined,
  };

  const [{ config, isLoading, data, error }, setState] = useState<
    UseFetchState<T, K>
  >(initialState);

  const doFetch = useCallback((options: Config<K>) => {
    setState((prevState) => ({
      ...prevState,
      config: options,
      isLoading: true,
    }));
  }, []);

  useEffect(() => {
    let skipGetResponseAfterDestroy = false;

    if (!isLoading) return;

    axios(baseUrl + url, config)
      .then((response: AxiosResponse<T>) => {
        if (!skipGetResponseAfterDestroy)
          setState((prevState) => ({
            ...prevState,
            data: response.data,
            isLoading: false,
          }));
      })
      .catch((err: AxiosError<UseFetchError>) => {
        if (!skipGetResponseAfterDestroy)
          setState((prevState) => ({
            ...prevState,
            error: !!err.response ? err.response.data : undefined,
            isLoading: false,
          }));
      });

    return () => {
      skipGetResponseAfterDestroy = true;
    };
  }, [url, config, isLoading]);

  return [{ isLoading, data, error }, doFetch];
};
