import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

export const Home: React.FC<RouteComponentProps> = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("<Home />");
  });

  return (
    <div className="home-page">
      <h1>Home Page</h1>
      <div>{title}</div>
      <input onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
};
