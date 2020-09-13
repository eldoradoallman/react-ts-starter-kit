import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

export const Home: React.FC<RouteComponentProps> = () => {
  useEffect(() => {
    console.log("<Home /> rendered");
  });

  return (
    <div className="home-page">
      <h1>Home Page</h1>
    </div>
  );
};
