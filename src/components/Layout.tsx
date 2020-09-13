import React, { ReactNode } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header } from "./header/Header";
import { PrivateRoute } from "./privateRoute/PrivateRoute";
import { DefaultRoute } from "./defaultRoute/DefaultRoute";
import { Posts } from "../pages/posts/Posts";
import { Login } from "../pages/login/Login";
import { Home } from "../pages/home/Home";
import { NotFound } from "../pages/notFound/NotFound";
import { Footer } from "./footer/Footer";

export const Layout: React.FC<ReactNode> = () => {
  return (
    <div className="layout">
      <Router>
        <Header />
        <Switch>
          <PrivateRoute path="/posts/:id" component={Posts} />
          <DefaultRoute path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};
