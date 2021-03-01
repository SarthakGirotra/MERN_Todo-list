import { combineReducers } from "redux";
import loginReducer from "./login";
import taskReducer from "./task";
export default combineReducers({ loginReducer, taskReducer });
