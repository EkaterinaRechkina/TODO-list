import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Task from "../Task/Task";
import { useDispatch, useSelector } from "react-redux";
import { setTask, setTaskAllTasks } from "../../Redux/actions/task.action";
import { useEffect } from "react";
import store from "../../Redux/store";

export default function FolderList() {
  const dispatch = useDispatch();
  const tasks = useSelector((store) => store.tasks);

  useEffect(() => {
    dispatch(setTaskAllTasks());
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
