import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export const useDefaultRoute = () => {
  const user = useContext(AuthContext);

  return { user };
};
