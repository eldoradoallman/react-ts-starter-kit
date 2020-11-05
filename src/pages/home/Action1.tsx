import React, { useContext, useEffect } from "react";

import { TestActionsContext } from "../../contexts/TestContext";
import { useStore } from "./store";

export const Action1 = () => {
  const { setState1 } = useContext(TestActionsContext);
  const increasePopulation: any = useStore((state) => state.increasePopulation);

  useEffect(() => {
    console.log("setState1", setState1, increasePopulation);
  });

  return (
    <div>
      setState1:
      <button onClick={() => setState1()}>Click Context</button>
      <button onClick={() => increasePopulation()}>Click Zustand</button>
    </div>
  );
};
