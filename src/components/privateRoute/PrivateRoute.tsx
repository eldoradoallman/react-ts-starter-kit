import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

import { usePrivateRoute } from "./usePrivateRoute";

export const PrivateRoute: React.FC<{
  path: string;
  component: React.FC<ReactNode>;
}> = ({ component: Component, ...rest }) => {
  const { user } = usePrivateRoute();

  return (
    <Route
      {...rest}
      render={({ location }) => {
        return !!user ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};
