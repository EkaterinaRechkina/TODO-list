import axios from "axios";
import { LOGOUT_USER, LOG_USER, REG_USER } from "../types";

export const regUser = (name, email, password) => async (dispatch) => {
  try {
    const result = await axios.post(
      "${process.env.REACT_APP_API_URL}/registration",
      {
        name,
        email,
        password,
      },
      { withCredentials: true }
    );
    localStorage.setItem("name", result.data.name);
    localStorage.setItem("email", result.data.email);

    dispatch({
      type: REG_USER,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const logUser = (email, password) => async (dispatch) => {
  try {
    const result = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      { email, password },
      { withCredentials: true }
    );
    localStorage.setItem("name", result.data.name);
    localStorage.setItem("email", result.data.email);
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
      `${process.env.REACT_APP_API_URL}/logout`,
      {},
      { withCredentials: true }
    );
    localStorage.clear();
    dispatch({
      type: LOGOUT_USER,
      payload: result.data,
    });
  } catch (err) {
    console.log(err);
  }
};
