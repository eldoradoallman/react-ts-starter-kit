import React, { createContext, useState, ReactNode } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

interface UserData {
  id: string;
  email: string;
  username: string;
}

export const UserContext = createContext<
  [Partial<UserData> | null, (data: UserData | null) => void]
>([null, () => {}]);

export const UserProvider: React.FC<ReactNode> = ({ children }) => {
  const [token] = useLocalStorage("token");
  const [state, setState] = useState<Partial<UserData> | null>(
    !!token ? JSON.parse(token) : null
  );

  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};

// const initialState = {
//   isLoading: false,
//   isLoggedIn: false,
//   user: null,
// };

// const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "LOADING":
//       return { ...state, isLoading: true };
//     case "SET_AUTHORIZED":
//       return {
//         ...state,
//         isLoading: false,
//         isLoggedIn: true,
//         currentUser: action.payload,
//       };
//     case "SET_UNAUTHORIZED":
//       return {
//         ...state,
//         isLoading: false,
//         isLoggedIn: false,
//         currentUser: null,
//       };
//     default:
//       return state;
//   }
// };

// const ReducerHooks = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
// };

// dispatch({
//   type: "SET_AUTHORIZED",
//   payload: { id: "123", email: "test@test.com", username: "johndoe" },
// });
