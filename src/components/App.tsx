import React, { ReactNode } from "react";

import { AuthProvider } from "../contexts/AuthContext";
import { Layout } from "./Layout";

const App: React.FC<ReactNode> = () => {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
};

export default App;
