import React, { useContext, useEffect } from "react";

import { TestActionsContext } from "../../contexts/TestContext";
import { useStore } from "./store";

export const Action1 = () => {
  // this component has access to methods/actions from context and zustand,
  // but it doesn't have any access to states from context or zustand
  const { setState1 } = useContext(TestActionsContext);
  const increasePopulation: any = useStore((state) => state.increasePopulation);

  useEffect(() => {
    console.log(
      "Action 1 Component know something is changing, it shouldn't though since the component doesn't subscribe to any state changes"
    );
  });

  return (
    <div>
      <button style={{ margin: "5px" }} onClick={() => setState1()}>
        Action Context 1
      </button>
      <button style={{ margin: "5px" }} onClick={() => increasePopulation()}>
        Action Zustand 1
      </button>
    </div>
  );
};
