import React, {useContext} from 'react';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import {NavLink} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext.js';
import {AUTH_CANCEL} from '../../context/types.js';

const Header = () => {
  const [, setToken] = useLocalStorage('crmifc');
  const {dispatch} = useContext(AuthContext);

  const logout = event => {
    event.preventDefault();
    setToken('');
    dispatch({type: AUTH_CANCEL});
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <NavLink className="navbar-brand" to="/">
        Crimeainfocom
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Link
            </NavLink>
          </li>
        </ul>
        <button className="btn btn-primary" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
