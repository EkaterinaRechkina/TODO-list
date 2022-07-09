import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { logUser } from "../../Redux/actions/user.action";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [logEmail, setLogEmail] = useState("");
  const [logPassword, setLogPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  function userLogin(email, password) {
    console.log("login");
    dispatch(logUser(email, password));
  }

  console.log("log", logEmail, logPassword);

  function navigateUser() {
    navigate("/");
  }

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          marginTop: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={logEmail}
          onChange={(event) => setLogEmail(event.target.value)}
          helperText="Please enter your email"
          id="email"
          label="Email"
          type="email"
        />

        <TextField
          value={logPassword}
          onChange={(event) => setLogPassword(event.target.value)}
          helperText="Please enter your password"
          id="password"
          label="password"
          type="password"
        />
        <div onClick={navigateUser}>
          <Button
            onClick={() => userLogin(logEmail, logPassword)}
            sx={{
              marginTop: "20px",
              maxWidth: "220px",
            }}
            variant="contained"
          >
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
}
