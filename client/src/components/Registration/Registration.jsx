import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { regUser } from "../../Redux/actions/user.action";

export default function Registration() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const dispatch = useDispatch();

  function userRegistration(name, email, password) {
    console.log("register");
    dispatch(regUser(name, email, password));
  }

  console.log("user", userName, userEmail, userPassword);

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
      </Box>
    </div>
  );
}
