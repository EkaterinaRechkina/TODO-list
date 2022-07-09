import { SET_TASK, ADD_TASK, EDIT_TASK, DEL_TASK, CHECK_TASK } from "../types";

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
    case EDIT_TASK: {
      return state.map((el) =>
        el.id == action.payload.id ? action.payload : el
      );
    }
    case DEL_TASK: {
      const result = state.filter((task) => task.id !== action.payload);
      return result;
    }
    //что возвращаем?
    case CHECK_TASK: {
      const result = state.map((el) =>
        el.id === action.payload ? { ...el, status: !el.status } : { ...el }
      );
      return result;
    }
    default: {
      return state;
    }
  }
}

// case CHECK_TASK:
// const newState = [...state].map(el => el.id === action.payload.id ? action.payload : el)
// return newState
// case DEL_TASK:
// const result = state.filter(task => task.id !== action.payload)
// return result
