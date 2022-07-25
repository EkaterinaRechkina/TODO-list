import * as React from "react";
import { List, ListItem } from "@mui/material";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { setTaskAllTasks } from "../../Redux/actions/task.action";
import { useEffect } from "react";

export default function FolderList() {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  useEffect(() => {
    dispatch(setTaskAllTasks());
  }, [dispatch]);

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
