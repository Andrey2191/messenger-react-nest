import { combineReducers } from "redux";
import loginReducer from "../pages/loginPage/containers/loginSlice";

const rootReducer = combineReducers({
  login: loginReducer,
});

export default rootReducer;
