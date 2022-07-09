import axios from "axios";
import { LOGOUT_USER, LOG_USER, REG_USER } from "../types";

export const regUser = (name, email, password) => async (dispatch) => {
  console.log("req", name, email, password);
  try {
    const result = await axios.post(
      "http://localhost:3001/registration",
      {
        name,
        email,
        password,
      },
      { withCredentials: true }
    );
    console.log("data", result);
    dispatch({
      type: REG_USER,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const logUser = (email, password) => async (dispatch) => {
  console.log("log", email, password);
  try {
    const result = await axios.post(
      `http://localhost:3001/login`,
      { email, password },
      { withCredentials: true }
    );
    console.log("result", result.data);
    dispatch({
      type: LOG_USER,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const result = await axios.post(
      `http://localhost:3001/logout`,
      {},
      { withCredentials: true }
    );
    console.log("result logout", result.data);
    dispatch({
      type: LOGOUT_USER,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};
