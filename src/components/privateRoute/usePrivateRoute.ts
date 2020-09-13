import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const usePrivateRoute = () => {
  const user = useContext(AuthContext);

  return { user };
};
