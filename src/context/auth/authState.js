import React, {useReducer} from 'react';
import AuthContext from './authContext.js';
import AuthReducer from './authReducer.js';
import useLocalStorage from '../../hooks/useLocalStorage.js';

export default props => {
  const [token] = useLocalStorage('crmifc');

  const initialState = {
    token: token,
    isAuthenticated: token ? true : false,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthContext.Provider value={{state, dispatch}}>
      {props.children}
    </AuthContext.Provider>
  );
};
