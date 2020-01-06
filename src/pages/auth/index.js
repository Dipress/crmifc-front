import React, {useState, useEffect, useContext} from 'react';
import ErrorMessages from '../../component/ErrorMessages/index.js';
import {Redirect} from 'react-router-dom';
import useFetch from '../../hooks/useFetch.js';
import useLocalStorage from '../../hooks/useLocalStorage.js';
import AuthContext from '../../context/auth/authContext.js';
import {AUTH_SUCCES} from '../../context/types.js';

const Auth = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [{isLoading, response, error}, doFetch] = useFetch('/signin');
  const [, setToken] = useLocalStorage('crmifc');
  const [isSuccessfullSubmit, setIsSuccessfullSubmit] = useState(false);
  const {dispatch} = useContext(AuthContext);

  useEffect(() => {
    if (!response) {
      return;
    }

    setToken(response.token);
    dispatch({type: AUTH_SUCCES, payload: response.token});
    setIsSuccessfullSubmit(true);
  }, [response, setToken, dispatch, isSuccessfullSubmit]);

  const handleSubmit = event => {
    event.preventDefault();
    doFetch({
      method: 'POST',
      data: {
        email: email,
        password: password,
      },
    });
  };

  if (isSuccessfullSubmit) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Login</h1>
            <form onSubmit={handleSubmit}>
              {error && <ErrorMessages errors={error} />}
              <fieldset>
                <fieldset className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholfer="Email"
                    onChange={e => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholfer="Password"
                    onChange={e => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  className="btn btn-lg btn-primary pull-xs-right"
                  disabled={isLoading}
                  type="submit">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
