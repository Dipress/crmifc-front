import React, {useContext} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../context/auth/authContext.js';

const ProtectedRoute = ({component: Component, layout: Layout, ...rest}) => {
  const {state} = useContext(AuthContext);

  return (
    <Route
      render={props =>
        state.isAuthenticated ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to="/signin" />
        )
      }
      {...rest}
    />
  );
};

export default ProtectedRoute;
