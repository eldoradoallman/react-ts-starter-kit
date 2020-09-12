import React, { ReactNode } from 'react';

import { UserProvider } from '../contexts/UserContext';
import { Layout } from './Layout';

const App: React.FC<ReactNode> = () => {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
};

export default App;
