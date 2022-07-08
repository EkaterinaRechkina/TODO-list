import React from "react";
import { TextField, Button, Box } from "@mui/material";

export default function Registration() {
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
        <TextField helperText="Please enter your name" id="name" label="name" />
        <TextField
          helperText="Please enter your email"
          id="email"
          label="email"
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
