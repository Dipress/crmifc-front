import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routers from './routers';
import AuthState from './context/auth/authState.js';

const App = () => {
  return (
    <AuthState>
      <Router>
        <Routers />
      </Router>
    </AuthState>
  );
};

export default App;
