import React, { useEffect } from "react";
import Form from "../form";
import List from "../list";
import Navbar from "../NavLogin/Navbar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchTasks } from "../../actions/tasks";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const fetchedTasks = useSelector((state) => state.taskReducer);

  return (
    <div>
      <h1>Todo List</h1>
      <Navbar />
      <div className="head">
        <div className="todo-wrapper">
          <Form />
          <List fetchedTasks={fetchedTasks} />
        </div>
      </div>
    </div>
  );
}

export default Home;
