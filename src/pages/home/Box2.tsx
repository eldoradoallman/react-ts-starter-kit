import React, { useContext, useEffect } from "react";

import { TestContext } from "../../contexts/TestContext";
import { useStore } from "./store";

export const Box2 = () => {
  const { state2 } = useContext(TestContext);
  const cats = useStore((state) => state.cats);

  useEffect(() => {
    console.log("state2", state2, cats);
  });

  return (
    <div>
      <div>State 2: {state2}</div>
      <div>Zustand 2: {cats}</div>
    </div>
  );
};
