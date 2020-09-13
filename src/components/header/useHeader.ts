import { useContext } from "react";

import { AuthActionsContext, AuthContext } from "../../contexts/AuthContext";

export const useHeader = () => {
  const user = useContext(AuthContext);
  const setUser = useContext(AuthActionsContext);

  const menus = [
    { path: "/", text: "Home" },
    !!user && { path: "/posts/15", text: "Posts" },
  ];

  const handleLogout = () => {
    setUser(null);
  };

  return { user, menus, handleLogout };
};
