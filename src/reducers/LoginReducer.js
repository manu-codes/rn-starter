import { DO_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/constants";

// Start the sequence of item ID's at 0
let nextItemId = 0;


const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      console.log('action', action)
      return { ...state, ...action.data }
    }
    case LOGIN_ERROR: {
      console.log('action', action)
      return { ...state, ...action.error }
    }
    default:
      return { ...state };
  }
};

export default LoginReducer;
