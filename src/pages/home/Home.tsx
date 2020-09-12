import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { useHome } from "./useHome";

import logo from "../../assets/images/logo.svg";

export const Home: React.FC<RouteComponentProps> = (props) => {
  const { resLogin, submit } = useHome(props);

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <img className="App-logo" src={logo} alt="React" title="React" />
      {!!resLogin.isLoading && <p>Fetching data...</p>}
      <button onClick={submit}>Submit</button>
    </div>
  );
};
