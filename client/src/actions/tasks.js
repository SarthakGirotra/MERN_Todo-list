import * as api from "../api";
import { CREATE_TASK, FETCH_TASK, STRIKE, DELETE } from "../constants.js";
export const fetchTasks = () => async (dispatch) => {
  try {
    const { data } = await api.fetch();

    dispatch({ type: FETCH_TASK, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const createTask = (task) => async (dispatch) => {
  try {
    const { data } = await api.create({ task });

    dispatch({ type: CREATE_TASK, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const strike = (task) => async (dispatch) => {
  try {
    const { data } = await api.strike(task);

    dispatch({ type: STRIKE, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const delTask = (task) => async (dispatch) => {
  try {
    await api.deltask(task);

    dispatch({ type: DELETE, payload: task });
  } catch (error) {
    console.log(error);
  }
};
