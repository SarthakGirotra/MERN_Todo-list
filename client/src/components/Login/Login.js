import React, { useState } from "react";
// eslint-disable-next-line
import { GoogleLogin } from "react-google-login";
import {
  Paper,
  Container,
  TextField,
  Typography,
  Grid,
  Button,
} from "@material-ui/core";
import useStyles from "./styles";
import "./login.css";
import { signin, signup } from "../../actions/login";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
function Login() {
  const classes = useStyles();
  let login = true;
  const history = useHistory();

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (login) {
      dispatch(signin(formData, history));
    } else {
      dispatch(signup(formData, history));
    }
    setFormData({ username: "", password: "" });
  };
  const initData = {
    username: "",
    password: "",
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const [formData, setFormData] = useState(initData);
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Typography variant="h5" className={classes.login}>
          Login To Save Tasks
        </Typography>

        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container direction="column" justify="center" spacing={3}>
            <Grid item>
              <TextField
                name="username"
                label="username"
                required
                autoFocus
                variant="outlined"
                fullWidth
                size="medium"
                type="text"
                value={formData.username}
                onChange={handleChange}
              ></TextField>
            </Grid>
            <Grid item>
              <TextField
                name="password"
                label="password"
                required
                variant="outlined"
                fullWidth
                size="medium"
                type="password"
                value={formData.password}
                onChange={handleChange}
              ></TextField>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
                className={classes.button}
                onClick={() => {
                  login = true;
                }}
              >
                Login
              </Button>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth
                className={classes.button}
                onClick={() => {
                  login = false;
                }}
              >
                Signup
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
}

export default Login;
