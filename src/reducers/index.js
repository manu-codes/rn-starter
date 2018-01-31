import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";

// Combine reducers
const itemApp = combineReducers({
  loginReducer
});

export default itemApp;
