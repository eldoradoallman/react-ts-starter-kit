import React, { ReactNode } from 'react';

import { Routes } from '../routes/Routes';

export const Layout: React.FC<ReactNode> = () => {
  return (
    <div className="layout">
      <Routes />
    </div>
  );
};
