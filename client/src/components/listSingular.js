import React from "react";
import { strike, delTask } from "../actions/tasks";
import { useDispatch } from "react-redux";
const ListSingular = ({ data }) => {
  const dispatch = useDispatch();
  const handleStrike = () => {
    !data.strike ? dispatch(strike(data)) : dispatch(delTask(data));
  };
  return (
    <div
      className={data.strike ? "list-data strike" : "list-data"}
      onClick={handleStrike}
    >
      {data.task}
    </div>
  );
};

export default ListSingular;
