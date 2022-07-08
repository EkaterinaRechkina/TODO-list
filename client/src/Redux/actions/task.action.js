import axios from "axios";
import { SET_TASK, ADD_TASK, EDIT_TASK, DEL_TASK, CHECK_TASK } from "../types";

export const setTask = () => async (dispatch) => {
  try {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}`);
    console.log(result);

    dispatch({
      type: SET_TASK,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addTask = (title, description) => async (dispatch) => {
  try {
    const result = await axios.post(`${process.env.REACT_APP_API_URL}/task`, {
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
    const result = await axios.get(`${process.env.REACT_APP_API_URL}/tasks`);

    dispatch({
      type: SET_TASK,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editTask = (id, title, description) => async (dispatch) => {
  console.log("taskttttt", id, title, description);
  try {
    const result = await axios.put(
      `${process.env.REACT_APP_API_URL}/task/${id}`,
      {
        id,
        title,
        description,
      }
    );
    console.log("result", result.data);
    dispatch({
      type: EDIT_TASK,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    const result = await axios.delete(
      `${process.env.REACT_APP_API_URL}/task/${id}`,
      {
        id,
      }
    );
    console.log("result", result.data);
    dispatch({
      type: DEL_TASK,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};

export const checkedTask = (id) => async (dispatch) => {
  try {
    const result = await axios.patch(
      `${process.env.REACT_APP_API_URL}/task/${id}`,
      {
        id,
      }
    );
    console.log("result", result.data);
    dispatch({
      type: CHECK_TASK,
      payload: id,
    });
  } catch (err) {
    console.log(err);
  }
};
