import React, { useContext, useEffect } from "react";

import { TestContext } from "../../contexts/TestContext";
import { useStore } from "./store";

export const Box1 = () => {
  const { state1 } = useContext(TestContext);
  const bears = useStore((state) => state.bears);

  useEffect(() => {
    console.log(
      "Box 1 component subscribe to both 'state1' & 'bears' values from context and zustand",
      state1,
      bears
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
      <div>Context 1: {state1}</div>
      <div>Zustand 1: {bears}</div>
    </div>
  );
};
