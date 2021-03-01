import { CREATE_TASK, FETCH_TASK, STRIKE, DELETE } from "../constants.js";
export default (tasks = [], action) => {
  switch (action.type) {
    case FETCH_TASK:
      return action.payload;
    case CREATE_TASK:
      return [...tasks, action.payload];
    case STRIKE:
      return tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
    case DELETE:
      return tasks.filter((task) => task._id !== action.payload._id);
    default:
      return tasks;
  }
};
