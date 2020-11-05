import React, { useContext, useEffect } from "react";

import { TestContext } from "../../contexts/TestContext";
import { useStore } from "./store";

export const Box1 = () => {
  const { state1 } = useContext(TestContext);
  const bears = useStore((state) => state.bears);

  useEffect(() => {
    console.log("state1", state1, bears);
  });

  return (
    <div>
      <div>State 1: {state1}</div>
      <div>Zustand 1: {bears}</div>
    </div>
  );
};
