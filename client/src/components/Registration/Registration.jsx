import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { regUser } from "../../Redux/actions/user.action";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function userRegistration(name, email, password) {
    dispatch(regUser(name, email, password));
  }

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
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          helperText="Please enter your name"
          id="name"
          label="name"
        />
        <TextField
          value={userEmail}
          onChange={(event) => setUserEmail(event.target.value)}
          helperText="Please enter your email"
          id="email"
          label="email"
          type="email"
        />

        <TextField
          value={userPassword}
          onChange={(event) => setUserPassword(event.target.value)}
          helperText="Please enter your password"
          id="password"
          label="password"
          type="password"
        />
        <div onClick={navigateUser}>
          <Button
            onClick={() => userRegistration(userName, userEmail, userPassword)}
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
