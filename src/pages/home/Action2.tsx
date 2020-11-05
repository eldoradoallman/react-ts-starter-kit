import React, { useContext, useEffect } from "react";

import { TestActionsContext } from "../../contexts/TestContext";
import { useStore } from "./store";

export const Action2 = () => {
  const { setState2 } = useContext(TestActionsContext);
  const increasePopulation: any = useStore(
    (state) => state.increasePopulationCats
  );

  useEffect(() => {
    console.log("setState2", setState2, increasePopulation);
  });

  return (
    <div>
      setState2:
      <button onClick={() => setState2()}>Click Context</button>
      <button onClick={() => increasePopulation()}>Click Zustand</button>
    </div>
  );
};
