import { useState, useCallback, useContext, useEffect } from "react";
import { RouteProps } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import { AuthActionsContext } from "../../contexts/AuthContext";

interface FetchLoginData {
  id: number;
  email: string;
  password: string;
}

interface InputData {
  email?: string;
  password?: string;
}

export const useLogin = (props?: RouteProps) => {
  const [resLogin, doLogin] = useFetch<FetchLoginData, InputData>("/posts");

  const setUser = useContext(AuthActionsContext);

  const [input, setInput] = useState<InputData>({
    email: "",
    password: "",
  });

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setInput((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleLogin = useCallback((): void => {
    if (!resLogin.isLoading) doLogin({ method: "post", data: input });
  }, [resLogin.isLoading, input, doLogin]);

  useEffect(() => {
    if (!resLogin.data) return;

    setUser({ id: "123", email: "test@test.com", username: "johndoe" });
  }, [resLogin.data, setUser]);

  useEffect(() => {
    console.log("<useLogin />");
  });

  return {
    resLogin,
    handleLogin,
    input,
    handleChangeInput,
  };
};
