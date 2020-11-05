import React, { createContext, useState, ReactNode } from "react";

export const TestContext = createContext<any>(0);

export const TestActionsContext = createContext<any>(0);

export const TestProvider: React.FC<ReactNode> = ({ children }) => {
  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);

  const testState = { state1, state2 };
  const testActions = {
    setState1: () => setState1(state1 + 1),
    setState2: () => setState2(state2 + 1),
  };

  return (
    <TestActionsContext.Provider value={testActions}>
      <TestContext.Provider value={testState}>{children}</TestContext.Provider>
    </TestActionsContext.Provider>
  );
};
