import * as React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { setTask } from "../../Redux/actions/task.action";
import { useEffect, useState } from "react";
import store from "../../Redux/store";

export default function FolderList() {
  const dispatch = useDispatch();

  const tasks = useSelector((store) => store.tasks);

  console.log(tasks);

  useEffect(() => {
    dispatch(setTask());
  }, []);

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: "600px",
        bgcolor: "background.paper",
        margin: "50px auto 0",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <ListItem
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {tasks && tasks.map((task) => <Task key={task.id} {...task} />)}
      </ListItem>
    </List>
  );
}
