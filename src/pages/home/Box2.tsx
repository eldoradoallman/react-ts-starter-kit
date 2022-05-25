import React, { useContext, useEffect } from "react";

import { TestContext } from "../../contexts/TestContext";
import { useStore } from "./store";

export const Box2 = () => {
  const { state2 } = useContext(TestContext);
  const cats = useStore((state) => state.cats);

  useEffect(() => {
    console.log(
      "Box 2 component subscribe to both 'state2' & 'cats' values from context and zustand",
      state2,
      cats
    );
  });

  return (
    <div
      style={{
        width: "200px",
        backgroundColor: "#eee",
        padding: "20px",
        margin: "20px",
      }}
    >
      <div>Context 2: {state2}</div>
      <div>Zustand 2: {cats}</div>
    </div>
  );
};
