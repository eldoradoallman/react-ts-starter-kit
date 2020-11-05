import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";

import { Box1 } from "./Box1";
import { Box2 } from "./Box2";
import { Action1 } from "./Action1";
import { Action2 } from "./Action2";

export const Home: React.FC<RouteComponentProps> = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div>{title}</div>
      <input onChange={(e) => setTitle(e.target.value)} />
      <Box1 />
      <Box2 />
      <Action1 />
      <Action2 />
    </div>
  );
};
