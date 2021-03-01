import { LOGIN, LOGOUT } from "../constants.js";
export default (state = { authData: null }, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("tasksToken", JSON.stringify({ ...action.data }));
      return { ...state, authData: action?.data };
    case LOGOUT:
      localStorage.removeItem("tasksToken");
      return { ...state, authData: null };
    default:
      return state;
  }
};
