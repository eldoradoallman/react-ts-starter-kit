import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";

import { useDefaultRoute } from "./useDefaultRoute";

export const DefaultRoute: React.FC<{
  path: string;
  component: React.FC<ReactNode>;
}> = ({ component: Component, ...rest }) => {
  const { user } = useDefaultRoute();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !user ? (
          <Component {...rest} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
