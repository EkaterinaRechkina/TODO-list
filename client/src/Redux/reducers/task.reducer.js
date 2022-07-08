import { SET_TASK, ADD_TASK } from "../types";

export function taskReducer(state = [], action) {
  const { type } = action;
  console.log("action", action.payload);
  switch (type) {
    case SET_TASK: {
      return action.payload;
    }

    case ADD_TASK: {
      return [action.payload, ...state];
    }
    default: {
      return state;
    }
  }
}
