import React from 'react';
import {Switch, Route} from 'react-router-dom';
import ProtectedRoute from './hoc/protectedRoute.js';

// Pages
import Home from './pages/Home/index.js';
import Auth from './pages/Auth/index.js';
import Dashboard from './pages/Dashboard/index.js';
import NotFound from './pages/NotFound/index.js';

// UI
import Main from './component/Layout/main.js';

export default () => {
  return (
    <Switch>
      <ProtectedRoute path="/" exact component={Home} layout={Main} />
      <Route path="/signin" component={Auth} />
      <Route path="/dashboard" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
};
