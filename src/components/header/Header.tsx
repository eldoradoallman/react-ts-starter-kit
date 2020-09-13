import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

import { useHeader } from "./useHeader";

export const Header: React.FC<ReactNode> = () => {
  const { user, menus, handleLogout } = useHeader();

  const renderMenus = () => {
    return menus.map((menu) => {
      if (!menu) return null;

      return (
        <div key={menu.path}>
          <Link to={menu.path}>{menu.text}</Link>
        </div>
      );
    });
  };

  return (
    <div>
      <h1>Header</h1>
      <nav>{renderMenus()}</nav>
      <div>
        {!user && <Link to="/login">Login</Link>}
        {!!user && <button onClick={handleLogout}>Logout</button>}
      </div>
    </div>
  );
};
