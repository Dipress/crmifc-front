import React, {useState, useEffect, useContext} from "react";
import ErrorMessages from "../../component/ErrorMessages/index.js";
import {Redirect} from "react-router-dom";
import useFetch from "../../hooks/useFetch.js";
import useLocalStorage from "../../hooks/useLocalStorage.js";
import AuthContext from "../../context/auth/authContext.js";
import {AUTH_SUCCES} from "../../context/types.js";
import "./index.css";

const Auth = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{isLoading, response, error}, doFetch] = useFetch("/signin");
  const [, setToken] = useLocalStorage("crmifc");
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
      method: "POST",
      data: {
        email: email,
        password: password
      }
    });
  };

  if (isSuccessfullSubmit) {
    return <Redirect to="/" />;
  }

  return (
    <div className="auth-page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-lg-6 col-xs-12">
            <form className="form-signin" onSubmit={handleSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Sign in</h1>
              {error && <ErrorMessages errors={error} />}
              <label htmlFor="inputEmail" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="inputEmail"
                className="form-control"
                placeholder="Email address"
                onChange={e => setEmail(e.target.value)}
                required
              />
              <label htmlFor="inputPassword" className="sr-only">
                Password
              </label>
              <input
                type="password"
                id="inputPassword"
                className="form-control"
                placeholder="Password"
                onChange={e => setPassword(e.target.value)}
                required
              />
              <div className="checkbox mb-3">
                <label htmlFor="imputChecker">
                  <input
                    className="show-password"
                    type="checkbox"
                    value="show-password"
                  />
                  Show password
                </label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                disabled={isLoading}
                type="submit"
              >
                Submit
              </button>
              <p className="mt-5 mb-3 text-muted">&copy; 2019-2020</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
