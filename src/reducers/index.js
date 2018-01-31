import { combineReducers } from "redux";
import loginReducer from "./LoginReducer";

// Combine reducers
const rootReducer = combineReducers({
  loginReducer
});

export default rootReducer;
