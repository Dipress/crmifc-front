import {AUTH_SUCCES, AUTH_CANCEL} from '../types.js';

export default (state, action) => {
  switch (action.type) {
    case AUTH_SUCCES:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case AUTH_CANCEL:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
      };

    default:
      return state;
  }
};
