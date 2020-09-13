import { useState, useCallback, useContext, useEffect } from "react";
import { RouteProps } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import { AuthActionsContext } from "../../contexts/AuthContext";

interface FetchLoginData {
  id: number;
  email: string;
  password: string;
}

interface Payload {
  email: string;
  password: string;
}

export const useLogin = (props?: RouteProps) => {
  const [resLogin, doLogin] = useFetch<FetchLoginData, Payload>("/posts");
  const setUser = useContext(AuthActionsContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = useCallback(
    (payload: Payload): void => {
      doLogin({ method: "post", data: payload });
    },
    [doLogin]
  );

  useEffect(() => {
    if (!resLogin.data) return;

    setUser({ id: "123", email: "test@test.com", username: "johndoe" });
  }, [resLogin.data, setUser]);

  return { resLogin, handleLogin, email, password, setEmail, setPassword };
};
