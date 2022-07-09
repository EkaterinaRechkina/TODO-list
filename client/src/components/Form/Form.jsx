import * as React from "react";
import { Box, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../Redux/actions/task.action";

export default function Form() {
  // const [task, setTasks] = useState({
  //   title: "",
  //   description: "",
  // });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  function submitHandler(event) {
    event.preventDefault();
    console.log("test");
    dispatch(addTask(title, description));

    // setTasks({ title: "", description: "" });
    setTitle("");
    setDescription("");
  }

  console.log(title);
  console.log(description);
  return (
    <Box
      onSubmit={submitHandler}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "30ch" },
        marginTop: "50px",
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          label="Task"
          id="standard-size-normal"
          variant="standard"
        />
        <TextField
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          label="Description"
          id="standard-size-normal"
          variant="standard"
        />
      </div>

      <Button
        type="submit"
        sx={{
          marginTop: "20px",
        }}
        variant="contained"
      >
        Submit
      </Button>
    </Box>
  );
}
