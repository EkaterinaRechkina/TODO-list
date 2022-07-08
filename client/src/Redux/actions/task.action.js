import axios from "axios";
import { SET_TASK, ADD_TASK } from "../types";

export const setTask = () => async (dispatch) => {
  try {
    const result = await axios.get("http://localhost:3001/");
    console.log("data", result);
    dispatch({
      type: SET_TASK,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addTask = (title, description) => async (dispatch) => {
  console.log("task", title, description);
  try {
    const result = await axios.post("http://localhost:3001/task", {
      title,
      description,
    });
    console.log("result", result.data);
    dispatch({
      type: ADD_TASK,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setTaskAllTasks = () => async (dispatch) => {
  try {
    const result = await axios.get("http://localhost:3001/tasks");
    console.log("data", result);
    dispatch({
      type: SET_TASK,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};
