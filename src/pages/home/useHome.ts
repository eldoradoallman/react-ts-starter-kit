import { useContext, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { useFetch } from '../../hooks/useFetch';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { UserContext } from '../../contexts/UserContext';

interface FetchLoginData {
  id: number;
  title: string;
  content: string;
}

interface Payload {
  title: string;
  content: string;
}

export const useHome = (props: RouteComponentProps) => {
  const [resLogin, doLogin] = useFetch<FetchLoginData, Payload>('/posts');
  const [, setToken] = useLocalStorage('token');
  const [, setUser] = useContext(UserContext);

  const submit = (): void => {
    doLogin({
      method: 'post',
      data: {
        title: 'New Post',
        content: 'Some description',
      },
    });
  };

  useEffect(() => {
    if (!resLogin.data) return;

    setToken(JSON.stringify(resLogin.data));
    setUser({ id: '123', email: 'test@test.com', username: 'johndoe' });
  }, [resLogin.data, setToken, setUser]);

  return { resLogin, submit };
};
