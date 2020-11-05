import React, { ReactNode } from "react";

import { AuthProvider } from "../contexts/AuthContext";
import { TestProvider } from "../contexts/TestContext";
import { Layout } from "./Layout";

const App: React.FC<ReactNode> = () => {
  return (
    <TestProvider>
      <AuthProvider>
        <Layout />
      </AuthProvider>
    </TestProvider>
  );
};

export default App;
