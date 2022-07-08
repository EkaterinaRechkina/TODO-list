import React from "react";
import { TextField, Button, Box } from "@mui/material";

export default function Login() {
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
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          helperText="Please enter your email"
          id="email"
          label="Email"
        />

        <TextField
          helperText="Please enter your password"
          id="password"
          label="password"
        />

        <Button
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
