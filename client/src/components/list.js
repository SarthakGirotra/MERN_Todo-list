// import PropTypes from "prop-types";
import React from "react";
import ListSingular from "./listSingular";
const List = ({ fetchedTasks }) => {
  return (
    <div className="list">
      {fetchedTasks.map((data) => (
        <ListSingular data={data} key={data._id} />
      ))}
    </div>
  );
};

List.defaultProps = {
  list: ["hello", "world"],
};

export default List;
