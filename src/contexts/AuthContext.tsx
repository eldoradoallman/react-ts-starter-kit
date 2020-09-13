import React, { createContext, useState, useEffect, ReactNode } from "react";

interface UserData {
  id: string;
  email: string;
  username: string;
}

export const AuthContext = createContext<Partial<UserData> | null>(null);

export const AuthActionsContext = createContext<
  (data: UserData | null) => void
>(() => {});

export const AuthProvider: React.FC<ReactNode> = ({ children }) => {
  const [user, setUser] = useState<Partial<UserData> | null>(() => {
    const token = localStorage.getItem("token");

    if (!!token) return JSON.parse(token);
  });

  useEffect(() => {
    if (!!user) {
      localStorage.setItem("token", JSON.stringify(user));
    } else {
      localStorage.clear();
    }
  }, [user]);

  return (
    <AuthActionsContext.Provider value={setUser}>
      <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
    </AuthActionsContext.Provider>
  );
};
