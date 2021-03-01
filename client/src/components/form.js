import React, { useState } from "react";
import { createTask } from "../actions/tasks";
import { useDispatch } from "react-redux";
const Form = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task !== "") {
      dispatch(createTask(task));
      setTask("");
    }
  };

  return (
    <form>
      <input
        type="text"
        className="form-control-lg"
        name="task"
        placeholder="Add a task..."
        value={task}
        onChange={handleTaskChange}
      />

      <button
        className="btn btn-primary btn-lg btn-margin"
        onClick={handleSubmit}
      >
        +
      </button>
    </form>
  );
};

export default Form;
