import React from "react";
import { RouteProps } from "react-router-dom";

import { useLogin } from "./useLogin";

import logo from "../../assets/images/logo.svg";

export const Login: React.FC<RouteProps> = (props) => {
  const { resLogin, handleLogin, input, handleChangeInput } = useLogin(props);

  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <img className="App-logo" src={logo} alt="React" title="React" />
      {!!resLogin.isLoading && <p>Fetching data...</p>}
      <input
        name="email"
        type="email"
        value={input.email}
        onChange={handleChangeInput}
      />
      <input
        name="password"
        type="password"
        value={input.password}
        onChange={handleChangeInput}
      />
      <button disabled={!!resLogin.isLoading} onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
