import React, { useState, useEffect } from "react";
import { Avatar, Button } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
//import decode from "jwt-decode";
function Navbar(props) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("tasksToken"))
  );
  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("tasksToken")));
    if (!token) {
      history.push("/login");
    }
  }, [location]);
  return (
    <div className="avatar">
      <Button
        className={classes.button}
        color="primary"
        variant="contained"
        size="medium"
        onClick={() => {
          dispatch({ type: "LOGOUT" });
          history.push("/login");
        }}
      >
        Logout
      </Button>
      {user && (
        <Avatar className={classes.avatar}>
          {user?.result?.username.charAt(0).toUpperCase()}
        </Avatar>
      )}
    </div>
  );
}

export default Navbar;
