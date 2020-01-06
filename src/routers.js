import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProtectedRoute from './hoc/protectedRoute.js';
import Home from './pages/home/index.js';
import Auth from './pages/auth/index.js';

export default () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={Home} />
      <Route path="/signin" component={Auth} />
    </Switch>
  );
};
