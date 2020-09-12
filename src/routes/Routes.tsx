import React, { ReactNode } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from '../components/PrivateRoute';
import { Home } from '../pages/home/Home';
import { Posts } from '../pages/posts/Posts';

export const Routes: React.FC<ReactNode> = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/posts" component={Posts} />
      </Switch>
    </Router>
  );
};
