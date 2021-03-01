import * as api from "../api/index.js";
import { LOGIN } from "../constants.js";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    dispatch({ type: LOGIN, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: LOGIN, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
