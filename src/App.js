import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routers from './routers';
import AuthState from './context/auth/authState.js';

function App() {
  return (
    <AuthState>
      <Router>
        <div className="App">
          <Routers />
        </div>
      </Router>
    </AuthState>
  );
}

export default App;
