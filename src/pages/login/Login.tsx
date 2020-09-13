import React, { useEffect } from "react";
import { RouteProps } from "react-router-dom";

import { useLogin } from "./useLogin";

import logo from "../../assets/images/logo.svg";

export const Login: React.FC<RouteProps> = (props) => {
  const {
    resLogin,
    handleLogin,
    email,
    password,
    setEmail,
    setPassword,
  } = useLogin(props);

  useEffect(() => {
    console.log("<Login />");
  });

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <img className="App-logo" src={logo} alt="React" title="React" />
      {!!resLogin.isLoading && <p>Fetching data...</p>}
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        disabled={!!resLogin.isLoading}
        onClick={() => {
          if (!resLogin.isLoading) handleLogin({ email, password });
        }}
      >
        Login
      </button>
    </div>
  );
};
