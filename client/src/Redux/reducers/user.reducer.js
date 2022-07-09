import { LOGOUT_USER, LOG_USER, REG_USER } from "../types";

export function userReducer(state = [], action) {
  const { type } = action;
  console.log("action", action.payload);
  switch (type) {
    case REG_USER: {
      return action.payload;
    }

    case LOG_USER: {
      // const result = state.filter()
      return action.payload;
    }
    case LOGOUT_USER: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
