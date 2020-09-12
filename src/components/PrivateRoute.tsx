import React, { ReactNode, useContext } from "react";
import { Route, Redirect } from "react-router-dom";

import { UserContext } from "../contexts/UserContext";

export const PrivateRoute: React.FC<{
  path: string;
  component: React.FC<ReactNode>;
}> = ({ component: Component, ...rest }) => {
  const [user] = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!user ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
